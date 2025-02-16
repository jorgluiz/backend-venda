/**
 * Módulo responsável por verificar o status de pagamento de um usuário.
 *
 * Importa o modelo de dados `checkPaymentModel`, que contém a lógica de acesso ao banco de dados.
 */
const checkPaymentModel = require('../models/checkPaymentModel');

/**
 * Middleware que verifica o status de pagamento do usuário autenticado.
 *
 * @param {Object} req - Objeto de requisição do Express.
 * @param {Object} res - Objeto de resposta do Express.
 * @param {Function} next - Próximo middleware na cadeia de execução.
 *
 * O middleware espera que o token JWT já tenha sido validado e esteja disponível em `req.token`.
 * A função extrai o ID do usuário do token decodificado e consulta o banco de dados para verificar o status do pagamento.
 *
 * Se o pagamento não for encontrado, retorna `{ paid: null }`.
 * Caso contrário, retorna `{ paid: <status_do_pagamento> }`.
 */
const checkPayment = async (req, res, next) => {
  console.log('Checking payment');
  try {
    // Obtém os dados do token JWT decodificado
    const decoded = req.token;

    // Extrai o ID do usuário do token (ignorando o e-mail, se presente)
    const { email, ...userID } = decoded.payload;

    // Consulta o status de pagamento do usuário no banco de dados
    const responsePayment = await checkPaymentModel.checkPaymentStatus(userID.id);

    // Caso o pagamento não tenha sido registrado
    if (responsePayment.payment === null) {
      return res.send({ paid: responsePayment.payment });
    }

    // Retorna o status de pagamento do usuário
    return res.send({ paid: responsePayment.status });
  } catch (error) {
    console.error('Erro ao verificar pagamento:', error.message);
    return res.status(500).json({ error: 'Erro ao processar a verificação de pagamento.' });
  }
};

/**
 * Exporta a função `checkPayment` para ser utilizada em rotas protegidas.
 */
module.exports = {
  checkPayment
};
