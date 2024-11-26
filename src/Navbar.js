import React from 'react';

const Navbar = () => {
  return (
  
    <div className=" bg-slate-100 p-2 m-4 shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <ul className="flex justify-center space-x-8 font-bold">
          {/* Electronics Category */}
          <li className="relative group">
            <button className="flex items-center py-2 px-4 text-gray-700 hover:text-blue-600 focus:outline-none">
              <img
                src="image/e1.jpeg" // Replace with relevant image URL
                alt="Electronics"
                className="w-8 h-8 rounded-full mr-2"
              />
              Electronics
            </button>
            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-200 invisible">
              <ul className="py-2">
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Mobiles
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Laptops
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Headphones
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* Fashion Category */}
          <li className="relative group">
            <button className="flex items-center py-2 px-4 text-gray-700 hover:text-blue-600 focus:outline-none">
              <img
                src="image/e2.png" // Replace with relevant image URL
                alt="Fashion"
                className="w-8 h-8 rounded-full mr-2"
              />
              Fashion
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-200 invisible">
              <ul className="py-2">
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Men
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Women
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Kids
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* Gadgets Category */}
          <li className="relative group">
            <button className="flex items-center py-2 px-4 text-gray-700 hover:text-blue-600 focus:outline-none">
              <img
                src="image/e3.jpeg" // Replace with relevant image URL
                alt="Gadgets"
                className="w-8 h-8 rounded-full mr-2"
              />
              Gadgets
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-200 invisible">
              <ul className="py-2">
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Smartwatches
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Drones
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Cameras
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* Hair Products Category */}
          <li className="relative group">
            <button className="flex items-center py-2 px-4 text-gray-700 hover:text-blue-600 focus:outline-none">
              <img
                src="image/e4.jpeg" // Replace with relevant image URL
                alt="Hair Products"
                className="w-8 h-8 rounded-full mr-2"
              />
              Hair Products
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-200 invisible">
              <ul className="py-2">
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Shampoo
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Conditioner
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Styling Gel
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  
    

  );
};

export default Navbar;
