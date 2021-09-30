import React from "react";
import Image from "next/dist/client/image";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Currency from "react-currency-formatter";

const MAX = 5;
const MIN = 1;
function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(Math.floor(Math.random() * (MAX - MIN + 1)) + MIN);
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className='relative flex flex-col m-5 bg-white p-10 z-30'>
      <p className=" absolute top-2 right-2  italic text-gray-400">{category}</p>
      <Image src={image} width={200} height={200} objectFit="contain" />
      <h4 className='my-3 line-clamp-1'>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-600" />
          ))}
      </div>
      <p className='my-2 line-clamp-2 text-sm'>{description}</p>
      <div className='mb-5' >
        <Currency quantity={price} currency="INR" />
      </div>
      <button className=' button'>Add to Cart</button>
      {hasPrime && (
        <div className='flex items-center space-x-2 text-xs text-gray-500 italic '>
          <img className="w-12"src="https://links.papareact.com/fdw" alt="" />
          <p>FREE Next-Day Delivery</p>
        </div>
      )}
      
    </div>
  );
}

export default Product;
