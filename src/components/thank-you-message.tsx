import React from 'react';
import { Typography, Box } from '@mui/material';

export const ThankYouMessage: React.FC = () => (
  <Box textAlign="center" mt={4}>
    <Typography variant="h6" sx={{ fontWeight: 400, color: 'text.primary' }}>
      Спасибо за заявку!
    </Typography>
    <Typography sx={{ color: 'text.secondary' }}>
      В ближайшее время с Вами свяжется менеджер.
    </Typography>
  </Box>
);
