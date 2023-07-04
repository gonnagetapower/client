import React from 'react';
import Styles from './Snackbar.module.css';

const Snackbar = ({ isActive, message }) => {
  return (
    <div
      className={
        isActive
          ? [Styles.snackbar, Styles.fadeIn].join(' ')
          : [Styles.snackbar, Styles.fadeOut].join(' ')
      }>
      <div className="message">{message}</div>
    </div>
  );
};

export default Snackbar;
