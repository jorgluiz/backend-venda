// Função para extrair o DDD
exports.getDDD = (phone) => {
  const match = phone.match(/\((\d{2})\)/); // Captura o DDD entre parênteses
  return match ? match[1] : null; // Se encontrou o DDD, retorna; caso contrário, retorna null
};

// Função para extrair o número de telefone sem o DDD
exports.getPhoneWithoutDDD = (phone) => {
  const cleanedPhone = phone.replace(/\D/g, ''); // Remove tudo que não for número
  return cleanedPhone.length > 2 ? cleanedPhone.slice(2) : null; // Remove o DDD (primeiros dois dígitos)
};
