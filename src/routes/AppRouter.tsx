import { Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage/WelcomePage.container';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
    </Routes>
  );
};

export default AppRouter;
