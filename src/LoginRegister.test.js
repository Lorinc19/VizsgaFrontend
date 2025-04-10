import { render, screen, fireEvent } from '@testing-library/react';
import LoginRegister from './LoginRegister';

describe('Login komponens', () => {
  test('megjelennek az Felhasználó és jelszó mezők', () => {
    render(<LoginRegister onLogin={jest.fn()} />);

    expect(screen.getByPlaceholderText(/Felhasználó/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Jelszó/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Bejelentkezés/i })).toBeInTheDocument();
  });

  test('be lehet írni adatokat a mezőkbe', () => {
    render(<LoginRegister onLogin={jest.fn()} />);

    const nameInput = screen.getByPlaceholderText(/Felhasználó/i);
    const passwordInput = screen.getByPlaceholderText(/Jelszó/i);

    fireEvent.change(nameInput, { target: { value: 'teszt' } });
    fireEvent.change(passwordInput, { target: { value: 'titok123' } });

    expect(nameInput.value).toBe('teszt');
    expect(passwordInput.value).toBe('titok123');
  });
});