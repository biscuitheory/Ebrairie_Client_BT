import React from 'react';
import { expect } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider, createStore, combineReducers } from 'react-redux';

import Login from '../login';
import { validatePwdInput } from '../login';
import InputGroup from '../../components/inputgroup';

function createTestStore() {
  const store = createStore(
    combineReducers({
      user: userReducer,
      config: configReducer,
    })
  );
  return store;
}

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

let store;
describe('Login form submission ', () => {
  beforeEach(() => {
    store = createTestStore();
  });

  test.todo(
    'If filled correctly, Login form Button on click sends form request to server '
  );
  // test('If filled correctly, Login form Button on click sends form request to server ', () => {
  //   const handleSubmit = jest.fn();
  //   const { getByRole } = render(
  //     <Provider store={store}>
  //       <Login onSubmit={handleSubmit} />
  //     </Provider>
  //   );
  //   const buttonNode = getByRole('button');
  //   fireEvent.submit(buttonNode);
  //   expect(handleSubmit).toHaveBeenCalledTimes(1);
  // });

  test.todo(
    'If not filled correctly, Login form Button on click error messages display '
  );
});
