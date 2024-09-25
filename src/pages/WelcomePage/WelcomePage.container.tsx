import WelcomePageView from './WelcomePage.view';
import { useState } from 'react';

const WelcomePage = () => {
  const [isSelectionComplete, setIsSelectionComplete] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isAgreementConfirmed, setIsAgreementConfirmed] = useState(false);

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

  return (
    <WelcomePageView
      onSelectionComplete={handleSelectionComplete}
      isSelectionComplete={isSelectionComplete}
      onResetSelection={handleResetSelection}
      isFormSubmitted={isFormSubmitted}
      onSubmit={handleFormSubmit}
      onConfirm={handleAgreementConfirm}
      isAgreementConfirmed={isAgreementConfirmed}
    />
  );
};

export default WelcomePage;
