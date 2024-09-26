import WelcomePageView from './welcome-page.view';
import { useState, useEffect } from 'react';

const WelcomePage = () => {
  const [isSelectionComplete, setIsSelectionComplete] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isAgreementConfirmed, setIsAgreementConfirmed] = useState(false);
  const [isClientInfoFormVisible, setIsClientInfoFormVisible] = useState(false);

  const handleSelectionComplete = () => {
    setIsSelectionComplete(true);
  };

  const handleResetSelection = () => {
    setIsSelectionComplete(false);
    setIsFormSubmitted(false);
    setIsAgreementConfirmed(false);
  };

  const handleFormSubmit = () => {
    setIsFormSubmitted(true);
  };

  const handleAgreementConfirm = (isChecked: boolean) => {
    if (isChecked) {
      console.log('Ознакомлен с договором:', isChecked);
      setIsAgreementConfirmed(true);
    }
  };

  useEffect(() => {
    if (isSelectionComplete) {
      const timer = setTimeout(() => {
        setIsClientInfoFormVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsClientInfoFormVisible(false);
    }
  }, [isSelectionComplete]);

  return (
    <WelcomePageView
      onSelectionComplete={handleSelectionComplete}
      onResetSelection={handleResetSelection}
      isFormSubmitted={isFormSubmitted}
      onSubmit={handleFormSubmit}
      onConfirm={handleAgreementConfirm}
      isAgreementConfirmed={isAgreementConfirmed}
      isClientInfoFormVisible={isClientInfoFormVisible}
    />
  );
};

export default WelcomePage;
