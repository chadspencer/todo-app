import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#4158D0',
    },
    mode: 'light',
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#FFCC70',
    },
    mode: 'dark',
  },
});