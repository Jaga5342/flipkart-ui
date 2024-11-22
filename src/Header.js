import React from 'react';
import './index.css';

function Header() {
  return (
    <div className="flex items-center w-full bg-black text-white h-16 px-4">
      <div className="flex items-center">
        <img 
          className="object-contain hover:border-white w-24 h-10 mr-4" 
          alt="amazon logo" 
          src="image/main.png" 
        />
      </div>
 
      
      <div className="text-center font-semibold mr-4 cursor-pointer">
      <p>Location</p>
      <div>
        <i class='fa ' ></i>
      </div>
      
        
      </div>

      {/* Search Bar */}
      <div className="flex flex-grow items-center">
        <div className=" text-center bg-gray-500 h-10 px-4 rounded-l-md cursor-pointer">All</div>
        <input 
          type="text" 
          placeholder="Search..." 
          className="flex-grow h-10 px-4 rounded-l-md text-black"
        />
        <button className="h-10 px-4 bg-yellow-500 rounded-r-md">
          🔍
        </button>
      </div>

      {/* Navigation Options */}
      <div className="flex items-center space-x-4 ml-4">
        <div className="cursor-pointer">^EN</div>
        <div className="cursor-pointer">Orders</div>
        <div className="cursor-pointer">Cart</div>
      </div>
      
    </div>
  );
}

export default Header;
