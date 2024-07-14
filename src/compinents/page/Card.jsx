import React from 'react';
import Container from '../layer/Container';
import Breadcrum from '../layer/Breadcrum';
import { RxCross2 } from 'react-icons/rx';
import Image from '../layer/Image';
import ProductItem08 from '../../assets/ProductItem08.jpg'
import { FaPlus } from 'react-icons/fa';
import { FiMinus } from 'react-icons/fi';
import Botton from '../layer/Botton';

const Card = () => {
  return (
    <Container>
        <Breadcrum className='mt-[124px] mb-[136px]' text='Cart'/>

        <div className='bg-[#F5F5F3]'>
            <ul className='py-8 flex items-center gap-x-[340px] pl-5'>
                <li className='text-[#262626] font-bold text-base'>Product</li>
                <li className='text-[#262626] font-bold text-base'>Price</li>
                <li className='text-[#262626] font-bold text-base'>Quantity</li>
                <li className='text-[#262626] font-bold text-base'>Total</li>
            </ul>
        </div>

       <div className='border border-[#F0F0F0]'>
       <div className='flex items-center py-[30px] pl-5 border border-[#F0F0F0]'>
        <div className='flex items-center'>
        <RxCross2 />
        <div className='w-[100px] h-[100px] ml-10 mr-5'>
            <Image className='w-full' src={ProductItem08} alt='../../assets/ProductItem08.jpg'/>
        </div>
        <p className='text-[#262626] text-base font-bold'>Product name</p>
        </div>
        <div className='pl-[123px] pr-[312px]'>
            <p className='text-[#262626] text-xl font-bold'>$44.00</p>
        </div>
        <div className='w-[139px] border border-[#F0F0F0] flex items-center justify-between text-[#767676] text-base py-[3px] px-5'>
        <FaPlus />
        <p>1</p>
        <FiMinus />
        </div>
        <div className='pl-[271px]'>
            <p className='text-[#262626] text-xl font-bold'>$44.00</p>
        </div>
        </div>
        <div className='flex items-center justify-between p-5'>
            <div className='flex items-center'>
            <select className='w-[255px] py-[10px] px-5 border border-[#EAEAEA]'>
                <option>SIZE</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
            </select>
            <p className='text-[#262626] text-sm font-bold pl-6'>Apply coupon</p>
            </div>
            <p className='text-[#262626] text-sm font-bold'>Update cart</p>
        </div>
       </div>

       <div className='pt-[54px] flex flex-col items-end'>
        <h2 className='text-[#262626] text-xl font-bold pb-6'>Cart totals</h2>
        <div>
            <div className='flex'>
                <div className='w-[322px] border border-[#F0F0F0] py-4 px-5 text-[#262626] text-base font-bold'>Subtotal</div>
                <div className='w-[322px] border border-[#F0F0F0] py-4 px-5 text-[#767676] text-base'>389.99 $</div>
            </div>
            <div className='flex'>
                <div className='w-[322px] border border-[#F0F0F0] py-4 px-5 text-[#262626] text-base font-bold'>Total</div>
                <div className='w-[322px] border border-[#F0F0F0] py-4 px-5 text-[#767676] text-base'>389.99 $</div>
            </div>
        </div>
        <Botton className='w-[200px] mt-[30px] mb-[38px]' text='Proceed to Checkout'/>
       </div>
    </Container>
  );
}

export default Card;
