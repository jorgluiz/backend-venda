// /models: Define a interação com o banco de dados (neste caso, MySQL) para salvar e consultar dados.

const { db } = require('../config/db');

// Salva o status da transação no banco de dados
const updateStatusPayment = (statusPaid, paymentID) => {
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE payments SET status = $1 WHERE transaction_id = $2 RETURNING *';
    db(sql, [statusPaid, paymentID], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results.rows[0]);
    });
  });
};
module.exports = {
  updateStatusPayment
};
