import { render, screen } from '@testing-library/react';
import { Tareas } from './Tareas';

describe('Tareas', () => {
  test('el componente tareas se renderiza', () => {
    render(<Tareas />);
    const tareasElement = screen.getByTestId('tareas');
    expect(tareasElement).toBeInTheDocument();
  });
});
