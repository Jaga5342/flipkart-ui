import React from 'react'
import './index.css';
const Content = () => {
  return (
    <div className=" bg-center   ">
      {/* Centered Single Image */}
      <div className=" flex justify-center items-center ">
        <img
          src="image/fp1.jpeg"  // Replace with your image URL
          alt="Single Image"
          className=" object-cover w-[600px] h-[200px] rounded-lg"
        />
      </div>
    </div>
  )
}

export default Content
