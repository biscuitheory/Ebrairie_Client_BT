import React from 'react';
import { expect } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';

import InputGroup from '../../components/inputgroup';
import { validatePwdInput } from '../login';

describe('Login form input and label rendering ', () => {
  test('email field should have corresponding label', () => {
    const component = render(
      <InputGroup type="email" name="email" title="Email" />
    );
    const emailInputNode = component.getByLabelText('Email');
    expect(emailInputNode.getAttribute('name')).toBe('email');
  });

  test('password field should have corresponding label', () => {
    const component = render(
      <InputGroup type="password" name="password" title="Password" />
    );
    const pwdInputNode = component.getByLabelText('Password');
    expect(pwdInputNode.getAttribute('name')).toBe('password');
  });
});

describe('Login form user interactions ', () => {
  test('validatePwdInput function should pass on correct input', () => {
    const inputValue = 'motdepasse';
    expect(validatePwdInput(inputValue)).toBe(true);
  });

  test('validatePwdInput function should fail on incorrect input', () => {
    const inputValue = 'motde';
    expect(validatePwdInput(inputValue)).not.toBe(true);
  });
  test('email input should accept text ', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <InputGroup
        type="email"
        name="email"
        title="Email"
        value={handleChange}
      />
    );
    const emailInputNode = getByLabelText('Email');
    expect(emailInputNode.value).toMatch('');
    fireEvent.change(emailInputNode, { target: { value: 'perlimpinpin' } });
    expect(emailInputNode.value).toMatch('perlimpinpin');
  });
  test('password input should accept text ', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <InputGroup
        type="password"
        name="password"
        title="Password"
        value={handleChange}
      />
    );
    const pwdInputNode = getByLabelText('Password');
    expect(pwdInputNode.value).toMatch('');
    fireEvent.change(pwdInputNode, { target: { value: 'mdpdelamortquitu3' } });
    expect(pwdInputNode.value).toMatch('mdpdelamortquitu3');
  });
});

describe('Login form submission ', () => {
  test('If filled correctly, Login form Button on click sends form request to server ', () => {

  })

  test('If not filled correctly, Login form Button on click error messages display ', () => {
    
  })
};