import React from 'react';
import { Link } from 'react-router-dom';

const Botton = ({className, text, href, onClick}) => {
  return (
    <button onClick={onClick} className={`w-1/2 py-4 bg-[#262626] text-white font-DM text-sm font-bold border border-solid border-transparent hover:border-[#262626] hover:bg-white hover:text-[#262626] transition-all duration-300 ${className}`}>
      <Link to={href}>{text}</Link>
    </button>
  );
}

export default Botton;
