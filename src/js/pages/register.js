import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../utils/api';

import InputGroup from '../components/inputgroup';
import Button from '../components/button';

const role = process.env.REACT_APP_ROLE;

export const validatePwdInput = (str = '') => str.length >= 8;

const Register = () => {
  const history = useHistory();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (inputValue, inputName) => {
    if (inputName === 'firstname') setFirstname(inputValue);
    if (inputName === 'lastname') setLastname(inputValue);
    if (inputName === 'email') setEmail(inputValue);
    if (inputName === 'password') setPassword(inputValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const body = {
      firstname,
      lastname,
      email,
      password,
      role,
    };

    try {
      const result = await api.post('/admin/register', body);
      console.log('status', result.status);
      if (result.status === 201) {
        history.push('/login');
        console.log('201 CREATED');
      }
    } catch (error) {
      console.error('connection failed', error.message);
    }
  };

  return (
    <>
      <h1>Register Page</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '50%',
        }}
      >
        <InputGroup type="text" name="firstname" title="Firstname" value={handleChange} />
        <InputGroup type="text" name="lastname" title="Lastname" value={handleChange} />
        <InputGroup type="email" name="email" title="Email" value={handleChange} />
        <InputGroup type="password" name="password" title="Password" value={handleChange} />
        {email && !validatePwdInput(password)
          ? <p style={{color:'red'}}>Password must contain at least 8 characters</p>
          : null}
        <Button name="Register" />
      </form>
    </>
  );
};

export default Register;
