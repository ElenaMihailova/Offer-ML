import { useForm, Controller } from 'react-hook-form';
import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { submitUserData } from '../api/api-request';

interface ClientInfoFormProps {
  onSubmit: () => void;
}

interface FormData {
  name: string;
  phone: string;
}

export const ClientInfoForm: React.FC<ClientInfoFormProps> = ({ onSubmit }) => {
  const { handleSubmit, control, setValue } = useForm<FormData>();

  const [phoneValue, setPhoneValue] = useState<string>('');

  const onSubmitForm = async (data: FormData) => {
    console.log(data);
    await submitUserData(data.name, data.phone);
    onSubmit();
  };

  const handlePhoneFocus = () => {
    if (!phoneValue) {
      setPhoneValue('+7');
      setValue('phone', '+7');
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const numbersOnly = inputValue.replace(/\D/g, '');

    if (numbersOnly.startsWith('7') && numbersOnly.length <= 11) {
      setPhoneValue(`+${numbersOnly}`);
      setValue('phone', `+${numbersOnly}`);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmitForm)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '100%',
        maxWidth: '400px',
      }}
    >
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{ required: 'Введите имя' }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Введите ваше имя"
            variant="outlined"
            error={!!fieldState.error}
            helperText={fieldState.error ? fieldState.error.message : ''}
            fullWidth
          />
        )}
      />

      <Controller
        name="phone"
        control={control}
        defaultValue=""
        rules={{
          required: 'Введите номер телефона',
          validate: (value) =>
            value.length === 12 ||
            'Введите корректный номер телефона +71234567890',
        }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Введите номер телефона"
            variant="outlined"
            value={phoneValue}
            onFocus={handlePhoneFocus}
            onChange={handlePhoneChange}
            error={!!fieldState.error}
            helperText={fieldState.error ? fieldState.error.message : ''}
            fullWidth
          />
        )}
      />

      <Button variant="contained" color="primary" type="submit">
        Подтвердить
      </Button>
    </Box>
  );
};
