import { isEmail } from "validator";
export const emailValidation = (email) => {
  if (!email || !isEmail(email)) {
    return "Email invalido";
  }
};

export const nameValidation = (name) => {
  if (!name || name.length < 3) {
    return "Nome invalido";
  }
};

export const passwordValidation = (password) => {
  if (!password || password.length < 8) {
    return "Senha invalida";
  }
};

export const passwordMatchValidation = (password, confirmPassword) => {
  if (password !== confirmPassword || !confirmPassword) {
    return "Senha incorreta";
  }
};
