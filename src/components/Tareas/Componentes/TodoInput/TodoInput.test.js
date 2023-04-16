import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { TodoInput } from './TodoInput';

describe('TodoInput component', () => {
  it('Componente TodoInput', () => {
    render(<TodoInput />);
    const inputElement = screen.getByPlaceholderText('Escribe aquí tu tarea');
    expect(inputElement).toBeInTheDocument();
  });

  it('debe llamar a addTodo al presionar la tecla enter', () => {
    const addTodoMock = jest.fn();
    render(<TodoInput addTodo={addTodoMock} />);
    const inputElement = screen.getByPlaceholderText('Escribe aquí tu tarea');
    fireEvent.change(inputElement, { target: { value: 'test todo' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', keyCode: 13 });
    expect(addTodoMock).toHaveBeenCalledTimes(1);
    expect(addTodoMock).toHaveBeenCalledWith('test todo');
  });

  it('no debe llamar a addTodo al presionar la tecla Intro si el valor de entrada está vacío', () => {
    const addTodoMock = jest.fn();
    render(<TodoInput addTodo={addTodoMock} />);
    const inputElement = screen.getByPlaceholderText('Escribe aquí tu tarea');
    fireEvent.keyDown(inputElement, { key: 'Enter', keyCode: 13 });
    expect(addTodoMock).not.toHaveBeenCalled();
  });
});
