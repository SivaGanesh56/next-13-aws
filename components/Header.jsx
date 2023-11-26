// Header.js
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 text-white bg-gray-800">
        <Link href="/"><h1 className="text-2xl font-bold">Your Website Name</h1></Link>
      
      <nav>
        <ul className="flex">
          <li className="mr-4"><a href="/" className="text-white">Home</a></li>
          <li className="mr-4"><a href="/about" className="text-white">About</a></li>
          <li><a href="/contact" className="text-white">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
