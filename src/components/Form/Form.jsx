import React from 'react';

import './Form.css';

const Form = ({
  handleSubmit,
  formData,
  handleFormData,
  formTitle,
  toggleForm,
  activeForm,
  formErrors,
}) => {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h3 className="form__title">{formTitle}</h3>
        <label className="form__label" for="login">
          Логин
        </label>
        <input
          value={formData.login}
          onChange={handleFormData}
          name="login"
          type="text"
          className={formErrors.login ? 'form__input form__input--error' : 'form__input'}
          id="login"
        />
        {formErrors && <span className="error-message">{formErrors.login}</span>}
        <label className="form__label" for="password">
          Пароль
        </label>
        <input
          value={formData.password}
          onChange={handleFormData}
          name="password"
          type="password"
          className={
            formErrors.password ? 'form__input form__input--error' : 'form__input'
          }
          id="password"
        />
        {formErrors && <span className="error-message">{formErrors.password}</span>}
        <button type="submit" className="btn-reset form__btn">
          {formTitle}
        </button>
      </form>
      {activeForm === 'login' ? (
        <div className="change-form">
          <button
            onClick={() => toggleForm('registration')}
            className="btn-reset change-form__btn">
            Нет аккаунта? Зарегистрируйтесь
          </button>
        </div>
      ) : (
        <div className="change-form">
          <button
            onClick={() => toggleForm('login')}
            className="btn-reset change-form__btn">
            Есть аккаунт? Войдите
          </button>
        </div>
      )}
    </div>
  );
};

export default Form;
