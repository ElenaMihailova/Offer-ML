import { Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/welcome-page/welcome-page.container';
import { OfferPageEssen } from '../pages/offer-page/offer-essen/offer-page-essen.container';
import { OfferPage } from '../pages/offer-page/offer-new/offer-page.container';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/offerEssen" element={<OfferPageEssen />} />
      <Route path="/offerNew" element={<OfferPage />} />
    </Routes>
  );
};

export default AppRouter;
