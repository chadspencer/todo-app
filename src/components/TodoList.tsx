import React from 'react';
import { Box, List, Typography } from '@mui/material';

import { useTodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const { todos, filter } = useTodoContext();
  const filteredAndSortedTodos = todos
    .filter(todo => {
      if (filter === 'completed') return todo.completed;
      if (filter === 'active') return !todo.completed;
      return true;
    }).sort((a, b) => {
      if (a.dueDate && b.dueDate) {
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      } else if (a.dueDate) {
        return -1;
      } else if (b.dueDate) {
        return 1;
      }
      return 0;
    });
  const emptyText = (filter === 'active' ? "You've completed all of your todos!" : "You haven't completed any todos yet.");

  if (!todos.length) {
    return null;
  }

  if (!filteredAndSortedTodos.length) {
    return (
      <Box sx={{m: 4, textAlign: 'center'}}>
        <Typography component="p">{emptyText}</Typography>
      </Box>
    );
  }

  return (
    <List>
      {filteredAndSortedTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

export default TodoList;