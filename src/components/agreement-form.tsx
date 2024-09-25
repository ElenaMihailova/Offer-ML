import React, { useState } from 'react';
import {
  Box,
  Link,
  Checkbox,
  FormControlLabel,
  Button,
  useTheme,
} from '@mui/material';

interface AgreementFormProps {
  onConfirm: (isChecked: boolean) => void;
}

export const AgreementForm: React.FC<AgreementFormProps> = ({ onConfirm }) => {
  const theme = useTheme();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleConfirmClick = () => {
    onConfirm(isChecked);
  };

  return (
    <Box mt={2} display="flex" flexDirection="column" alignItems="center">
      <Link
        href="#"
        target="_blank"
        rel="noopener"
        sx={{ textDecoration: 'underline', color: 'primary.main', mb: 2 }}
      >
        Договор-оферта на оказание услуг по бронированию даты и времени услуги
      </Link>
      <FormControlLabel
        control={
          <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        }
        label="Я ознакомлен с договором"
        sx={{
          color: theme.palette.text.primary,
        }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleConfirmClick}
        disabled={!isChecked}
      >
        Отправить
      </Button>
    </Box>
  );
};
