// Services (Lógica de Negócio)
// A camada de service contém a lógica de negócios e usa os models para interagir com os dados.

const UserModel = require('../models/UserModel');

class UserService {
  // Lógica de negócio para criar um usuário
  static async createUser (userData) {
    try {
      const result = await UserModel.createUser(userData);
      return result;
    } catch (error) {
      throw new Error('Erro ao criar usuário: ' + error.message);
    }
  }

  // Lógica de negócio para listar todos os usuários
  static async getAllUsers () {
    try {
      const users = await UserModel.getAllUsers();
      return users;
    } catch (error) {
      throw new Error('Erro ao buscar usuários: ' + error.message);
    }
  }
}

module.exports = UserService;
