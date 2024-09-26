import { useForm, Controller } from 'react-hook-form';
import MaskedInput from 'react-text-mask';
import { Box, TextField, Button } from '@mui/material';

interface ClientInfoFormProps {
  onSubmit: () => void;
}

interface FormData {
  name: string;
  phone: string;
}

export const ClientInfoForm: React.FC<ClientInfoFormProps> = ({ onSubmit }) => {
  const { handleSubmit, control } = useForm<FormData>();

  const onSubmitForm = (data: FormData) => {
    console.log(data);
    onSubmit();
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
        rules={{ required: 'Введите номер телефона' }}
        render={({ field, fieldState }) => (
          <MaskedInput
            {...field}
            mask={[
              '+',
              '7',
              '(',
              /[1-9]/,
              /\d/,
              /\d/,
              ')',
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
            ]}
            render={(ref, props) => (
              <TextField
                {...props}
                inputRef={ref}
                label="Введите номер телефона"
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error ? fieldState.error.message : ''}
                fullWidth
              />
            )}
          />
        )}
      />

      <Button variant="contained" color="primary" type="submit">
        Подтвердить
      </Button>
    </Box>
  );
};
