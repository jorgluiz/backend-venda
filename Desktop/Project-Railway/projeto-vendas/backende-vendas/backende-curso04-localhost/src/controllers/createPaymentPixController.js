// paymentController.js
const axios = require('axios');
const { keyPagarmeBase64 } = require('../config/configEnv');
const { savePaymentStatus } = require('../models/savePaymentStatusModel');
const { getPayment } = require('../models/getPaymentModel');
const { updateStatusPayment } = require('../models/updateStatusPaymentModel');
const { getDDD, getPhoneWithoutDDD } = require('../utils/formatPhone');

// Adiciona Socket.io como parâmetro no controller
const createPaymentPix = async (req, res) => {
  const userDecoded = req.token;
  const body = req.body;
  const ddd = getDDD(body.phone);
  const numberPhone = getPhoneWithoutDDD(body.phone);

  const transactionData = {
    items: [
      {
        amount: 100,
        description: 'Chaveiro do Tesseract',
        quantity: 1
      }
    ],
    customer: {
      name: `${body.name}`,
      email: `${body.email}`,
      type: 'individual',
      document: `${body.document}`,
      phones: {
        home_phone: {
          country_code: '55',
          number: numberPhone,
          area_code: ddd
        }
      }
    },
    payments: [
      {
        payment_method: 'pix',
        pix: {
          expires_in: 60 * 60 * 12,
          additional_information: [
            {
              name: 'Quantidade',
              value: '1'
            }
          ]
        }
      }
    ]
  };

  try {
    const transaction = await axios.post('https://api.pagar.me/core/v5/orders', transactionData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${keyPagarmeBase64}`
      }
    });

    // pagamento efetuado com sucesso, agora com esses dados que foram pago, será salvo no banco de dados junto com id do usuiario para identificar quem pago.
    await savePaymentStatus(userDecoded.payload.id, transaction.data.status, transaction.data.id, transaction.data.charges[0].payment_method, transaction.data.customer.document);

    return res.send({
      qr_code: transaction.data.charges[0].last_transaction.qr_code,
      pix_qr_code_url: transaction.data.charges[0].last_transaction.qr_code_url,
      userID: userDecoded.payload.id
    });
  } catch (error) {
    console.error('Erro ao gerar PIX:', error.response ? error.response.data : error.message);
    return res.status(500).send('Erro ao gerar PIX');
  }
};

// Webhook para confirmar pagamento
const webhookPagarme = (io) => async (req, res) => {
  try {
    // 1. Captura os dados recebidos da API Pagar.me
    const response = req.body;
    console.log(' id é transaction-Id pix', response);

    // 2. Obtém os dados do pagamento referente ao usuário que pagou. Dados são importante para atualizar o status de pagamento do usuário.
    const paymentID = await getPayment(response.data.id);
    if (!paymentID) {
      console.log('Pagamento não encontrado.');
      return res.status(404).send('Pagamento não encontrado.');
    }

    // 3. Atualiza o status de pagamento do usuário para "paid"
    const resultTablePayment = await updateStatusPayment(response.data.status, paymentID.transaction_id);

    // 4. Obtém o ID do usuário para enviar a notificação em tempo real.
    const userID = resultTablePayment.fk_user_id;

    // 5. Emite um evento WebSocket para o frontend com a atualização do pagamento
    io.to(userID).emit('paymentUpdate', {
      transactionId: resultTablePayment.transaction_id,
      status: resultTablePayment.status
    });
    console.log('Payment status updated and event emitted.');
  } catch (err) {
    console.error('Error updating payment status or emitting WebSocket event:', err);
    return res.status(500).send('Error processing webhook.');
  }

  res.status(200).send('Webhook recebido com sucesso.');
};

module.exports = {
  createPaymentPix,
  webhookPagarme
};

// // /controllers: Contém as funções que lidam com a lógica de controle das rotas. São
// // responsáveis por lidar com a interação entre a requisição HTTP e a lógica de negócios.

// // Todas as requisições são feitas no endpoint base:
// // https://api.pagar.me/core/v5.

// const { getDDD, getPhoneWithoutDDD } = require('../utils/formatPhone');

// // paymentController.js
// const axios = require('axios');
// const { keyPagarmeBase64, keyPagarmeBase64Test } = require('../config/configEnv'); // ok
// const { savePaymentStatus } = require('../models/savePaymentStatusModel'); // ok
// const { getPayment } = require('../models/getPaymentModel');
// const { updateStatusPayment } = require('../models/updateStatusPaymentModel');

// // Criação de transação PIX
// const createPaymentPix = async (req, res) => {
// // dados obtido middlewares/verifyToken
//   const userDecoded = req.token;
//   const body = req.body;

//   const ddd = getDDD(body.phone);

//   const numberPhone = getPhoneWithoutDDD(body.phone);

//   // Dados para criar a transação via PIX
//   const transactionData = {
//     items: [
//       {
//         amount: 10,
//         description: 'Chaveiro do Tesseract',
//         quantity: 1
//       }
//     ],
//     customer: {
//       name: `${body.name}`,
//       email: `${body.email}`,
//       type: 'individual',
//       document: `${body.document}`,
//       phones: {
//         home_phone: {
//           country_code: '55',
//           number: numberPhone,
//           area_code: ddd
//         }
//       }
//     },
//     payments: [
//       {
//         payment_method: 'pix',
//         pix: {
//           expires_in: 60 * 60 * 12,
//           additional_information: [
//             {
//               name: 'Quantidade',
//               value: '1'
//             }
//           ]
//         }
//       }
//     ]
//   };

//   try {
//     const transaction = await axios.post('https://api.pagar.me/core/v5/orders', transactionData, {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Basic ${keyPagarmeBase64}`
//       }
//     });

//     //     console.log(transaction, 'transaction');
//     //     console.log(transaction.data, 'transaction.data');
//     //     console.log(transaction.data.status, transaction.data.id, transaction.data.charges[0].payment_method, transaction.data.customer.document);
//     await savePaymentStatus(userDecoded.payload.id, transaction.data.status, transaction.data.id, transaction.data.charges[0].payment_method, transaction.data.customer.document);
//     return res.send({
//       qr_code: transaction.data.charges[0].last_transaction.qr_code,
//       pix_qr_code_url: transaction.data.charges[0].last_transaction.qr_code_url
//     });
//   } catch (error) {
//     console.log(error);
//     console.error('Erro ao gerar PIX:', error.response ? error.response.data : error.message);
//     return res.status(500).send('Erro ao gerar PIX');
//   }
// };

// // Webhook para confirmar pagamento
// const webhookPagarme = async (req, res) => {
//   const response = req.body;
//   //   console.log(response, 'webhookPagarme');
//   // id createPixTransaction está peding depois de pago tenho que buscar o mesmo ID para substituir de pending por paid
//   const paymentID = await getPayment(response.data.id);
//   console.log(paymentID, 'paymentID');

//   if (!paymentID) {
//     console.log('passou por aqui');
//     return;
//   }

//   const resultStatus = await updateStatusPayment(response.data.status, paymentID.transaction_id);
//   console.log(resultStatus);

//   //   if (response.data.status === 'paid') {
//   //     const transactionId = response.data.id;
//   //     const customerEmail = response.data.customer.email;
//   //     const transactionSuccess = response.data.status;

// //     //     await saveTransactionStatus(transactionSuccess, transactionId, customerEmail);
// //     res.status(200).send('Pagamento confirmado');
// //   } else {
// //     res.status(200).send('Evento não relevante');
// //   }
// };

// module.exports = {
//   createPaymentPix,
//   webhookPagarme
// };
