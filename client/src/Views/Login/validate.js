const validate = (user) => {
  let errors = {};

  if (!user.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (user.email && user.email.length > 35) {
    errors.email = 'Email cannot exceed 35 characters';
  }

  if (!user.password || !/.*\d+.*/.test(user.password)) {
    errors.password = 'Password must have at least one number';
  }

  if (user.password && (user.password.length < 6 || user.password.length > 10)) {
    errors.password = 'The password must be between 6 and 10 characters in length';
  }

  return errors;
};

export default validate;