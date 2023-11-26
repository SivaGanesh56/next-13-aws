// Footer.js
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-between p-4 text-white bg-gray-700">
      <div>
        <p>&copy; 2023 Your Company</p>
      </div>
      <div>
        <p>Follow us on:</p>
        <ul className="flex">
          <li className="mr-4"><Link href="https://twitter.com" className="text-white">Twitter</Link></li>
          <li className="mr-4"><Link href="https://facebook.com" className="text-white">Facebook</Link></li>
          <li><Link href="https://instagram.com" className="text-white">Instagram</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
