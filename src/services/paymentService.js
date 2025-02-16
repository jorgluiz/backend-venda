// Serviço para lidar com a API de pagamento (Pagar.me)

// /services: Contém a lógica de negócios e interações com o banco de dados. Este arquivo usa o
//  model para salvar o status de pagamento no banco de dados.

// paymentService.js
const { saveTransactionStatus } = require('../models/paymentModel');

// Salva o status de pagamento no banco de dados
const savePaymentStatus = async (transactionId, status, customerEmail) => {
  try {
    await saveTransactionStatus(transactionId, status, customerEmail);
    console.log(`Status do pagamento da transação ${transactionId} salvo com sucesso.`);
  } catch (error) {
    console.error(`Erro ao salvar o status do pagamento: ${error.message}`);
  }
};

module.exports = {
  savePaymentStatus
};
