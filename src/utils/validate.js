export const validate = (values) => {
    const errors = {};
    if (values.login.length > 24) {
        errors.login = "Слишком длинный логин"
    }
    if (values.password.length > 24) {
        errors.password = "Слишком длинный пароль"
    }
    if (values.login.length < 3) {
        errors.login = 'Слишком короткий логин';
    }
    if (values.password.length < 3) {
        errors.password = 'Слишком короткий пароль';
    }
    return errors;
}