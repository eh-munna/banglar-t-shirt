import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
  const tShirts = useLoaderData();
  console.log(tShirts);
  return (
    <div>
      <h1>This is home</h1>
    </div>
  );
};

export default Home;
