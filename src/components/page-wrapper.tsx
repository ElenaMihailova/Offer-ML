import { Container, Box, useTheme } from '@mui/material';
import { Logo } from './logo';

interface PageWrapperProps {
  children: React.ReactNode;
  backgroundImage?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: {
            xs: 'center',
            md: 'flex-start',
          },
          width: '100%',
          padding: {
            xs: theme.spacing(2.5, 0),
            md: theme.spacing(5, 5),
          },
        }}
      >
        <Logo />
      </Box>
      <Container
        sx={{
          borderRadius: theme.shape.borderRadius,
          color: theme.palette.common.white,
        }}
      >
        {children}
      </Container>
    </Box>
  );
};
