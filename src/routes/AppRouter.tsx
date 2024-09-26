import { Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/welcome-page/welcome-page.container';
import { OfferPage } from '../pages/offer-page/offer-page.container';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/offer" element={<OfferPage />} />
    </Routes>
  );
};

export default AppRouter;
