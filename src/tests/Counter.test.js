// import necessary react testing library helpers here
// import the Counter component here
import {render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  //render(<Counter />);
  const messageElement = screen.getByText(/count/i);
  expect(messageElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  // render(<Counter />);
  const countElement = screen.getByTestId('count');
  expect(countElement.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
 // render(<Counter />);
  const incrementButton = screen.getByRole('button', { name: '+' });
  fireEvent.click(incrementButton);
  const countElement = screen.getByTestId('count');
  expect(countElement.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  //render(<Counter />);
  const decrementButton = screen.getByRole('button', { name: '-' });
  fireEvent.click(decrementButton);
  const countElement = screen.getByTestId('count');
  expect(countElement.textContent).toBe('-1');
});