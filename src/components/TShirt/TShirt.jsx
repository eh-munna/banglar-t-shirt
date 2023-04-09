import React from 'react';

const TShirt = ({ tshirt, buyNow }) => {
  const { _id, picture, name, price, gender } = tshirt;
  return (
    <div className="border-sky-100 border p-2 md:p-3 rounded-md flex flex-col">
      <img className="max-w-full rounded-md" src={picture} alt="" />
      <div className="mt-2 space-y-2">
        <h2 className="font-semibold text-lg text-sky-600">{name}</h2>
        <h4>Price : {price}</h4>
        <p>Gender : {gender}</p>
      </div>
      <div className="mt-auto">
        <button
          onClick={() => buyNow(tshirt)}
          className="w-full text-sky-900 border-sky-950 font-medium bg-sky-200 hover:bg-sky-300  border rounded-md p-1"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default TShirt;
