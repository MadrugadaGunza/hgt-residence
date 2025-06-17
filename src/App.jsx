import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { UserStorage } from './contexts/UserContext';

// pages
import Home from './pages/public/home/Home';
import Auth from './pages/auth/Auth';
import Apartments from './pages/public/apatments/Apartments';
import Admin from './pages/admin/Admin';
import Details from './pages/public/apatments/Details';
import Profile from './pages/admin/profile/Profile';

// components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Index from './pages/public/apatments/Index';

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
        <Route path='/' element={<Home />} />
        <Route path='/apartments/*' element={<Index />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/auth/*' element={<Auth />} />
        <Route path='/dashboard/*' element={<Admin />} />
      </Routes>
      {!isDashboard && <Footer />}
    </>
  );
};

export default App;