import React from 'react';
import Container from './layer/Container';
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { SlReload } from "react-icons/sl";

const BannerBottom = () => {
  return (
    <div className='border-b border-[#F0F0F0]'>
      <Container className="py-5 flex items-center justify-between">
        <p className='flex items-center gap-x-2 font-normal font-DM text-base text-[#6D6D6D]'>
            <PiNumberTwoBold className='text-black text-xl'/>Two years warranty
        </p>
        <p className='flex items-center gap-x-2 font-normal font-DM text-base text-[#6D6D6D]'>
            <FaTruck className='text-black text-xl'/>Free shipping
        </p>
        <p className='flex items-center gap-x-2 font-normal font-DM text-base text-[#6D6D6D]'>
            <SlReload className='text-black text-xl rotate-90'/>Return policy in 30 days
        </p>
      </Container>
    </div>
  );
}

export default BannerBottom;
