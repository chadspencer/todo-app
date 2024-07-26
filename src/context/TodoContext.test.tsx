import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { TodoProvider, useTodoContext } from './TodoContext';

const TestComponent: React.FC = () => {
  const { todos, addTodo } = useTodoContext();

  return (
    <div>
      <button onClick={() => addTodo('Test Todo', null)}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {}}
            />
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

describe('TodoContext with localStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('loads todos from localStorage on initial render', () => {
    const initialTodos = [{ id: 1, text: 'Test Todo', completed: false }];
    localStorage.setItem('todos', JSON.stringify(initialTodos));

    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>
    );

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  it('saves todos to localStorage when updated', () => {
    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>
    );

    fireEvent.click(screen.getByText('Add Todo'));
    
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    expect(savedTodos).toHaveLength(1);
    expect(savedTodos[0].text).toBe('Test Todo');
  });
});