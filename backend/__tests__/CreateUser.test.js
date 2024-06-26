import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreateUser from '../../frontend/pages/createUser'; // Adjust the import based on your actual file structure

describe('CreateUser Component', () => {
  test('renders Create User form', () => {
    render(<CreateUser />);
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const createButton = screen.getByText('Create');

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(createButton).toBeInTheDocument();
  });

  test('allows user to type and submit form', () => {
    render(<CreateUser />);
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const createButton = screen.getByText('Create');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(createButton);

    // Add any additional assertions for form submission here
  });
});
