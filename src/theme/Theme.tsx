import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: "'Exo', sans-serif",
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      },
    },
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    common: {
      white: '#fff',
      black: '#000',
    },
    primary: {
      main: '#14ada9',
      light: '#E0E0E0',
      dark: '#A9A9A9',
      contrastText: '#4B164C',
    },
    secondary: {
      main: '#4B164C',
    },
    error: {
      main: '#FA8383',
      dark: '#e27878',
      light: '#FF98A5',
    },
    warning: {
      main: '#FECA57',
    },
    background: {
      default: '#fff5f8',
      paper: '#F5F5F5',
    },
    text: {
      primary: '#14ada9',
      secondary: '#ff7ba3',
      disabled: '#B8B8B8',
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 20px',
          fontWeight: 'bold',
        },
        containedPrimary: {
          color: '#fff',
          '&:hover': {
            backgroundColor: '#0f8e7a',
          },
        },
      },
    },
  },
});

export type TTheme = typeof theme;
export type TColorType = keyof TTheme['palette'];
