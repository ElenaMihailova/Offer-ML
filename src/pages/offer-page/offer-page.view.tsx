import { PageWrapper } from '../../components/page-wrapper';
import { Container } from '@mui/material';
import { OfferText } from '../../components/offer-text';

export const OfferPageView = () => {
  return (
    <PageWrapper>
      <Container
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: {
            xs: '20px',
          },
          paddingX: '0',
          paddingY: '20px',
          maxWidth: '880px',
        }}
      >
        <OfferText />
      </Container>
    </PageWrapper>
  );
};
