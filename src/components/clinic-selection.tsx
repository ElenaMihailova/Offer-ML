import React, { useState, useEffect } from 'react';
import { Stack, Button, Box, useTheme } from '@mui/material';
import { CSSTransition } from 'react-transition-group';
import { cities, moscowBranches, spbBranches } from '../data/constants';
import { buttonStyles } from './button-styles';
import { useCookies } from 'react-cookie';

interface ClinicSelectionProps {
  onSelectionComplete: (city: string, branch?: string) => void;
  onResetSelection: () => void;
}

export const ClinicSelection: React.FC<ClinicSelectionProps> = ({
  onSelectionComplete,
  onResetSelection,
}) => {
  const [cookies, setCookie] = useCookies(['city', 'branch']);

  const [selectedCity, setSelectedCity] = useState<string | null>(
    cookies.city || null,
  );
  const [selectedBranch, setSelectedBranch] = useState<string | null>(
    cookies.branch || null,
  );
  const theme = useTheme();
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const styles = buttonStyles(theme);

  const citiesWithoutBranch = ['Казань', 'Уфа', 'Тверь'];

  useEffect(() => {
    if (selectedCity) {
      const timer = setTimeout(() => setIsAnimationComplete(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [selectedCity]);

  useEffect(() => {
    if (selectedCity && citiesWithoutBranch.includes(selectedCity)) {
      setCookie('city', selectedCity, { path: '/' });
      onSelectionComplete(selectedCity);
    }

    if (selectedCity && selectedBranch) {
      setCookie('city', selectedCity, { path: '/' });
      setCookie('branch', selectedBranch, { path: '/' });
      onSelectionComplete(selectedCity, selectedBranch);
    }
  }, [selectedCity, selectedBranch, onSelectionComplete, setCookie]);

  const handleCityClick = (city: string) => {
    setSelectedCity(city);
    setIsAnimationComplete(false);
    setSelectedBranch(null);

    if (citiesWithoutBranch.includes(city)) {
      onSelectionComplete(city);
    }
  };

  const handleBranchClick = (branch: string) => {
    setSelectedBranch(branch);
  };

  const handleReset = () => {
    setSelectedCity(null);
    setSelectedBranch(null);
    setIsAnimationComplete(false);
    setCookie('city', '', { path: '/' });
    setCookie('branch', '', { path: '/' });
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

  const renderBranchButtons = (branches: string[]) => (
    <Stack direction="column" sx={{ gap: theme.spacing(2) }}>
      {branches.map((branch) => (
        <CSSTransition
          key={branch}
          in={!selectedBranch || selectedBranch === branch}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <Button
            variant="contained"
            disabled={selectedBranch === branch}
            color={selectedBranch === branch ? 'success' : 'primary'}
            onClick={() => handleBranchClick(branch)}
            sx={{ ...styles.common, ...styles.branchButton }}
          >
            {branch}
          </Button>
        </CSSTransition>
      ))}
    </Stack>
  );

  const renderSelectedBranchButton = () => (
    <Box mt={2} textAlign="center">
      <Button variant="contained" color="success" disabled sx={styles.common}>
        {selectedBranch}
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

      {selectedCity === 'Москва' && isAnimationComplete && !selectedBranch && (
        <Box mt={2} textAlign="center">
          <Box
            mb={2}
            sx={{ color: theme.palette.text.primary, fontWeight: 400 }}
          >
            Выберите, пожалуйста, филиал:
          </Box>
          {renderBranchButtons(moscowBranches)}
        </Box>
      )}

      {selectedCity === 'Санкт-Петербург' &&
        isAnimationComplete &&
        !selectedBranch && (
          <Box mt={2} textAlign="center">
            <Box
              mb={2}
              sx={{ color: theme.palette.text.primary, fontWeight: 400 }}
            >
              Выберите, пожалуйста, филиал:
            </Box>
            {renderBranchButtons(spbBranches)}
          </Box>
        )}

      {selectedBranch && renderSelectedBranchButton()}

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
