// components/Navbar.js

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Efecto para manejar el overflow del body
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto'; // Restaurar al desmontar
    };
  }, [isOpen]);

  return (
    <nav className="flex justify-between items-center py-3 bg-[#FEFCF2] z-10 px-4 border-b-2 border-blue-800 w-full">
      <Image unoptimized src="/logo.jpg" alt="Boat" className="w-20 md:w-32" width={200} height={200} />
      
      {/* Mobile Menu Toggle */}
      <div className="md:hidden z-20">
        <button onClick={() => setIsOpen(!isOpen)} className="text-blue-900 hover:text-blue-700 focus:outline-none focus:text-blue-700">
          {isOpen ? (
            <svg className="w-10 h-10 text-white mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-10 h-10 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:items-center md:space-x-10 md:text-lg md:font-medium">
        <Link href="/">
          <span className="block text-blue-900 hover:text-blue-700 text-3xl">Hoofdmenu</span>
        </Link>
        <Link href="/pricing">
          <span className="block text-blue-900 hover:text-blue-700 text-3xl">Menu opites</span>
        </Link>
        <Link href="/contact">
          <span className="block text-blue-900 hover:text-blue-700 text-3xl">Contact</span>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'flex overflow-hidden' : 'hidden overflow-auto'} flex-col items-start justify-center absolute bg-blue-900 shadow-md w-full h-screen top-0 left-0 transition-all duration-500 ease-in-out md:hidden z-10`}>
        <ul className="flex flex-col text-white text-left space-y-4">
          <li>
            <Link href="/">
              <span className="block py-2 px-4 text-[#FEFCF2] text-4xl" onClick={() => setIsOpen(false)}>Hoofdmenu</span>
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <span className="block py-2 px-4 text-[#FEFCF2] text-4xl" onClick={() => setIsOpen(false)}>Menu opites</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="block py-2 px-4 text-[#FEFCF2] text-4xl" onClick={() => setIsOpen(false)}>Contact</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Book Now Button */}
      <div className="hidden md:block">
        <Link href="/contact">
          <span className="text-xl text-blue-900 border-2 border-blue-900 px-10 py-2 rounded-full">Book Now</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
