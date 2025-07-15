import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import himtiLogo from '../../assets/himti-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Efek untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Program', path: '/program' },
    { title: 'Course', path: '/course' },
  ];

  // Class styling menggunakan warna 'primary' dari tema Anda
  const linkBaseClass = "text-base font-medium transition-colors duration-300";
  const activeLinkClass = "text-primary";
  const inactiveLinkClass = "text-gray-600 hover:text-primary";

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          
          {/* --- BAGIAN YANG DIPERBAIKI --- */}
          <NavLink to="/" className="flex-shrink-0">
            <div className="flex items-center gap-3">
              <img className="h-10 w-auto" src={himtiLogo} alt="HIMTI Learning Group" />
              {/* REVISI: 
                Class 'hidden' dan 'sm:block' dihapus.
                Ukuran font diatur menjadi 'text-base' di mobile dan 'text-lg' di layar 'sm' ke atas
                agar terlihat proporsional.
              */}
              <span className="font-bold text-base sm:text-lg text-secondary">
                HIMTI Learning Group
              </span>
            </div>
          </NavLink>

          {/* Nav Links (Desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.path}
                className={({ isActive }) => 
                  `${linkBaseClass} ${isActive ? activeLinkClass : inactiveLinkClass}`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </div>

          {/* Tombol CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="font-semibold text-gray-600 hover:text-primary transition-colors"
            >
              Login
            </a>
            <a
              href="https://himti-lms.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Daftar Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.path}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base ${linkBaseClass} ${isActive ? activeLinkClass : inactiveLinkClass}`
                }
                onClick={() => setIsOpen(false)} 
              >
                {link.title}
              </NavLink>
            ))}
            <div className="border-t border-gray-200 my-2"></div>
            <a
              href="#"
              className={`block px-3 py-2 rounded-md text-base ${linkBaseClass} ${inactiveLinkClass}`}
            >
              Login
            </a>
            <a
              href="https://himti-lms.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-2 px-4 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;