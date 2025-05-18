// /models: Define a interação com o banco de dados (neste caso, MySQL) para salvar e consultar dados.

const { db } = require('../config/db');

// Salva o status da transação no banco de dados
const savePaymentStatus = (userDecodedPayloadId, status, transactionId, paymentMethod, document) => {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO payments (fk_user_id, status, transaction_id, payment_method, document ) VALUES ($1, $2, $3, $4, $5)';
    db(sql, [userDecodedPayloadId, status, transactionId, paymentMethod, document], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};
module.exports = {
  savePaymentStatus
};
