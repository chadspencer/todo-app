import { ThemeProvider } from './context/ThemeContext';
import { TodoProvider } from './context/TodoContext';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import FilterTodos from './components/FilterTodos';
import ThemeToggle from './components/ThemeToggle';
import './styles/app.scss'

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <main>
          <h1>Todo App</h1>
          <article>
            <header>
              <AddTodo />
              <FilterTodos />
            </header>
            <TodoList />
          </article>
        </main>
        <ThemeToggle />
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;