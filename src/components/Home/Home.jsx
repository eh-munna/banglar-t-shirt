import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';

const Home = () => {
  const tShirts = useLoaderData();
  const [cart, setCart] = useState([]);
  const buyNow = (tshirt) => {
    const newCart = [...cart, tshirt];
    setCart(newCart);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 my-2 md:my-4 gap-4">
      <div className="grid order-2 md:order-1 grid-cols-1 md:grid-cols-3 col-span-3 gap-3">
        {tShirts.map((tshirt) => (
          <TShirt key={tshirt._id} tshirt={tshirt} buyNow={buyNow}></TShirt>
        ))}
      </div>
      <div className="order-1 md:order-2">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
