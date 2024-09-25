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
    <Stack direction="row" sx={{ ...styles.buttonContainer, gap: '20px' }}>
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
              ...styles.button,
              ...(selectedCity === city && {
                opacity: 1,
                width: '300px',
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
        sx={{ width: '300px', marginTop: theme.spacing(2) }}
      >
        {selectedBranch}
      </Button>
    </Box>
  );

  const styles = {
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: theme.spacing(2),
      marginTop: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    button: {
      transition: 'opacity 1s ease, transform 0.5s ease',
      opacity: selectedCity === null ? 1 : 0,
      width: '100%',
      maxWidth: '300px',
    },
    resetButton: {
      fontWeight: 400,
      fontSize: '12px',
      textTransform: 'none',
      color: theme.palette.text.secondary,
      '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.1)',
      },
    },
  };

  return (
    <Box>
      {renderCityButtons()}

      {selectedCity && isAnimationComplete && (
        <Box textAlign="center">
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
          }
          .fade-enter-active {
            opacity: 1;
            transition: opacity 500ms, transform 500ms;
          }
          .fade-exit {
            opacity: 1;
          }
          .fade-exit-active {
            opacity: 0;
            transition: opacity 500ms, transform 500ms;
          }
        `}
      </style>
    </Box>
  );
};
