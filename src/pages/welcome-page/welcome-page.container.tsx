import WelcomePageView from './welcome-page.view';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { transliterate } from '../../utils/transliterate';

const WelcomePage = () => {
  const [isSelectionComplete, setIsSelectionComplete] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isAgreementConfirmed, setIsAgreementConfirmed] = useState(false);
  const [isClientInfoFormVisible, setIsClientInfoFormVisible] = useState(false);

  const [cookies, setCookie] = useCookies(['city', 'filial']);

  const [selectedCity, setSelectedCity] = useState(cookies.city || 'Moscow');
  const [selectedfilial, setSelectedfilial] = useState(
    cookies.filial || ' ',
  );

  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);


  const citiesWithoutfilial = ['Казань', 'Уфа', 'Тверь'];

  const offerUrl = citiesWithoutfilial.includes(selectedCity)
    ? `/offer/${transliterate(selectedCity)}`
    : `/offer/${transliterate(selectedCity)}/${transliterate(selectedfilial)}`;

  const handleSelectionComplete = (city: string, filial?: string) => {
    setIsSelectionComplete(true);
    setSelectedCity(city);
    if (filial) {
      setSelectedfilial(filial);
    }

    setCookie('city', city, { path: '/' });
    if (filial) {
      setCookie('filial', filial, { path: '/' });
    }
  };

  const handleResetSelection = () => {
    setIsSelectionComplete(false);
    setIsFormSubmitted(false);
    setIsAgreementConfirmed(false);
    setIsChecked(false);
    setIsSubmitted(false);

    setSelectedCity('Moscow');
    setSelectedfilial(' ');
    setCookie('city', 'Moscow', { path: '/' });
    setCookie('filial', ' ', { path: '/' });
  };

  const handleFormSubmit = () => {
    setIsFormSubmitted(true);
  };

  const handleAgreementConfirm = (isChecked: boolean) => {
    if (isChecked) {
      setIsAgreementConfirmed(true);
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleConfirmClick = () => {
    if (isChecked) {
      handleAgreementConfirm(isChecked);
      setIsSubmitted(true);
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

  //modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleModalClose = () => setIsModalOpen(false);
  useEffect(() => {
    if (isAgreementConfirmed) {
      setIsModalOpen(true);
      const timer = setTimeout(() => {
        setIsModalOpen(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isAgreementConfirmed]);




  return (
    <WelcomePageView
      onSelectionComplete={handleSelectionComplete}
      onResetSelection={handleResetSelection}
      isFormSubmitted={isFormSubmitted}
      onSubmit={handleFormSubmit}
      onConfirm={handleAgreementConfirm}
      isAgreementConfirmed={isAgreementConfirmed}
      isClientInfoFormVisible={isClientInfoFormVisible}
      offerUrl={offerUrl}
      isChecked={isChecked}
      isSubmitted={isSubmitted}
      onCheckboxChange={handleCheckboxChange}
      onConfirmClick={handleConfirmClick}
      isOpenModal={isModalOpen}
      handleCloseModal={handleModalClose}
      selectedCity={selectedCity}
      selectedfilial={selectedfilial}
    />
  );
};

export default WelcomePage;
