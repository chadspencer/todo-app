export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type FilterType = 'all' | 'completed' | 'active';

export type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  dueDate: Date | null;
}

export interface TodoContextType {
  todos: Todo[];
  filter: FilterType;
  addTodo: (text: string, dueDate: Date | null) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  setFilter: (filter: FilterType) => void;
}

export interface TodoItemProps {
  todo: Todo;
}