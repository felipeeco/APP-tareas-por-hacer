import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('App component', () => {
  it('revisar que el componente tareas sea renderizado y visible', async () => {
    render(<App />);
    await screen.findByTestId('tareas');
    expect(screen.getByTestId('tareas')).toBeInTheDocument();
  });
});
