export const isValidEmail = (email) => {
  if(!email) return false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};

export const isValidUsername = (username) => {
  if(!username) return false;
  
  const regex = /^[a-zA-Z0-9_]+$/;
  
  return username.length > 0 && regex.test(username);
};

export const isValidPassword = (password) => {
  if(!password) return false;
  
  const lengthRegex = /.{6,}/;

  return lengthRegex.test(password);
};