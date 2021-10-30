import { render, screen, fireEvent } from '@testing-library/react';
import { EventCreator } from '../';

test('initial form conditions', () => {
  render(<EventCreator />);

  const datePickInput = screen.getByLabelText('Choose date');
  const month = new Date().getMonth() + 1;
  const newDate =
    new Date().getDate() + '/' + month + '/' + new Date().getFullYear();
  expect(datePickInput.value).toBe(newDate);

  const submitButton = screen.getByRole('button', { name: 'Create' });
  expect(submitButton).toBeDisabled();
});

test('enable create buttons inputs values', () => {
  render(<EventCreator />);

  const firstNameInput = screen.getByPlaceholderText('first name');
  fireEvent.change(firstNameInput, {target: {value: 'John'}})

  const lastNameInput = screen.getByPlaceholderText('last name');
  fireEvent.change(lastNameInput, {target: {value: 'Snow'}})

  const mailInput = screen.getByPlaceholderText('mail');
  fireEvent.change(mailInput, {target: {value: 'John@Snow.com'}})
  
  const datePickInput = screen.getByLabelText('Choose date');
  fireEvent.change(datePickInput, {target: {value: '29/09/2021'}})

  const submitButton = screen.getByRole('button', { name: 'Create' });
  expect(submitButton).not.toBeDisabled();
});
