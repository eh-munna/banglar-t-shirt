import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <div className="container p-2 md:p-4 mx-auto">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
