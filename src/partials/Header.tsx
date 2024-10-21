import  { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';
import { LogOut, User, BrickWall, FileMinus } from 'lucide-react'
import { googleLogout } from '@react-oauth/google';

interface ProfileData {
  email: string
  family_name: string
  given_name: string
  id: string
  name: string
  picture: string
  verified_email: true
}
function Header() {

  const [top, setTop] = useState(true);
  const [profilAvatar, setProfilAvatar] = useState<ProfileData | null>(null);
  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser) as ProfileData;
      setProfilAvatar(user);
    }
  }, []);
  const logOut = () => {
    googleLogout();
    localStorage.removeItem('user');
    window.location.reload();
  };
  useEffect(() => {
    if (profilAvatar) {
      console.log(profilAvatar); // This will log once state is updated
    }
  }, [profilAvatar]);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (profilAvatar) {
      navigate('/profil', { state: { user: profilAvatar } });
    }
  };
  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white  backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
              </svg>
            </Link>
          </div>

          {/* Site navigation */}
          {
            profilAvatar ? (
              // Render this if the user is logged in
              <nav className="flex flex-grow">
                <ul className="flex flex-grow justify-end flex-wrap items-center">
                  <Dropdown title={profilAvatar.name}>

                    <div>

                      <Link to="#" className="flex px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"> <FileMinus className="mr-2 h-4 w-4" /> <span>My resumes</span></Link>
                    </div>
                    <div>

                      <button
                        onClick={handleProfileClick}
                        className="flex w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                      > <User className="mr-2 h-4 w-4" /> <span>Profil</span></button>
                    </div>

                    <div>

                      <Link to="/builder" className="flex px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"> <BrickWall className="mr-2 h-4 w-4" /> <span>Builder</span></Link>
                    </div>
                    <hr></hr>
                    <div>

                      <button onClick={() => logOut()} className="flex w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"> <LogOut className="mr-2 h-4 w-4" /> <span>Sign out</span></button>
                    </div>
                  </Dropdown>

                </ul>

              </nav>
            ) : (
              <nav className="flex flex-grow">
                <ul className="flex flex-grow justify-end flex-wrap items-center">
                  <li>
                    <Link to="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
                  </li>
                  <li>
                    <Link to="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                      <span>Sign up</span>
                      <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </Link>
                  </li>
                </ul>

              </nav>)
          }


        </div>
      </div>
    </header>
  );
}

export default Header;
