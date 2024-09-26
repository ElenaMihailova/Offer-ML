import { PageWrapper } from '../../components/page-wrapper';
import { Typography, Container } from '@mui/material';
import { ClinicSelection } from '../../components/clinic-selection';

import { ClientInfoForm } from '../../components/client-info-form';
import { AgreementForm } from '../../components/agreement-form';
import { ThankYouMessage } from '../../components/thank-you-message';

interface WelcomePageViewProps {
  onSelectionComplete: () => void;
  onResetSelection: () => void;
  isFormSubmitted: boolean;
  onSubmit: () => void;
  onConfirm: (isChecked: boolean) => void;
  isAgreementConfirmed: boolean;
  isClientInfoFormVisible: boolean;
}

const WelcomePageView: React.FC<WelcomePageViewProps> = ({
  onSelectionComplete,
  onResetSelection,
  isFormSubmitted,
  onSubmit,
  onConfirm,
  isAgreementConfirmed,
  isClientInfoFormVisible,
}) => {
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
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontSize: {
              xs: '19px',
              md: '21px',
            },
            fontFamily: "'Exo 2', sans-serif",
            fontWeight: '400',
            color: 'text.primary',
            wordWrap: 'break-word',
            textAlign: 'center',
            margin: '0px',
            maxWidth: '700px',
          }}
        >
          Для завершения бронирования даты и времени услуги, пожалуйста, укажите
          необходимую информацию и ознакомьтесь с договором-офертой на оказание
          услуг.
        </Typography>
        <ClinicSelection
          onSelectionComplete={onSelectionComplete}
          onResetSelection={onResetSelection}
        />

        {isClientInfoFormVisible && !isFormSubmitted && (
          <ClientInfoForm onSubmit={onSubmit} />
        )}

        {isFormSubmitted && <AgreementForm onConfirm={onConfirm} />}

        {isAgreementConfirmed && <ThankYouMessage />}
      </Container>
    </PageWrapper>
  );
};

export default WelcomePageView;
