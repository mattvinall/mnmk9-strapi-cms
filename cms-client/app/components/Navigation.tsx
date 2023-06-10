"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import Logo from "../../public/mnmk9-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link className="text-white text-xl font-semibold" href="/">
              <Image className="rounded-full" src={Logo} width={75} height={75} alt="MNM-K9 company logo" />
            </Link>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              onClick={isOpen ? closeMenu : toggleMenu}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className={`fixed top-10 overflow-y-none right-0 w-1/3 md:w-2/3 lg:w-1/2 h-screen bg-gray-900 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:static md:translate-x-0 md:flex md:flex-row md:space-x-8 md:bg-transparent md:h-auto`}>
            <div className="mt-16 space-y-8 text-center md:mt-0 md:space-y-0 md:flex md:flex-row md:space-x-8">
              <Link className="block py-2 px-4 text-white hover:bg-gray-800 md:inline-block" href="/" onClick={closeMenu}>
                Home
              </Link>
              <Link className="block py-2 px-4 text-white hover:bg-gray-800 md:inline-block" href="/about" onClick={closeMenu}>
                About
              </Link>
              <Link className="block py-2 px-4 text-white hover:bg-gray-800 md:inline-block" href="/services" onClick={closeMenu}>
                Services
              </Link>
              <Link className="block py-2 px-4 text-white hover:bg-gray-800 md:inline-block" href="/gallery" onClick={closeMenu}>
                Gallery
              </Link>
              <Link className="block py-2 px-4 text-white hover:bg-gray-800 md:inline-block" href="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
