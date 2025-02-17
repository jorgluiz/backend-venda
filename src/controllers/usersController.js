//
// Aqui está um fluxo ideal para a implementação no usersController.registerUser:

// 1. Receber os dados do usuário (nome, e-mail, senha, etc.). ✅
// 2. Validar os dados (ex: formato do e-mail, senha segura). ✅
// 3. Verificar no banco de dados se o e-mail já existe.
// 4. Se o e-mail já existir, retornar um erro (409 - Conflict).
// 5. Se não existir, criar o usuário e armazenar a senha de forma segura (bcrypt hash).
// 6. Retornar sucesso (201 - Created) com os dados necessários (sem expor a senha).

const usersModel = require('../models/usersModel');

const registerUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    console.log(name, email, password);
    if (!name || !email || !password) return res.status(400).send({ error: 'Missing required fields for registration' });

    // Converte o email para minúsculas
    // password = password.replace(/\s+/g, '');
    // const lowerCaseEmail = email.toLowerCase();
    // const normalizedEmail = lowerCaseEmail.replace(/\s+/g, '');
    // const normalizedName = name.replace(/\s+/g, '').trim();
    // const lowerCaseName = normalizedName.toLowerCase();

    // Normalização de dados
    email = email.toLowerCase().trim();
    name = name.trim();
    password = password.trim(); // Removendo espaços na senha

    if (/^\d/.test(email)) {
      return res.status(200).send({ message: 'Email cannot start with numbers' });
    }

    if (email.length >= 60) {
      return res.status(200).send({ message: 'The characters exceeded the limit email' });
    }

    if (name.length >= 50) {
      return res.status(200).send({ message: 'The characters exceeded the limit name' });
    }

    if (password.length < 8 || password.length >= 100) {
      return res.status(200).send({ message: 'Password must contain between 6 and 100 characters' });
    }

    await usersModel.createUser({ name, email, password });
    // Retorna uma mensagem de sucesso e os detalhes do usuário cadastrado
    return res.status(200).send({ success: 'Registration successful' });
  } catch (error) {
    // Erro de email duplicado (PostgreSQL retorna código 23505)
    if (error.code === '23505') {
      // Lide com o erro de forma apropriada
      return res.status(200).json({ message: 'Email is already in use.' });
    } else {
      // Outros tipos de erros
      console.error('Erro inesperado:', error);
      return res.status(500).json({ message: 'Erro no servidor.' });
    }
  }
};

const loginUser = async (req, res, next) => {
  try {
    // 1. Receber os dados do usuário (e-mail e senha).
    const { email, password } = req.body;
    console.log(email, password);

    // 2. Converter o e-mail para minúsculas para evitar problemas de case-sensitive.
    const lowerCaseEmail = email.toLowerCase();

    // 3. Validar os dados. Verificar se o e-mail e a senha foram fornecidos.
    if (!email || !password) {
      console.log('estou aqui');
      return res.status(400).send({ error: 'Missing required fields for registration' });
    }
    // 4. Consultar o banco de dados para verificar se o usuário existe.
    const user = await usersModel.loginUser({ email: lowerCaseEmail, password });
    if (!user) {
      return res.status(200).send({ error: 'Invalid email or password' });
    }
    // 5. Remover dados sensíveis do usuário antes de retornar a resposta.
    const { password_hash, created_at, ...userWithoutSensitiveInfo } = user;

    // 6. Passar os dados do usuário para a próxima função (next()).
    req.user = userWithoutSensitiveInfo;

    // 7. Se o login for bem-sucedido. Redefinir o contador de tentativas de login para 0.
    await usersModel.resetLoginAttempts(user.email);
    next();
  } catch (error) {
    // Retorna um erro genérico para o cliente sem expor detalhes internos
    return res.status(500).send({ error: 'Internal Server Error' });
  }
};

module.exports = {
  registerUser,
  loginUser
};
