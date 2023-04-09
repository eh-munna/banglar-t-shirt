import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center">
        <li>
          <Link
            className="text-sky-900 border-sky-950 font-medium bg-sky-200 hover:bg-sky-300  border rounded-md p-1"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-sky-900 border-sky-950 font-medium bg-sky-200 hover:bg-sky-300  border rounded-md p-1"
            to="/order-review"
          >
            Order Review
          </Link>
        </li>
        <li>
          <Link
            className="text-sky-900 border-sky-950 font-medium bg-sky-200 hover:bg-sky-300  border rounded-md p-1"
            to="/about"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            className="text-sky-900 border-sky-950 font-medium bg-sky-200 hover:bg-sky-300  border rounded-md p-1"
            to="/contact"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
