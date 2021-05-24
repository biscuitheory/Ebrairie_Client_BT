import React, { useState } from 'react';

import InputGroup from '../components/inputgroup';
import Button from '../components/button';

const Register = () => {
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

  return (
    <>
      <h1>Register Page</h1>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '50%',
        }}
      >
        <InputGroup type="text" name="firstname" value={handleChange} />
        <InputGroup type="text" name="lastname" value={handleChange} />
        <InputGroup type="text" name="email" value={handleChange} />
        <InputGroup type="text" name="password" value={handleChange} />
        <Button name="Register" />
      </form>
    </>
  );
};

export default Register;
