import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  useNavigate
} from 'react-router-dom';
import 'aos/dist/aos.css';
import './css/style.css';
import AOS from 'aos';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Builder from './pages/Builder';
import Doc from './pages/Doc';
import { ResumeProvider } from './context/ResumeContext';
import { PdfProvider } from './context/pdfContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Profil from './pages/Profil';
import Hero from './pages/Hero';



function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''

    if (!localStorage.getItem('user')) {
      navigate('/signin');
    }

  }, [location.pathname]); // triggered on route change


  return (
    <>
      <GoogleOAuthProvider clientId='1005569368721-i38gscu50ukodvim78vvpg6dgophtrf9.apps.googleusercontent.com'>

        <PdfProvider>
          <ResumeProvider>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/doc" element={<Doc />} />
              <Route path="/builder" element={<Builder />} />
              <Route path="/profil" element={<Profil />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />

            </Routes>
          </ResumeProvider>
        </PdfProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
