import { Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/welcome-page/welcome-page.container';
import { OfferPageEssen } from '../pages/offer-page/offer-essen/offer-page-essen.container';
import { OfferPageEsteLazer } from '../pages/offer-page/offer-este-lazer/offer-page-essen.container';
import { OfferPageMissis } from '../pages/offer-page/offer-missis/offer-page-missis.container';
import { ErrorPage } from '../pages/error-page/error-page.container';
import { OfferPageBeauty } from '../pages/offer-page/offer-beauty/offer-page-beauty.container';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/offer/Moskva/Tverskaya" element={<OfferPageEssen />} />
      <Route path="/offer/Kazan" element={<OfferPageEsteLazer />} />
      <Route path="/offer/Ufa" element={<OfferPageEsteLazer />} />
      <Route path="/offer/Tver" element={<OfferPageEsteLazer />} />
      <Route path="/offer/Moskva/Petrovka" element={<OfferPageMissis />} />
      <Route path="/offer/Moskva/Saykina" element={<OfferPageMissis />} />
      <Route 
        path="/offer/Sankt-Peterburg/Gorkovskaya" 
        element={<OfferPageBeauty />} 
      />
      <Route 
        path="offer/Sankt-Peterburg/Pl-Vosstaniya" 
        element={<OfferPageBeauty />} 
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
