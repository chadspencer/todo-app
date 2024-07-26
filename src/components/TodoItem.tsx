import React from 'react';
import { ListItem, Checkbox, IconButton, Typography, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { useTodoContext } from '../context/TodoContext';
import { TodoItemProps } from '../types/Todo';

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodoContext();
  const isOverdue = todo.dueDate && new Date() > todo.dueDate;
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} edge="start" />
      {todo.dueDate && (
        <Chip label={formatDate(todo.dueDate)} variant="outlined" color={isOverdue ? 'error' : 'primary'} sx={{mr: 1}} />
      )}
      <Typography
        sx={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
        {todo.text}
      </Typography>
    </ListItem>
  );
};

export default TodoItem;