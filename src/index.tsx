import { createRoot } from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { theme } from './theme/Theme';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ThemeProvider>,
);
