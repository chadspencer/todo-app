import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

import { useTodoContext } from '../context/TodoContext';

const AddTodo: React.FC = () => {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState<string>('');
  const { addTodo } = useTodoContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text, dueDate ? new Date(dueDate) : null);
      setText('');
      setDueDate('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField fullWidth value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a new todo" sx={{ mb: 1 }} size="small" />
      <Box sx={{ display: 'flex', mb: 1 }}>
        <TextField type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} size="small" />
        <Button type="submit" sx={{ml: 1}} variant="contained">Add</Button>
      </Box>
    </Box>
  );
};

export default AddTodo;