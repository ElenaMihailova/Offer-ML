import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';

interface ClientInfoFormProps {
  onSubmit: () => void;
}

export const ClientInfoForm: React.FC<ClientInfoFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    // логика отправки данных
    console.log('Имя:', name, 'Телефон:', phone);
    onSubmit();
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
      <TextField
        label="Введите ваше имя"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Введите номер телефона"
        variant="outlined"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Подтвердить
      </Button>
    </Box>
  );
};
