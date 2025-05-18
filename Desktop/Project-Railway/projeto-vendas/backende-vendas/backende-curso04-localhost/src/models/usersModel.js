// A camada de model vai se comunicar diretamente com o banco, fazendo queries SQL.

const { db } = require('../config/db');

// Função para criar um novo usuário
const createUser = (userData) => {
  return new Promise((resolve, reject) => {
    const { name, email, password } = userData;
    const sql = 'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3)';
    db(sql, [name, email, password], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

const loginUser = (userData) => {
  return new Promise((resolve, reject) => {
    const { email, password } = userData;
    const sql = 'SELECT * FROM users WHERE email = $1 AND password_hash = $2';
    db(sql, [email, password], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results.rows[0]);
    });
  });
};

const checkEmailBlocked = (email) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM blocked_users WHERE email = $1';
    db(sql, [email], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results.rows[0]);
    });
  });
};

const addUserBlocked = (email, userID) => {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO blocked_users (email, fk_user_id) VALUES ($1, $2)';
    db(sql, [email, userID], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results.rows[0]);
    });
  });
};

const loginUserExists = (email) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM users  WHERE email = $1';
    db(sql, [email], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results.rows[0]);
    });
  });
};

const updateBlockedUserAttempts = (email) => {
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE users SET attempts = attempts + 1 WHERE email = $1 RETURNING attempts, email'; // Use $1 para o parâmetro
    db(sql, [email], (error, results) => {
      if (error) {
        console.log(error, 'error');
        return reject(error);
      }
      resolve(results.rows[0]);
    });
  });
};

const resetLoginAttempts = (email) => {
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE users SET attempts = 0 WHERE email = $1';
    db(sql, [email], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results.rows[0]);
    });
  });
};

module.exports = {
  createUser,
  loginUser,
  checkEmailBlocked,
  addUserBlocked,
  loginUserExists,
  updateBlockedUserAttempts,
  resetLoginAttempts
};
