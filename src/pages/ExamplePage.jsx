import React from 'react';

import './ExamplePage.css';
import { useNavigate } from 'react-router-dom';

const ExamplePage = () => {
  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    localStorage.setItem('token', '');
    navigate('/auth');
  };

  return (
    <div className="example">
      <h1 className="example__title">Вы успешно вошли!</h1>
      <button onClick={logout} className="btn-reset example__button">
        Успешно выйти!
      </button>
    </div>
  );
};

export default ExamplePage;
