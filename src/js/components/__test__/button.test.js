import React from 'react';
import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import Button from '../button';

test('', async () => {
  render(<Button name="Chimichuri" />);
  const buttonElement = screen.getByText(/chimichuri/i);
  expect(buttonElement).toBeInTheDocument();
});
