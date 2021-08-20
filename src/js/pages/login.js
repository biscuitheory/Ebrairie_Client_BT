import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import api from '../utils/api';

import InputGroup from '../components/inputgroup';
import Button from '../components/button';

export const validatePwdInput = (str = '') => str.length >= 8;

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (inputValue, inputName) => {
    if (inputName === 'email') setEmail(inputValue);
    if (inputName === 'password') setPassword(inputValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const body = {
      email,
      password,
    };

    try {
      const result = await api.post('/admin/authenticate', body);
      if (result.status === 200) {
        dispatch({ type: 'USER_SET', payload: result.data });
        history.push('/dashboard');
      }
    } catch (error) {
      dispatch({ type: 'USER_RESET' });
      console.error(error.message);
    }
  };

  return (
    <>
      <h1>Login Page</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '50%',
        }}
      >
        <InputGroup
          type="email"
          name="email"
          title="Email"
          value={handleChange}
        />
        <InputGroup
          type="password"
          name="password"
          title="Password"
          value={handleChange}
        />
        {password && !validatePwdInput(password) ? (
          <p style={{ color: 'red' }}>
            Password must contain at least 8 characters
          </p>
        ) : null}
        <Button name="Login" />
      </form>
    </>
  );
};

export default Login;
