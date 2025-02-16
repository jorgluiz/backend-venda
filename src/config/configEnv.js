// Função: Carrega e exporta variáveis de ambiente a partir do arquivo .env
// Utilizado para armazenar chaves públicas e privadas que podem ser usadas em várias partes da aplicação.
require('dotenv').config();

const keyPagarmeBase64 = Buffer.from(`${process.env.SECRET_KEY_PAGARME}:`).toString('base64');
const keyPagarmeBase64Test = Buffer.from(`${process.env.SECRET_KEY_PAGARME_TEST}:`).toString('base64');

module.exports = {
  keyPagarmeBase64,
  keyPagarmeBase64Test
};
