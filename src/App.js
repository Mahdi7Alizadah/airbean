import { Route, Routes } from 'react-router-dom/dist';
import { useLocation } from 'react-router-dom';
import Landing from './Component/LandingSida';
import HeaderImg from "./Component/HeaderImg";
import HamburgerMenu from './Component/HamburgerMenu';
import FooterImg from './Component/FooterImg';
import Loging from './Component/Loging'
import About from './Component/About';
import Meny from './Component/Meny'
import BagButton from './Component/BagButton';
import Status from './Component/Status';
import History from './Component/History'
import './App.css';
import './style/bagButton.css'

function App() {
  const location = useLocation();
  const isMenuOrAboutPage =
    location.pathname === '/meny' ||
    location.pathname === '/about' ||
    location.pathname === '/history' ||
    location.pathname === '/signing' ||
    location.pathname === '/cart';

  const ftr= 
  location.pathname === '/about' ||
  location.pathname === '/meny' ;
  return (
    <div className="App">
       {isMenuOrAboutPage && (<header className="header">
        <HamburgerMenu />
        <HeaderImg /> 
        {isMenuOrAboutPage !== '/about' && <BagButton/>}
      </header>)}
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/status" element={<Status/>} />
        <Route path="/meny" element={<Meny/>} />
        <Route path="/signing" element={<Loging/>} />
        <Route path="/History" element={<History/>} />

      </Routes>
      {ftr && (<footer className='footer'>
      <FooterImg />
      </footer>)}
    </div>
  );
}

export default App;
