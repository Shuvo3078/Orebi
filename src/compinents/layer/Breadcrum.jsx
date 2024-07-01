import React from 'react';
import { FaAngleRight } from "react-icons/fa";

const Breadcrum = ({text, className}) => {
  return (
    <div className={`${className}`}>
      <h2 className='text-[#262626] font-DM font-bold text-5xl'>{text}</h2>
      <p className='text-[12px] text-[#767676] font-DM flex items-center mt-3'>Home <FaAngleRight/> 
      <span className='capitalize'>{window.location.pathname.split("/")[1]}</span>
      <span className='lowercase ml-1'>{window.location.pathname.split("/")[2]} </span>
      </p>
    </div>
  );
}

export default Breadcrum;
