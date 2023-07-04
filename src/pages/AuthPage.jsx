import React, { useState } from 'react';
import { validate } from '../utils/validate';
import { useSnackbar } from '../hooks/useSnackbar';

import './AuthPage.css';
import { Form, Snackbar } from '../components';
import { login, registration } from '../http/userApi';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const navigate = useNavigate();

  const [activeForm, setActiveForm] = useState('login');
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const { isActive, message, openSnackBar } = useSnackbar();

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    if (Object.keys(validate(formData)).length === 0) {
      login(formData.login, formData.password)
        .then(() => navigate('/'))
        .catch((e) => openSnackBar(e.response.data.message));
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    if (Object.keys(formErrors).length === 0) {
      registration(formData.login, formData.password).then((data) => {
        openSnackBar(data.data.message);
        setActiveForm('login');
      });
    } else {
      console.log(validate(formData));
    }
  };

  const toggleForm = (formName) => {
    setActiveForm(formName);
    setFormErrors({});
  };

  return (
    <div>
      {activeForm === 'login' ? (
        <Form
          formTitle={'Войти'}
          formData={formData}
          handleFormData={handleFormData}
          handleSubmit={handleLogin}
          toggleForm={toggleForm}
          activeForm={activeForm}
          formErrors={formErrors}
        />
      ) : (
        <Form
          formTitle={'Регистрация'}
          formData={formData}
          handleFormData={handleFormData}
          handleSubmit={handleRegistration}
          toggleForm={toggleForm}
          activeForm={activeForm}
          formErrors={formErrors}
        />
      )}
      <Snackbar isActive={isActive} message={message} />
    </div>
  );
};

export default AuthPage;
