import React from 'react';
import { FaHeart, FaShoppingCart, FaSync  } from "react-icons/fa";


const ProductItem = ({src, offer, className}) => {
  return (
    <div className={`sm:w-[370px] w-full  ${className}`}>
        <div className='group'>
      <div className='image w-full h-[370px] bg-slate-400 relative overflow-hidden'>
        <img className='w-full h-full object-cover' src={`${src}`}/>
        <button className={`absolute top-5 left-5 bg-[#262626] ${offer ? "px-8":"px-0"}   ${offer ? "py-2":"py-0"}  text-[#FFFFFF] font-DM text-sm font-bold`}>{offer}</button>
        <div className='overlay w-full bg-[#FFFFFF] absolute left-0 bottom-0 translate-y-[100%] opacity-100 visible group-hover:translate-y-[0] transition-all duration-300'>
            <ul className='pr-[31px]'>
                <li className='flex items-center justify-end gap-x-4 pt-[25px] pb-5 text-[#767676] font-DM text-base  hover:text-[#262626] hover:font-bold cursor-pointer hover:transition-all hover:duration-300 '>Add to Wish List <FaHeart className='text-[#262626]'/></li>
                <li className='flex items-center justify-end gap-x-4 text-[#767676] font-DM text-base  hover:text-[#262626] hover:font-bold cursor-pointer hover:transition-all hover:duration-300 '>Compare<FaSync  className='text-[#262626]'/></li>
                <li className='flex items-center justify-end gap-x-4 pt-[21px] pb-[26px] text-[#767676] font-DM text-base  hover:text-[#262626] hover:font-bold cursor-pointer hover:transition-all hover:duration-300 '>Add to Cart <FaShoppingCart className='text-[#262626]'/></li>
            </ul>
        </div>
      </div>
      <div className='text bg-gray-300 '>
        <h2 className='flex justify-between text-[#262626] font-DM text-xl pt-6 pb-4'>Basic Crew Neck Tee <p className='text-[#767676] font-DM text-base'>$44.00</p></h2> 
        <p className='text-[#767676] font-DM text-base'>Black</p>
        
      </div>
    </div>
    </div>
  );
}

export default ProductItem;
