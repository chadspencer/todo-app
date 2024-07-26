import React from 'react';
import { Tab, Tabs } from '@mui/material';

import { useTodoContext } from '../context/TodoContext';
import { FilterType } from '../types/Todo';

const FilterTodos: React.FC = () => {
  const { filter, setFilter } = useTodoContext();
  const { todos } = useTodoContext();

  if (!todos.length) {
    return null;
  }

  return (
    <Tabs value={filter} onChange={(_, newFilter) => newFilter && setFilter(newFilter)} aria-label="Todo Filter Tabs" variant="fullWidth" sx={{mt: 2}}>
      {(['all', 'active', 'completed'] as FilterType[]).map((filterType) => (
        <Tab key={filterType} label={filterType} value={filterType} role="tab" aria-selected={filter === filterType}/>
      ))}
    </Tabs>
  );
};

export default FilterTodos;