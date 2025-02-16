// /models: Define a interação com o banco de dados (neste caso, MySQL) para salvar e consultar dados.

const { db } = require('../config/db');

// Salva o status da transação no banco de dados
const checkPaymentStatus = (userID) => {
  return new Promise((resolve, reject) => {
    //     const sql = 'SELECT * FROM payments WHERE fk_user_id = $1 AND status = \'paid\' LIMIT 1';
    const sql = 'SELECT * FROM payments WHERE fk_user_id = $1 AND status = \'paid\' LIMIT 1';
    db(sql, [userID], (error, results) => {
      if (error) {
        return reject(error);
      }
      if (results.rowCount === 0) {
        return resolve({ message: 'Nenhum pagamento encontrado.', payment: null });
      }
      resolve(results.rows[0]);
    });
  });
};
module.exports = {
  checkPaymentStatus
};
