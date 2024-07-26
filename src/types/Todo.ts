import { Dayjs } from 'dayjs';

export type FilterType = 'all' | 'completed' | 'active';

export type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  dueDate: Dayjs | null;
}

export interface TodoContextType {
  todos: Todo[];
  filter: FilterType;
  addTodo: (text: string, dueDate: Dayjs | null) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  setFilter: (filter: FilterType) => void;
}

export interface TodoItemProps {
  todo: Todo;
}