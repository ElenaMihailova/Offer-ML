import { PageWrapper } from '../../components/page-wrapper';
import { Typography, Container, useTheme } from '@mui/material';
import { ClinicSelection } from '../../components/clinic-selection';

import { ClientInfoForm } from '../../components/client-info-form';
import { AgreementForm } from '../../components/agreement-form';
import { ThankYouMessage } from '../../components/thank-you-message';

interface WelcomePageViewProps {
  onSelectionComplete: (city: string, branch?: string) => void;
  onResetSelection: () => void;
  isFormSubmitted: boolean;
  onSubmit: () => void;
  onConfirm: (isChecked: boolean) => void;
  isAgreementConfirmed: boolean;
  isClientInfoFormVisible: boolean;
  offerUrl: string;
  isChecked: boolean;
  isSubmitted: boolean;
  onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirmClick: () => void;
}

const WelcomePageView: React.FC<WelcomePageViewProps> = ({
  onSelectionComplete,
  onResetSelection,
  isFormSubmitted,
  onSubmit,
  isAgreementConfirmed,
  isClientInfoFormVisible,
  offerUrl,
  isChecked,
  isSubmitted,
  onCheckboxChange,
  onConfirmClick,
}) => {
  const theme = useTheme();

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

        {isFormSubmitted && (
          <AgreementForm
            offerUrl={offerUrl}
            isChecked={isChecked}
            isSubmitted={isSubmitted}
            onCheckboxChange={onCheckboxChange}
            onConfirmClick={onConfirmClick}
          />
        )}

        {isAgreementConfirmed && <ThankYouMessage />}
      </Container>
    </PageWrapper>
  );
};

export default WelcomePageView;
