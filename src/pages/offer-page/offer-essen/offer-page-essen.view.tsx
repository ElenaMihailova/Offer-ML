import { PageWrapper } from '../../../components/page-wrapper';
import { Container, useTheme } from '@mui/material';
import { OfferTextEssen } from '../../../components/offer-text/offer-text-essen';

export const OfferPageViewEssen = () => {
  const theme = useTheme();
  return (
    <PageWrapper>
      <Container
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: theme.spacing(2),
          paddingX: 0,
          paddingY: theme.spacing(2),
          maxWidth: theme.breakpoints.values.md,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <OfferTextEssen />
      </Container>
    </PageWrapper>
  );
};
