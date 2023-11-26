// Footer.js
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
          <li className="mr-4"><a href="https://twitter.com" className="text-white">Twitter</a></li>
          <li className="mr-4"><a href="https://facebook.com" className="text-white">Facebook</a></li>
          <li><a href="https://instagram.com" className="text-white">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
