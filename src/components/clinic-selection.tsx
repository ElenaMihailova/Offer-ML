import React, { useState, useEffect } from 'react';
import { Stack, Button, Box, useTheme } from '@mui/material';
import { CSSTransition } from 'react-transition-group';
import { cities, moscowBranches, spbBranches } from '../data/constants';

interface ClinicSelectionProps {
  onSelectionComplete: () => void;
  onResetSelection: () => void;
}

export const ClinicSelection: React.FC<ClinicSelectionProps> = ({
  onSelectionComplete,
  onResetSelection,
}) => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);
  const theme = useTheme();
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    if (selectedCity) {
      const timer = setTimeout(() => setIsAnimationComplete(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [selectedCity]);

  useEffect(() => {
    if (selectedCity && selectedBranch) {
      onSelectionComplete();
    }
  }, [selectedCity, selectedBranch, onSelectionComplete]);

  const handleCityClick = (city: string) => {
    setSelectedCity(city);
    setIsAnimationComplete(false);
    setSelectedBranch(null);

    if (city !== 'Москва' && city !== 'Санкт-Петербург') {
      onSelectionComplete();
    }
  };

  const handleBranchClick = (branch: string) => {
    setSelectedBranch(branch);
  };

  const handleReset = () => {
    setSelectedCity(null);
    setSelectedBranch(null);
    setIsAnimationComplete(false);
    onResetSelection();
  };

  const renderCityButtons = () => (
    <Stack
      direction="row"
      sx={{ ...styles.buttonContainer, gap: '20px', justifyContent: 'center' }}
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
              ...styles.cityButton,
              ...(selectedCity === city && {
                opacity: 1,
                transform: 'translateY(0)',
              }),
            }}
          >
            {city}
          </Button>
        </CSSTransition>
      ))}
    </Stack>
  );

  const renderBranchButtons = (branches: string[]) => (
    <Stack direction="row" sx={styles.buttonContainer}>
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
            sx={{
              ...styles.branchButton,
              '&:active': {
                backgroundColor: 'rgba(20, 173, 169, 0.6)',
                color: theme.palette.common.white,
                boxShadow: `0 0 10px ${theme.palette.primary.main}`,
              },
              '&:disabled': {
                backgroundColor: 'rgba(20, 173, 169, 0.6)',
                cursor: 'not-allowed',
                color: theme.palette.common.white,
              },
            }}
          >
            {branch}
          </Button>
        </CSSTransition>
      ))}
    </Stack>
  );

  const renderSelectedBranchButton = () => (
    <Box mt={2} textAlign="center">
      <Button
        variant="contained"
        color="success"
        disabled
        sx={{
          '&:disabled': {
            width: '300px',
            backgroundColor: 'rgba(20, 173, 169, 0.6)',
            cursor: 'not-allowed',
            color: theme.palette.common.white,
          },
        }}
      >
        {selectedBranch}
      </Button>
    </Box>
  );

  const styles = {
    buttonContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
    cityButton: {
      transition: 'opacity 1s ease',
      opacity: selectedCity === null ? 1 : 0,
      width: '300px',
      height: '50px',
      transform: 'translateY(0)',
      '&:active': {
        backgroundColor: 'rgba(20, 173, 169, 0.6)',
        color: theme.palette.common.white,
        boxShadow: `0 0 10px ${theme.palette.primary.main}`,
      },
      '&:disabled': {
        backgroundColor: 'rgba(20, 173, 169, 0.6)',
        cursor: 'not-allowed',
        color: theme.palette.common.white,
      },
    },
    branchButton: {
      width: '300px',
      height: '50px',
      transform: 'translateY(0)',
      transition: 'transform 0.5s ease',
    },
    resetButtonContainer: {
      height: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
    },
    resetButton: {
      fontWeight: 400,
      fontSize: '14px',
      textTransform: 'none',
      color: theme.palette.text.primary,
      fontStyle: 'italic',
      textDecoration: 'underline',
      visibility: selectedCity ? 'visible' : 'hidden',
      opacity: selectedCity ? 1 : 0,
      transition: 'visibility 0.5s, opacity 0.5s ease',
      '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.1)',
      },
    },
  };

  return (
    <Box>
      {selectedCity && (
        <Box sx={styles.resetButtonContainer}>
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
