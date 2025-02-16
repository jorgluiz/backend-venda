// Verificações de autenticação, validação, etc.

const jwt = require('jsonwebtoken'); // Importa o módulo 'jsonwebtoken' para lidar com tokens JWT
const cookie = require('cookie'); // Importa o módulo 'cookie' para manipulação de cookies
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

// Função middleware assíncrona para autenticar o usuário
const authenticated = async (req, res) => {
  // Verifica se não há dados de usuário na requisição
  if (!req.user) {
    return res.status(404).json({ error: 'Email not found' }); // Retorna um erro informando que o e-mail não foi encontrado
  }

  // Cria um payload com os dados do usuário
  const payload = {
    email: req.user.email,
    id: req.user.user_id
  };

  // Gera um token de acesso usando o JWT com o payload, a chave secreta e um tempo de expiração de 10 minutos
  const accessToken = jwt.sign({ payload }, process.env.JWT_AUTH_TOKEN, { expiresIn: '1d' });

  return res.send(accessToken);
};

module.exports = {
  authenticated // Exporta a função 'authenticated' para ser utilizada em outros arquivos
};

// expiresIn ao criar um token JWT:
// 15m: 15 minutos
// 1h: 1 hora
// 1d: 1 dia
// 7d: 7 dias
// intervalos de tempo personalizados de acordo com suas necessidades, combinando diferentes unidades de tempo
//  30s: 30 segundos
//  2h30m: 2 horas e 30 minutos
//  14d6h: 14 dias e 6 horas
