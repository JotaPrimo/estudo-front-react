export const userValidations = {
  email: {
    required: 'Email é obrigatório',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Formato de email inválido',
    },
  },
  nome: {
    required: 'Nome é obrigatório',
    minLength: {
      value: 3,
      message: 'O nome precisa ter pelo menos 3 caracteres',
    },
  },
  senha: {
    required: 'Senha é obrigatória',
    minLength: {
      value: 6,
      message: 'A senha precisa ter pelo menos 6 caracteres',
    },
  },
  perfil: {
    required: 'Perfil é obrigatório',
  }
};
