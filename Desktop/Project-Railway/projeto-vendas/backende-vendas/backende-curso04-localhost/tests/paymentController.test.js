const request = require('supertest');
const express = require('express');
const { createPixTransaction, webhookPagarme } = require('../src/controllers/paymentController');

// Cria um app Express para testes
const app = express();
app.use(express.json());

// Define as rotas para o controlador de pagamento
app.post('/order/payments/pix', createPixTransaction);
app.post('/order/webhook-pagarme', webhookPagarme);

jest.mock('axios'); // Moca o axios para evitar chamadas reais à API
const axios = require('axios');

describe('Testes de PaymentController', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Limpa os mocks após cada teste
  });

  // Teste para a função createPixTransaction
  test('Deve criar uma transação PIX com sucesso', async () => {
    // Mock para a resposta da API pagar.me
    axios.post.mockResolvedValue({
      data: {
        charges: [
          {
            last_transaction: {
              qr_code: 'mock_qr_code',
              qr_code_url: 'mock_qr_code_url'
            }
          }
        ]
      }
    });

    // Dados de exemplo para a requisição
    const requestData = {
      name: 'Jorge Luiz',
      email: 'john.doe@example.com',
      document: '08432220426',
      numberPhone: '987654321'
    };

    const response = await request(app)
      .post('/order/payments/pix')
      .send(requestData);

    // Verifica se a resposta é 200 (sucesso)
    expect(response.status).toBe(200);
    // Verifica o corpo da resposta
    expect(response.body).toEqual(expect.objectContaining({
      qr_code: expect.any(String), // Verifica se é uma string
      pix_qr_code_url: expect.any(String) // Verifica se é uma string
    }));
  });
});
