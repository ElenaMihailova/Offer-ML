import { Theme } from '@mui/material/styles';

export const buttonStyles = (theme: Theme) => ({
  common: {
    width: '300px',
    height: '50px',
    transform: 'translateY(0)',
    transition: 'transform 0.5s ease',
    '&:active': {
      backgroundColor: 'rgba(20, 173, 169, 0.6)',
      color: theme.palette.common.white,
      boxShadow: `0 0 10px ${theme.palette.primary.main}`,
    },
    '&:disabled': {
      backgroundColor: theme.palette.text.secondary,
      opacity: 0.4,
      cursor: 'not-allowed',
      color: theme.palette.common.white,
    },
  },
  cityButton: {
    transition: 'opacity 1s ease',
    opacity: 1,
  },
  selectedCityButton: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  filialButton: {
    backgroundColor: theme.palette.primary.main,
    '&:disabled': {
      backgroundColor: theme.palette.text.secondary,
      opacity: 0.4,
    },
  },
  resetButton: {
    fontWeight: 400,
    fontSize: '14px',
    textTransform: 'none',
    color: theme.palette.text.primary,
    fontStyle: 'italic',
    textDecoration: 'underline',
    visibility: 'visible',
    opacity: 1,
    transition: 'visibility 0.5s, opacity 0.5s ease',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.1)',
    },
  },
});
