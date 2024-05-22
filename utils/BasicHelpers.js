export const isValidEmail = (email) => {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(emailRegex.test(email));
  return emailRegex.test(email);
};

export const validateUsername = (username, setIsUsernameValid) => {
  if (!username) return false;
  const regex = /^[a-zA-Z0-9_]+$/;
  // Check if the username is not empty and matches the regular expression
  return username.length > 0 && regex.test(username);
};

export const isValidPassword = (password) => {
  if (!password) return false;
  // Regular expressions for password validation
  const lengthRegex = /.{6,}/; // Minimum 6 characters
  const specialCharRegex = /[\W_]/; // At least one special character
  const letterRegex = /[a-zA-Z]/i; // At least one letter (case insensitive)
  const numberRegex = /\d/; // At least one number

  // Check if all criteria are met
  return (
    lengthRegex.test(password) &&
    specialCharRegex.test(password) &&
    letterRegex.test(password) &&
    numberRegex.test(password)
  );
};

let debounceTimeout;

export const debounce = (func, delay) => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(func, delay);
};
