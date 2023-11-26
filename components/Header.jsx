// Header.js
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 text-white bg-gray-800">
        <Link href="/"><h1 className="text-2xl font-bold">Your Website Name</h1></Link>
      
      <nav>
        <ul className="flex">
          <li className="mr-4"><Link href="/" className="text-white">Home</Link></li>
          <li className="mr-4"><Link href="/about" className="text-white">About</Link></li>
          <li><Link href="/contact" className="text-white">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
