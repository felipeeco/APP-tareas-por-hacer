import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoList } from './TodoList';

const mockTodos = [
  {
    id: 1,
    title: 'Comprar leche',
    completed: false,
  },
  {
    id: 2,
    title: 'Lavar platos',
    completed: true,
  },
];

describe('TodoList', () => {
  it('se renderiza correctamente el componente', () => {
    render(
      <TodoList
        todos={mockTodos}
        activeFilter='Todo'
        handleSetComplete={() => {}}
        handleDelete={() => {}}
        handleClearComplete={() => {}}
        showAllTodos={() => {}}
        showActiveTodos={() => {}}
        showCompletedTodos={() => {}}
      />
    );

    const todoBoxes = screen.getAllByTestId('todo-box');
    expect(todoBoxes).toHaveLength(mockTodos.length);

    mockTodos.forEach((todo) => {
      const todoBox = screen.getByText(todo.title);
      expect(todoBox).toBeInTheDocument();
    });
  });

  it('llama a handleSetComplete cuando se completa una tarea pendiente', () => {
    const mockHandleSetComplete = jest.fn();

    render(
      <TodoList
        todos={mockTodos}
        activeFilter='Todo'
        handleSetComplete={mockHandleSetComplete}
        handleDelete={() => {}}
        handleClearComplete={() => {}}
        showAllTodos={() => {}}
        showActiveTodos={() => {}}
        showCompletedTodos={() => {}}
      />
    );

    const completeTodoButton = screen.getByAltText('Check Icon');
    userEvent.click(completeTodoButton);

    expect(mockHandleSetComplete).toHaveBeenCalledTimes(1);
    expect(mockHandleSetComplete).toHaveBeenCalledWith(2);
  });

  it('llama a handleDelete cuando se elimina una tarea pendiente', () => {
    const mockHandleDelete = jest.fn();

    render(
      <TodoList
        todos={mockTodos}
        activeFilter='Todo'
        handleSetComplete={() => {}}
        handleDelete={mockHandleDelete}
        handleClearComplete={() => {}}
        showAllTodos={() => {}}
        showActiveTodos={() => {}}
        showCompletedTodos={() => {}}
      />
    );

    const deleteTodoButton = screen.getAllByAltText('Close Icon')[1];
    userEvent.click(deleteTodoButton);

    expect(mockHandleDelete).toHaveBeenCalledTimes(1);
    expect(mockHandleDelete).toHaveBeenCalledWith(2);
  });

  it('llama a handleClearComplete cuando se hace clic en el botón "Borrar completado"', () => {
    const mockHandleClearComplete = jest.fn();

    render(
      <TodoList
        todos={mockTodos}
        activeFilter='Todo'
        handleSetComplete={() => {}}
        handleDelete={() => {}}
        handleClearComplete={mockHandleClearComplete}
        showAllTodos={() => {}}
        showActiveTodos={() => {}}
        showCompletedTodos={() => {}}
      />
    );

    const clearCompletedButton = screen.getByText('Limpiar');
    userEvent.click(clearCompletedButton);

    expect(mockHandleClearComplete).toHaveBeenCalledTimes(1);
  });
});
