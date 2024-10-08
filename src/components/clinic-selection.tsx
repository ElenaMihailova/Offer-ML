import React, { useState, useEffect } from 'react';
import { Stack, Button, Box, useTheme } from '@mui/material';
import { CSSTransition } from 'react-transition-group';
import { cities, moscowfiliales, spbfiliales } from '../data/constants';
import { buttonStyles } from './button-styles';
import { useCookies } from 'react-cookie';

interface ClinicSelectionProps {
  onSelectionComplete: (city: string, filial?: string) => void;
  onResetSelection: () => void;
}

export const ClinicSelection: React.FC<ClinicSelectionProps> = ({
  onSelectionComplete,
  onResetSelection,
}) => {
  const [cookies, setCookie] = useCookies(['city', 'filial']);

  const [selectedCity, setSelectedCity] = useState<string | null>(
    cookies.city || null,
  );
  const [selectedfilial, setSelectedfilial] = useState<string | null>(
    cookies.filial || null,
  );
  const theme = useTheme();
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const styles = buttonStyles(theme);

  const citiesWithoutfilial = ['Казань', 'Уфа', 'Тверь'];

  useEffect(() => {
    if (selectedCity) {
      const timer = setTimeout(() => setIsAnimationComplete(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [selectedCity]);

  useEffect(() => {
    if (selectedCity && citiesWithoutfilial.includes(selectedCity)) {
      setCookie('city', selectedCity, { path: '/' });
      setSelectedfilial(null);
      setCookie('filial', '', { path: '/' });
      onSelectionComplete(selectedCity);
    } else if (selectedCity && selectedfilial) {
      setCookie('city', selectedCity, { path: '/' });
      setCookie('filial', selectedfilial, { path: '/' });
      onSelectionComplete(selectedCity, selectedfilial);
    }
  }, [selectedCity, selectedfilial, onSelectionComplete, setCookie]);

  const handleCityClick = (city: string) => {
    setSelectedCity(city);
    setIsAnimationComplete(false);
    setSelectedfilial(null);

    if (citiesWithoutfilial.includes(city)) {
      onSelectionComplete(city);
      setCookie('filial', '', { path: '/' });
    }
  };

  const handlefilialClick = (filial: string) => {
    setSelectedfilial(filial);
  };

  const handleReset = () => {
    setSelectedCity(null);
    setSelectedfilial(null);
    setIsAnimationComplete(false);
    setCookie('city', '', { path: '/' });
    setCookie('filial', '', { path: '/' });
    onResetSelection();
  };

  const renderCityButtons = () => (
    <Stack
      direction="column"
      sx={{
        gap: theme.spacing(2),
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {cities.map((city) => (
        <CSSTransition
          key={city}
          in={!selectedCity || selectedCity === city}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <Button
            variant="contained"
            color="primary"
            disabled={!!selectedCity}
            onClick={() => handleCityClick(city)}
            sx={{
              ...styles.common,
              ...(selectedCity === city && styles.selectedCityButton),
            }}
          >
            {city}
          </Button>
        </CSSTransition>
      ))}
    </Stack>
  );

  const renderfilialButtons = (filiales: string[]) => (
    <Stack direction="column" sx={{ gap: theme.spacing(2) }}>
      {filiales.map((filial) => (
        <CSSTransition
          key={filial}
          in={!selectedfilial || selectedfilial === filial}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <Button
            variant="contained"
            disabled={selectedfilial === filial}
            color={selectedfilial === filial ? 'success' : 'primary'}
            onClick={() => handlefilialClick(filial)}
            sx={{ ...styles.common, ...styles.filialButton }}
          >
            {filial}
          </Button>
        </CSSTransition>
      ))}
    </Stack>
  );

  const renderSelectedfilialButton = () => (
    <Box mt={2} textAlign="center">
      <Button variant="contained" color="success" disabled sx={styles.common}>
        {selectedfilial}
      </Button>
    </Box>
  );

  return (
    <Box>
      {selectedCity && (
        <Box sx={{ marginBottom: theme.spacing(2), textAlign: 'center' }}>
          <Button
            variant="text"
            color="success"
            sx={styles.resetButton}
            onClick={handleReset}
          >
            Сделать новый выбор
          </Button>
        </Box>
      )}

      {renderCityButtons()}

      {selectedCity === 'Москва' && isAnimationComplete && !selectedfilial && (
        <Box mt={2} textAlign="center">
          <Box
            mb={2}
            sx={{ color: theme.palette.text.primary, fontWeight: 400 }}
          >
            Выберите, пожалуйста, филиал:
          </Box>
          {renderfilialButtons(moscowfiliales)}
        </Box>
      )}

      {selectedCity === 'Санкт-Петербург' &&
        isAnimationComplete &&
        !selectedfilial && (
          <Box mt={2} textAlign="center">
            <Box
              mb={2}
              sx={{ color: theme.palette.text.primary, fontWeight: 400 }}
            >
              Выберите, пожалуйста, филиал:
            </Box>
            {renderfilialButtons(spbfiliales)}
          </Box>
        )}

      {selectedfilial && renderSelectedfilialButton()}

      <style>
        {`
          .fade-enter {
            opacity: 0;
            transform: translateY(-20px);
          }
          .fade-enter-active {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 500ms ease, transform 500ms ease;
          }
          .fade-exit {
            opacity: 1;
            transform: translateY(0);
          }
          .fade-exit-active {
            opacity: 0;
            transform: translateY(-20px);
            transition: opacity 500ms ease, transform 500ms ease;
          }
        `}
      </style>
    </Box>
  );
};
