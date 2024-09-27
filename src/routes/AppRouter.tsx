import { Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/welcome-page/welcome-page.container';
import { OfferPageEssen } from '../pages/offer-page/offer-essen/offer-page-essen.container';
import { OfferPage } from '../pages/offer-page/offer-new/offer-page.container';
import { ErrorPage } from '../pages/error-page/error-page.container';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/offer/Moskva/Petrovka" element={<OfferPageEssen />} />
      <Route path="/offer/Ufa" element={<OfferPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
