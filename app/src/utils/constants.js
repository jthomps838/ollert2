export const USERNAME_REGEX = /^[a-zA-Z0-9_]{6,20}$/;
export const PASSWORD_DEFAULTS = {
    minLength: 8,
    maxLength: 30,
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
};
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
