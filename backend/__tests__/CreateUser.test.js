// backend/__tests__/CreateUser.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreateUser from '../../frontend/pages/createUser';

test('renders Create User form and submits correctly', () => {
  render(<CreateUser />);
  
  // Check if the form elements are rendered
  const usernameInput = screen.getByPlaceholderText('Username');
  const passwordInput = screen.getByPlaceholderText('Password');
  const createButton = screen.getByText('Create');
  
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(createButton).toBeInTheDocument();
  
  // Simulate form submission
  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });
  fireEvent.click(createButton);
  
  // Add any additional assertions for form submission
});
