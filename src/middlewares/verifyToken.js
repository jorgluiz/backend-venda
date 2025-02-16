// Verificações de autenticação, validação, etc.

const jwt = require('jsonwebtoken'); // Importa o módulo 'jsonwebtoken' para lidar com tokens JWT
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

// Função middleware para verificar se o token é válido
const verifyToken = (req, res, next) => {
  console.log('verifyToken');

  // Obtém o token do cabeçalho 'Authorization' da requisição
  const tokenHeader = req.headers.authorization;
  //   console.log(tokenHeader, 'tokenHeader tokenHeader tokenHeader');
  // Verifica se o cabeçalho contém o token
  if (!tokenHeader) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }
  // Extrai o token da string "Bearer <token>"
  const token = tokenHeader && tokenHeader.split(' ')[1];
  // Verifica se o token existe
  if (!token) return res.status(401).json({ error: 'Restricted access' }); // Retorna um erro de acesso restrito caso não haja token

  try {
    // Verifica se o token é válido utilizando a chave secreta definida no arquivo .env
    const decoded = jwt.verify(token, process.env.JWT_AUTH_TOKEN);
    //     console.log(decoded, 'jwt.verify jwt.verify'); // Exibe os dados decodificados do token no console para fins de debug

    req.token = decoded;
    next();
  } catch (error) {
    console.log('JWT Error:', error.message); // Exibe detalhes do erro no console

    // Tratamento específico para token expirado
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({
        error: 'Token expired. Please log in again.',
        expiredAt: error.expiredAt // Retorna a data de expiração para o cliente, se necessário
      });
    }

    // Tratamento para token inválido ou outros erros de verificação
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ error: 'Invalid token. Please provide a valid token.' });
    }

    // Erro genérico para casos não cobertos
    return res.status(500).json({ error: 'Internal server error during token validation.' });
  }
};

module.exports = {
  verifyToken // Exporta a função 'verifyToken' para ser utilizada em outros arquivos
};
