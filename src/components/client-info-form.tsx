import { useForm, Controller } from 'react-hook-form';
import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { submitUserData } from '../api/api-request';

interface ClientInfoFormProps {
  onSubmit: () => void;
  city: string;
  filial: string;
}

interface FormData {
  name: string;
  phone: string;
  city: string;
  filial: string;
}

export const ClientInfoForm: React.FC<ClientInfoFormProps> = ({ onSubmit, city, filial }) => {
  const { handleSubmit, control, setValue } = useForm<FormData>();

  const [phoneValue, setPhoneValue] = useState<string>('');

  const onSubmitForm = async (data: FormData) => {
    await submitUserData(data.name, data.phone, city, filial);
    onSubmit();
  };


  const handlePhoneFocus = () => {
    if (!phoneValue) {
      setPhoneValue('+7');
      setValue('phone', '+7');
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value.replace(/\D/g, ''); 
  
    if (inputValue.length > 1) {
      inputValue = `+7 (${inputValue.slice(1, 4)}) ${inputValue.slice(4, 7)}-${inputValue.slice(7, 9)}-${inputValue.slice(9, 11)}`;
    }
  
    setPhoneValue(inputValue);
    setValue('phone', inputValue); // Устанавливаем значение в форме
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
            value.length === 18 ||
            'Введите корректный номер телефона телефона в формате +7 (999) 999-99-99',
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
