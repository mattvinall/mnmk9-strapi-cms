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

  const Links = [
    {
      name: "Home",
      href: "/",
      className: "block py-2 px-4 text-white hover:bg-gray-800 md:inline-block"
    },
    {
      name: "About",
      href: "/about",
      className: "block py-2 px-4 text-white hover:bg-gray-800 md:inline-block"
    },
    {
      name: "Services",
      href: "/services",
      className: "block py-2 px-4 text-white hover:bg-gray-800 md:inline-block"
    },
    {
      name: "Blog",
      href: "/blog",
      className: "block py-2 px-4 text-white hover:bg-gray-800 md:inline-block"
    },
    {
      name: "Gallery",
      href: "/gallery",
      className: "block py-2 px-4 text-white hover:bg-gray-800 md:inline-block"
    },
    {
      name: "Contact",
      href: "/contact",
      className: "block py-2 px-4 text-white hover:bg-gray-800 md:inline-block"
    }
  ];

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
              {!isOpen ? (
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                </svg>
              ) : (
                <svg className="h-8 w-8 fill-current" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
            </button>
          </div>
          <div className={`fixed top-20 bottom-0 h-[85%] overflow-y-none right-0 w-1/3 md:w-2/3 lg:w-1/2 h-screen bg-gray-900 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:static md:translate-x-0 md:flex md:flex-row md:space-x-8 md:bg-transparent md:h-auto`}>
            <div className="mt-16 space-y-8 text-center md:mt-0 md:space-y-0 md:flex md:flex-row md:space-x-2">
              {Links?.map((link, idx) => {
                const { name, href, className } = link
                return (
                  <Link key={idx} href={href} className={className} onClick={closeMenu}>{name}</Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
