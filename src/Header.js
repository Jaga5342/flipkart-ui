import React from 'react';
import './index.css';

function Header() {
  return (
    <div className="flex items-center w-full bg-slate-100 text-black h-16 px-4">

      <div className="flex items-center">
       <div className="text-center text-2xl text-blue-600 font-bold mr-4 cursor-pointer">
        Flipkart
       </div> 
       <div className="text-center  text-red-300 font-semibold text-xl mr-4 cursor-pointer">Explore +</div>
      </div>
 


      {/* Search Bar */}
      <div className="flex flex-grow items-center">
        <input 
          type="text" 
          placeholder=" 🔍 Search for Products,Brands and More" 
          className="flex-grow h-10 px-2 rounded-l-md text-black bg-slate-300"
        />
       
      </div>

      {/* Navigation Options */}
      <div className="flex items-center space-x-4 ml-4">
        <div className="cursor-pointer text-xl"> Login</div>
        <div className="cursor-pointer text-xl">Cart</div>
        <div className="cursor-pointer text-xl">Become & Seller</div>
      </div>
      
    </div>
  );
}

export default Header;
