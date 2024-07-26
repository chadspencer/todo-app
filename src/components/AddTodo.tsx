import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

import { useTodoContext } from '../context/TodoContext';

const AddTodo: React.FC = () => {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState<Dayjs | null>(null);
  const { addTodo } = useTodoContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text, dueDate);
      setText('');
      setDueDate(null);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField fullWidth value={text} onChange={(e) => setText(e.target.value)} label="Task Description" sx={{ mb: 1 }} />
        <DatePicker sx={{ mb: 1, width: '100%'}} label="Due Date" value={dueDate} onChange={(newValue) => setDueDate(newValue)} slotProps={{
            field: { clearable: true, onClear: () => setDueDate(null) },
          }} />
        <Button size="large" type="submit" variant="contained">Add</Button>
      </Box>
    </LocalizationProvider>
  );
};

export default AddTodo;