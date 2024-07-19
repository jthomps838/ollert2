import { EMAIL_REGEX, PASSWORD_DEFAULTS, USERNAME_REGEX } from './constants.js';

export const validateUsername = (username) => USERNAME_REGEX.test(username);

export const validatePassword = (pass) => {
    if (
        pass.length < PASSWORD_DEFAULTS.minLength ||
        pass.length > PASSWORD_DEFAULTS.maxLength
    )
        false;

    return PASSWORD_DEFAULTS.regex.test(pass);
};

export const validateEmail = (email) => EMAIL_REGEX.test(email);
