require('dotenv').config();
const { Pool } = require('pg'); // Importa o Pool do pacote pg

// Criando o pool de conexões para PostgreSQL
const pool = new Pool({
  max: 10, // Limite máximo de conexões
  host: process.env.PG_HOST || 'localhost',
  user: process.env.PG_USER || 'postgres',
  password: process.env.PG_PASSWORD || '226699',
  database: process.env.PG_DATABASE || 'db_course',
  idleTimeoutMillis: 30000, // Tempo máximo para conexões ociosas antes de serem liberadas
  connectionTimeoutMillis: 2000 // Tempo limite para tentar estabelecer uma nova conexão
  // waitForConnections é o comportamento padrão no Pool do pg
  // queueLimit é gerenciado automaticamente
});

// Listener de erro no pool
pool.on('error', (err) => {
  console.error('Erro no pool de conexões:', err);
});

// Função para realizar consultas
function db(sql, params, callback) {
  return pool.query(sql, params, callback);
}

module.exports = { db };
