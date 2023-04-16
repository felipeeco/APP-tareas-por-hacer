import { render, screen, fireEvent } from "@testing-library/react";
import { TodoFilters } from "../TodoFilters";

describe("TodoFilters", () => {
  const total = 5;
  const activeFilter = "Todo";
  const showAllTodos = jest.fn();
  const showActiveTodos = jest.fn();
  const showCompletedTodos = jest.fn();
  const handleClearComplete = jest.fn();

  test("debe llamar a la función 'showAllTodos' al hacer clic en el botón de filtro 'Todo'", () => {
    render(
        <TodoFilters
          total={total}
          activeFilter={activeFilter}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          handleClearComplete={handleClearComplete}
        />
      );

    const filterButton = screen.getByText("Todo");
    fireEvent.click(filterButton);
    expect(showAllTodos).toHaveBeenCalled();
  });

  test("debe llamar a la función 'showActiveTodos' al hacer clic en el botón de filtro 'Activas'", () => {
    render(
        <TodoFilters
          total={total}
          activeFilter={activeFilter}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          handleClearComplete={handleClearComplete}
        />
      );

    const filterButton = screen.getByText("Activas");
    fireEvent.click(filterButton);
    expect(showActiveTodos).toHaveBeenCalled();
  });

  test("debe llamar a la función 'showCompletedTodos' al hacer clic en el botón de filtro 'Completadas'", () => {

    render(
        <TodoFilters
          total={total}
          activeFilter={activeFilter}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          handleClearComplete={handleClearComplete}
        />
      );

    const filterButton = screen.getByText("Completadas");
    fireEvent.click(filterButton);
    expect(showCompletedTodos).toHaveBeenCalled();
  });

  test("debe llamar a la función 'handleClearComplete' al hacer clic en el botón 'Borrar completado'", () => {

    render(
        <TodoFilters
          total={total}
          activeFilter={activeFilter}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          handleClearComplete={handleClearComplete}
        />
      );

    const clearButton = screen.getByText("Limpiar");
    fireEvent.click(clearButton);
    expect(handleClearComplete).toHaveBeenCalled();
  });
});
