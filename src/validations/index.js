import { isEmail } from "validator";
export const emailValidation = (email) => {
  if (!email || !isEmail(email)) {
    return true;
  }
  return false;
};

export const nameValidation = (name) => {
  if (!name || name.length < 3) {
    return true;
  }
  return false;
};

export const passwordValidation = (password) => {
  if (!password || password.length < 8) {
    return true;
  }
  return false;
};

export const passwordMatchValidation = (password, confirmPassword) => {
  if (password !== confirmPassword || !confirmPassword) {
    return true;
  }
  return false;
};
