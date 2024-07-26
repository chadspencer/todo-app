import React from 'react';
import { ListItem, Checkbox, IconButton, Typography, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from 'dayjs';

import { useTodoContext } from '../context/TodoContext';
import { TodoItemProps } from '../types/Todo';

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodoContext();
  const isOverdue = todo.dueDate && dayjs().isAfter(todo.dueDate, 'day');
  const dueDate = todo.dueDate ? (dayjs.isDayjs(todo.dueDate) ? todo.dueDate : dayjs(todo.dueDate)) : null;

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} edge="start" />
      {dueDate && (
        <Chip label={dueDate.format('MMM D, YYYY')} variant="outlined" color={isOverdue ? 'error' : 'primary'} sx={{mr: 1}} />
      )}
      <Typography
        sx={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
        {todo.text}
      </Typography>
    </ListItem>
  );
};

export default TodoItem;