import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { UserStorage } from './contexts/UserContext';

// pages
import Home from './pages/public/home/Home';
import Auth from './pages/auth/Auth';
import Admin from './pages/admin/Admin';

// components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <AppContent />
      </UserStorage>
    </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <>
      {!isDashboard && <Header />}
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/auth/*' element={<Auth />} />
        <Route path='/dashboard/*' element={<Admin />} />
      </Routes>
      {!isDashboard && <Footer />}
    </>
  );
};

export default App;