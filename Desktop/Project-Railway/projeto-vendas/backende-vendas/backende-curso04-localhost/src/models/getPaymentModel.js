// /models: Define a interação com o banco de dados (neste caso, MySQL) para salvar e consultar dados.

const { db } = require('../config/db');

// Salva o status da transação no banco de dados
const getPayment = (transactionID) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM payments WHERE transaction_id = $1';
    db(sql, [transactionID], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results.rows[0]);
    });
  });
};
module.exports = {
  getPayment
};
