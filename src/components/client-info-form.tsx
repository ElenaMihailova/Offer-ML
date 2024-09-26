import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';

interface ClientInfoFormProps {
  onSubmit: () => void;
}

export const ClientInfoForm: React.FC<ClientInfoFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleSubmit = () => {
    setNameError('');
    setPhoneError('');

    let valid = true;

    const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;
    if (!nameRegex.test(name)) {
      setNameError('Имя должно содержать только буквы.');
      valid = false;
    }

    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError('Номер телефона должен содержать только цифры.');
      valid = false;
    }

    if (valid) {
      // логика отправки данных
      console.log('Имя:', name, 'Телефон:', phone);
      onSubmit();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '100%',
        maxWidth: '400px',
      }}
    >
      <Box sx={{ minHeight: '72px' }}>
        {' '}
        <TextField
          label="Введите ваше имя"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!!nameError}
          helperText={nameError}
          fullWidth
        />
      </Box>

      <Box sx={{ minHeight: '72px' }}>
        {' '}
        <TextField
          label="Введите номер телефона"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={!!phoneError}
          helperText={phoneError}
          fullWidth
          type="tel"
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={!name || !phone}
      >
        Подтвердить
      </Button>
    </Box>
  );
};
