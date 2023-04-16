import { render, screen } from '@testing-library/react';
import { Title } from './Title';

describe('Title', () => {
  test('verificar que el titulo cargue correctamente', () => {
    render(<Title />);
    const titleElement = screen.getByText('Lista de tareas');
    expect(titleElement).toBeInTheDocument();
  });

  test('verificar los css del titulo', () => {
    render(<Title />);
    const titleElement = screen.getByText('Lista de tareas');
    expect(titleElement).toHaveClass('text-5xl');
    expect(titleElement).toHaveClass('font-anton');
    expect(titleElement).toHaveClass('font-bold');
    expect(titleElement).toHaveClass('tracking-widest');
  });
});
