const express = require('express');
const routes = express.Router();

// Importações dos controladores e middlewares
const createPaymentPixController = require('../controllers/createPaymentPixController');
const usersController = require('../controllers/usersController');
const authenticateUser = require('../middlewares/authenticateUser');
const verify = require('../middlewares/verifyToken');
const checkPayment = require('../controllers/checkPaymentController');
const loginLimiter = require('../middlewares/loginRateLimiter');

// Aqui, io é "injetado" nas rotas para que possa ser utilizado dentro de funções específicas
module.exports = (io) => {
  /**
 * ====================
 * ROTAS PARA PAGAMENTOS
 * ====================
 */

  // Criação do grupo de rotas '/order' para pagamentos
  const payment = express.Router();
  routes.use('/order', payment);

  // Rota para criar pagamento via PIX
  payment.post('/payments-pix', verify.verifyToken, createPaymentPixController.createPaymentPix);

  // Webhook para notificações de pagamento via Pagar.me
  payment.post('/webhook-pagarme', createPaymentPixController.webhookPagarme(io));

  /**
   * ===================
   * ROTAS PARA USUÁRIOS
   * ===================
   */

  // Criação do grupo de rotas '/users/login' para gerenciamento de usuários
  const user = express.Router();
  routes.use('/users', user);

  // Rota para registro de novos usuários
  user.post('/register', usersController.registerUser);

  // Rota para login de usuários, seguido pela autenticação
  // user.post('/login', loginLimiter.loginLimiterMiddleware, usersController.loginUser, authenticateUser.authenticated);
  user.post('/login', loginLimiter.loginLimiterMiddleware, usersController.loginUser, authenticateUser.authenticated);

  /**
   * =======================
   * OUTRAS ROTAS / VERIFICAÇÕES
   * =======================
   */

  const check = express.Router();
  routes.use('/check', check);

  // Rota para verificar o status do pagamento
  check.post('/check-payment', verify.verifyToken, checkPayment.checkPayment);

  return routes;
};
