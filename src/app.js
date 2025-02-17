const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

// Cria o app e o servidor HTTP
const app = express();
const server = http.createServer(app);

// Configuração do Socket.io
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: ['https://backend-venda.up.railway.app/users/register', 'http://localhost:5173'],
    methods: ['GET', 'POST'],
    credentials: true
  }
});

// Configuração do body-parser
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));

// Aplicar CORS globalmente
const corsOptions = {
  origin: ['https://backend-venda.up.railway.app/users/register', 'http://localhost:5173'],
  methods: ['GET', 'POST'],
  credentials: true
};
app.use(cors(corsOptions));

// Rota de Webhook passando o io para o controller
// app.post('/api/webhook/payment', webhookPagarme(io));

// Injeção do `io` nas rotas
app.use('/', routes(io));

// Iniciar o servidor
server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

// Configuração do WebSocket para novas conexões
io.on('connection', (socket) => {
  console.log('Um usuário se conectou via WebSocket.', socket.id);

  // token obtdo pelo frontend
  // const token = socket.handshake.auth.token;
  // console.log('Token recebido:', token);

  // Adicione o evento joinRoom no lado do servidor para associar o socket a uma sala específica baseada no userID:
  socket.on('joinRoom', (userID) => {
    console.log(`Associando o socket ${socket.id} ao room ${userID}`);
    // Com salas, você evita enviar notificações desnecessárias a todos os usuários conectados.
    // O sistema é escalável, pois cada usuário tem sua própria sala e escuta apenas os eventos relevantes.
    socket.join(userID); // Adiciona o socket à sala com base no userID
  });

  socket.on('disconnect', () => {
    console.log('Usuário desconectado:', socket.id);
  });
});

// const express = require('express'); // Configuração principal do Express
// const http = require('http');
// const bodyParser = require('body-parser');
// const { routes } = require('./routes');
// const cors = require('cors');
// const { Server } = require('socket.io'); // Configuração do Socket.io

// // Cria o app e o servidor HTTP
// const app = express();
// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: ['http://localhost:3000', 'http://localhost:5173'],
//     methods: ['GET', 'POST'],
//     credentials: true
//   }
// });

// // Configuração de CORS para a maioria das rotas (exceto /register)
// const corsOptions = {
//   origin: ['http://localhost:3000', 'http://localhost:5173', 'https://meudominio.com', 'https://9449-45-187-170-185.ngrok-free.app'], // Domínios permitidos
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
//   allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
//   credentials: true // Permite cookies/sessões entre domínios
// };

// // Aplicar CORS globalmente (para todas as rotas que precisam de Authorization)
// app.use(cors(corsOptions));

// // Body parser para JSON e URL encoded, com limite de 1MB
// app.use(bodyParser.json({ limit: '1mb' }));
// app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));

// // Roteamento principal
// app.use('/', routes);

// // Iniciar o servidor
// server.listen(3000, () => {
//   console.log('Servidor rodando na porta 3000');
// });

// // Configuração do WebSocket para novas conexões
// io.on('connection', (socket) => {
//   console.log('Um usuário se conectou via WebSocket.');

//   // Você pode adicionar mais eventos se necessário
// });

// // // Configuração principal do Express
// // const app = require('express')(); // Cria uma instância do Express
// // const bodyParser = require('body-parser'); // Importa o middleware body-parser para processar dados enviados no corpo da requisição
// // const { routes } = require('./routes'); // Importa as rotas definidas em um arquivo separado
// // const cors = require('cors');

// // // Enable CORS for all routes
// // // app.use(cors());

// // // Or enable CORS for specific routes
// // app.use('/users/register', cors());
// // app.use('/users/login', cors());
// // app.use('/verifyToken', cors());
// // app.use('/order/payments-pix', cors());
// // app.use('/check-payment', cors());

// // // Por que usar 100KB?
// // // Segurança: Limitar o tamanho ajuda a evitar ataques em que o corpo da requisição é enviado com
// // // dados excessivos para sobrecarregar o servidor.

// // // Eficiência: Para um cadastro de usuário, 100KB dá margem suficiente para campos adicionais sem
// // // comprometer a performance ou segurança.
// // app.use(bodyParser.json({ limit: '1mb' })); // Configura o middleware para processar dados em formato JSON, limitando o tamanho do corpo da requisição a 100KB
// // app.use(bodyParser.urlencoded({ limit: '1mb', extended: true })); // Configura o middleware para processar dados enviados no formato 'application/x-www-form-urlencoded', também limitando o corpo da requisição a 100KB

// // app.use('/', routes); // Define que todas as rotas começarão na raiz ('/') e serão gerenciadas pelo objeto 'routes'

// // // Iniciar o servidor e escutar na porta 3000
// // app.listen(3000, () => {
// //   console.log('Servidor ouvindo na porta 3000'); // Exibe uma mensagem no console indicando que o servidor está rodando na porta 3000
// // });
