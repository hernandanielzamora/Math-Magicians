import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';

describe('Testing the calculator and it´s functionality', () => {
  it('Rendering the calculator page', () => {
    const calculator = render(<Calculator />);
    expect(calculator).toMatchSnapshot();
  });

  it('Make sure that the calculator is rendered correctly', () => {
    render(<Calculator />);
    const calculator = screen.getByTestId('calculator');
    expect(calculator).toMatchSnapshot();
  });

  it('Make sure that, when you click a button, the result is shown in the calculator screen', () => {
    render(<Calculator />);
    const btn = screen.getByRole('button', { name: '7' });
    const outputScreen = screen.getByTestId('screen');

    fireEvent.click(btn);

    expect(outputScreen.innerHTML).toBe('7');
  });

  it('Make sure that, when you click buttons to enter an operation, the result is shown in the calculator screen', () => {
    render(<Calculator />);
    const btn8 = screen.getByRole('button', { name: '5' });
    const btnAdd = screen.getByRole('button', { name: '+' });
    const btn9 = screen.getByRole('button', { name: '9' });

    const outputScreen = screen.getByTestId('screen');

    fireEvent.click(btn8);
    fireEvent.click(btnAdd);
    fireEvent.click(btn9);
    expect(outputScreen.innerHTML).toBe('5+9');
  });

  it('Make sure that the operation is being made after you press the "=" button', () => {
    render(<Calculator />);
    const btn8 = screen.getByRole('button', { name: '8' });
    const btnAdd = screen.getByRole('button', { name: '+' });
    const btn9 = screen.getByRole('button', { name: '9' });
    const btnEquals = screen.getByRole('button', { name: '=' });

    const outputScreen = screen.getByTestId('screen');

    fireEvent.click(btn8);
    fireEvent.click(btnAdd);
    fireEvent.click(btn9);
    fireEvent.click(btnEquals);
    expect(outputScreen.innerHTML).toBe('17');
  });

  it('Make sure that the operation is being made after you press the "=" button', () => {
    render(<Calculator />);
    const btn5 = screen.getByRole('button', { name: '5' });
    const btnMultiply = screen.getByRole('button', { name: 'x' });
    const btn8 = screen.getByRole('button', { name: '8' });
    const btnEquals = screen.getByRole('button', { name: '=' });

    const outputScreen = screen.getByTestId('screen');

    fireEvent.click(btn5);
    fireEvent.click(btnMultiply);
    fireEvent.click(btn8);
    fireEvent.click(btnEquals);
    expect(outputScreen.innerHTML).toBe('40');
  });
});
