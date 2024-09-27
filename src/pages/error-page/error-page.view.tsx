import { PageWrapper } from '../../components/page-wrapper';
import { Typography, Container, useTheme, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ErrorPageView = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };
  return (
    <PageWrapper>
      <Container
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: {
            xs: theme.spacing(2),
          },
          paddingX: '0',
          paddingY: theme.spacing(2),
          maxWidth: theme.breakpoints.values.md,
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontSize: {
              xs: '16px',
              md: '20px',
            },
            fontFamily: "'Exo 2', sans-serif",
            fontWeight: '400',
            color: 'text.primary',
            wordWrap: 'break-word',
            textAlign: 'center',
            margin: '0px',
            maxWidth: theme.breakpoints.values.md,
          }}
        >
          404 - Страница не найдена
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            fontSize: {
              xs: '16px',
              md: '20px',
            },
            fontFamily: "'Exo 2', sans-serif",
            fontWeight: '400',
            color: 'text.primary',
            wordWrap: 'break-word',
            textAlign: 'center',
            margin: '0px',
            marginBottom: '4px',
            maxWidth: theme.breakpoints.values.md,
          }}
        >
          К сожалению, страница, которую вы ищете, не существует.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleGoHome}>
          Вернуться на главную
        </Button>
      </Container>
    </PageWrapper>
  );
};
