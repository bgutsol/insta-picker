import React from 'react';
import PropTypes from 'prop-types';
import './Login.scss';

const Login = ({onClick}) => {
  return (
    <div className="login">
      <h2 className="login__text">
        Please login to your instagram account to use app
      </h2>
      <button className="login__btn" onClick={onClick}>Login</button>
    </div>
  );
};

Login.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Login;
