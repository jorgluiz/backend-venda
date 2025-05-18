const usersModel = require('../models/usersModel'); // Supondo que você tenha um modelo de usuário no banco

// Middleware para limitar tentativas de login
const loginLimiterMiddleware = async (req, res, next) => {
  try {
    const email = req.body.email;

    // 1. Verifica se o usuário existe
    const userExists = await usersModel.loginUserExists(email);
    if (!userExists) {
      return res.status(200).json({ message: 'user does not exist' });
    }

    // 2. Verifica se o usuário já está bloqueado
    const isBlocked = await usersModel.checkEmailBlocked(userExists.email);
    if (isBlocked) {
      console.log(`blocked_user_id: ${isBlocked.email}`);
      return res.status(200).json({ message: 'blocked user' });
    }

    // 3. Atualiza tentativas de login
    const user = await usersModel.updateBlockedUserAttempts(userExists.email);
    console.log(`Tentativas de login para ${user.email}: ${user.attempts}`);

    // 4. Bloqueia usuário se atingir o limite
    if (user.attempts >= 5) {
      console.log('Usuário bloqueado após múltiplas tentativas!');
      // Bloqueia o usuário temporário no banco de dados
      await usersModel.addUserBlocked(userExists.email, userExists.user_id);

      return res.status(429).json({ message: 'Request failed with status code 429' });
    }

    // 5. Permite o fluxo continuar
    next();
  } catch (error) {
    console.error('Erro no loginLimiterMiddleware:', error);
    return res.status(500).json({ message: 'Server error.' });
  }
};

module.exports = { loginLimiterMiddleware };
// Ele protege sua aplicação contra ataques persistentes, limitando as requisições de usuários maliciosos.
