import { render, screen } from '@testing-library/react';
import { Todo } from './Todo';

test('se renderiza correctamente el componente', () => {
  const todo = { id: 1, title: 'Comprar leche', completed: true };
  const handleSetComplete = jest.fn();
  const handleDelete = jest.fn();
  render(<Todo todo={todo} handleSetComplete={handleSetComplete} handleDelete={handleDelete} />);
  const todoTitle = screen.getByText('Comprar leche');
  expect(todoTitle).toHaveClass('line-through');
});
