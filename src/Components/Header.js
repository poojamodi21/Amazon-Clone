import React from "react";
import Image from "next/image";
import {SearchIcon ,MenuIcon,ShoppingCartIcon} from '@heroicons/react/outline'
function Header() {
  return (
    <header >
        {/*Top nav */}
        {/*Logo */}
      <div className="  flex flex-grow items-center p-1 py-2 bg-amazon_blue ">
        <div className=" mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer "
          />
        </div>
        {/*Middle section */}
        <div className=" hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-600 flex hover:bg-yellow-500">
            <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md outline-none" />
            <SearchIcon className="h-14 p-4" />
        </div>
        {/*right section */}
        <div className="text-white flex justify-center items-center  space-x-6 mx-6 whitespace-nowrap">
            <div className="link">
                <p>Hello,Pooja Modi</p>
                <p className="font-extrabold">Accounts & Lists</p>
            </div>
            <div className="link">
                <p>Returns</p>
                <p className="font-extrabold">& Orders</p>
            </div>
            <div className=" relative link flex items-center" >
                <span className="absolute  bottom-7 right-0 text-yellow-500 font-extrabold md:right-8 text-xl top:4 ">0</span>
                <ShoppingCartIcon className="h-10" />
                <p className=" hidden md:inline font-extrabold sm:hiddens mt-2">Cart</p>
            </div>
        </div>
      </div>
      {/*Bottom nav */}
      <div className='flex items-center pl-6 p-3 bg-amazon_blue-light text-white space-x-4 font-semibold'>
          <p className='link flex '><MenuIcon className="h-6 mr-1"/>All</p>
            <p className='link hidden lg:inline-flex '>Mobiles</p>
            <p className='link '>Best Sellers</p>
            <p className='link hidden lg:inline-flex'>Fashion</p>
            <p className='link '>Customer Service</p>
            <p className='link hidden lg:inline-flex'>Electronics</p>
            <p className='link '>Prime</p>

      </div>
    </header>
  );
}

export default Header;
