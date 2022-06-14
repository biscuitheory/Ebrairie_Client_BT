import React from 'react';
import { rest } from 'msw';
//import { setupServer } from 'msw/node';

import { fireEvent, getByLabelText, render } from '../../utils/test-utils';
import Login from '../login';

export const handlers = [
  rest.get('/admin/authenticate', (req, res, ctx) => {
    return res(ctx.json('Wesh'), ctx.delay(150));
  }),
];

describe('Login form submission ', () => {
  test('If filled correctly, Login form Button on click sends form request to server ', () => {
    const handleSubmit = jest.fn();
    const { getByRole } = render(<Login onSubmit={handleSubmit} />);
    const buttonNode = getByRole('button');
    expect(buttonNode.getByText('Login')).toBeTruthy()
    // expect(buttonNode.getAttribute('name')).toBe('Login');
    fireEvent.submit(buttonNode);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
