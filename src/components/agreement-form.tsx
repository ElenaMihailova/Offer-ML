import {
  Box,
  Link,
  Checkbox,
  FormControlLabel,
  Button,
  useTheme,
} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';

interface AgreementFormProps {
  offerUrl: string;
  isChecked: boolean;
  isSubmitted: boolean;
  onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirmClick: () => void;
}

export const AgreementForm: React.FC<AgreementFormProps> = ({
  offerUrl,
  isChecked,
  isSubmitted,
  onCheckboxChange,
  onConfirmClick,
}) => {
  const theme = useTheme();

  return (
    <Box
      mt={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth="500px"
    >
      <Link
        href={offerUrl}
        target="_blank"
        rel="noopener"
        sx={{
          textDecoration: 'underline',
          color: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <DescriptionIcon sx={{ mr: 1 }} />
        Договор-оферта на оказание услуг по бронированию даты и времени услуги
      </Link>
      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked}
            onChange={onCheckboxChange}
            disabled={isSubmitted}
          />
        }
        label="Я ознакомлен(а) с договором"
        sx={{
          color: theme.palette.text.primary,
        }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={onConfirmClick}
        disabled={!isChecked || isSubmitted}
        sx={{
          mt: 2,
          '&:disabled': {
            backgroundColor: 'rgba(20, 173, 169, 0.6)',
            cursor: 'not-allowed',
            color: theme.palette.common.white,
          },
        }}
      >
        Отправить
      </Button>
    </Box>
  );
};
