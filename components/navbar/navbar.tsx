'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '/app/logo.png';
import cart from '/app/emptycart.png';

const NavLinks = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'About Us', link: '/about' },
  { id: 3, title: 'User Agreement', link: '/termscondition' },
  {
    id: 4,
    title: 'Gaming',
    link: '#',
    subLinks: [
      { id: 41, title: 'Game accounts', link: '/gameacct' },
      { id: 42, title: 'Game keys', link: '/gamekey' },
      { id: 43, title: 'In game credits', link: '/ingamecred' },
      { id: 44, title: 'Ps games', link: '/psgames' },
      { id: 45, title: 'Xbox games', link: '/xboxgames' },
    ],
  },
  {
    id: 5,
    title: 'Services',
    link: '#',
    subLinks: [
      { id: 51, title: 'Social media Boosting', link: '/socialboost' },
      { id: 52, title: 'Social media Sponsoring', link: '/socialsponsor' },
      { id: 53, title: 'Netflix', link: '/netflix' },
      { id: 54, title: 'Spotify', link: '/spotify' },
      { id: 55, title: 'Psn pass', link: '/pspass' },
      { id: 56, title: 'Xbox pass', link: '/xpass' },
      { id: 57, title: 'Softwares', link: '/softwares' },
    ],
  },
  {
    id: 6,
    title: 'Gift Cards',
    link: '#',
    subLinks: [
      { id: 61, title: 'Steam Gift card', link: '/steam' },
      { id: 62, title: 'itunes Gift card', link: '/itunes' },
      { id: 63, title: 'Psn Gift card', link: '/psn' },
      { id: 64, title: 'xbox gift card', link: '/xbox' },
    ],
  },
];

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const id = parseInt(e.currentTarget.dataset.id || '-1');
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <div className="shadow-xl z-50 w-full bg-black bg-opacity-90">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="Logo" className="w-16 sm:w-20" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          {NavLinks.map((link) => (
            <li key={link.id} className="relative group">
              {link.subLinks ? (
                <>
                  <a
                    data-id={link.id}
                    onClick={handleClick}
                    className={`text-white font-medium flex items-center cursor-pointer px-2 py-3 hover:text-red-500 ${
                      openDropdown === link.id ? 'text-red-500' : ''
                    }`}
                  >
                    {link.title}
                    <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </a>
                  <div
                    className={`absolute top-full left-0 mt-2 bg-black bg-opacity-95 z-50 w-48 rounded-md shadow-lg ${
                      openDropdown === link.id ? 'block' : 'hidden'
                    }`}
                  >
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.id}
                        href={sub.link}
                        className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-red-500"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.link}
                  className="text-white font-medium hover:text-red-500 px-2 py-3"
                >
                  {link.title}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-4 py-1.5 rounded-full hover:scale-105 transition"
          >
            Login
          </Link>
          <Link href="/cart" className="relative">
            <Image src={cart} alt="Cart" width={32} height={32} />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
              0
            </span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden ml-2 text-white focus:outline-none"
          >
            {showMobileMenu ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {showMobileMenu && (
        <div className="lg:hidden bg-black bg-opacity-95 py-4 px-6">
          <ul className="flex flex-col gap-4">
            {NavLinks.map((link) => (
              <li key={link.id}>
                {link.subLinks ? (
                  <details className="group">
                    <summary className="flex items-center justify-between text-white font-medium cursor-pointer">
                      {link.title}
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </summary>
                    <div className="mt-2 ml-4">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.id}
                          href={sub.link}
                          className="block py-1 text-white hover:text-red-500"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={link.link}
                    className="text-white font-medium hover:text-red-500"
                  >
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;