import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import api from '../utils/api';

import InputGroup from '../components/inputgroup';
import Button from '../components/button';

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
      console.error(error.message);
      dispatch({ type: 'USER_RESET' });
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
        <InputGroup type="text" name="email" value={handleChange} />
        <InputGroup type="text" name="password" value={handleChange} />
        <Button name="Register" />
      </form>
    </>
  );
};

export default Login;
