import { Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/welcome-page/welcome-page.container';
import { OfferPageEssen } from '../pages/offer-page/offer-essen/offer-page-essen.container';
import { OfferPageEsteLazer } from '../pages/offer-page/offer-este-lazer/offer-page-essen.container';
import { ErrorPage } from '../pages/error-page/error-page.container';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/offer/Moskva/Tverskaya" element={<OfferPageEssen />} />
      <Route path="/offer/Kazan" element={<OfferPageEsteLazer />} />
      <Route path="/offer/Ufa" element={<OfferPageEsteLazer />} />
      <Route path="/offer/Tver" element={<OfferPageEsteLazer />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
