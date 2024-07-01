import React from 'react';
import Container from '../layer/Container';
import Breadcrum from '../layer/Breadcrum';

const MyAccount = () => {
  return (
    <Container>
        <Breadcrum className='mt-[124px] mb-[127px]' text='My Account'/>

        <div className='main flex gap-x-10'>
            <div className='w-[234px] flex flex-col gap-y-5'>
                <h2 className='text-[#262626] text-base font-bold pb-5 border-b border-[#F0F0F0]'>Dashboard</h2>
                <p className='text-[#767676] text-base pb-5 border-b border-[#F0F0F0] cursor-pointer'>Others</p>
                <p className='text-[#767676] text-base pb-5 border-b border-[#F0F0F0] cursor-pointer'>Donwloads</p>
                <p className='text-[#767676] text-base pb-5 border-b border-[#F0F0F0] cursor-pointer'>Addresses</p>
                <p className='text-[#767676] text-base pb-5 border-b border-[#F0F0F0] cursor-pointer'>Account details</p>
                <p className='text-[#767676] text-base pb-5 border-b border-[#F0F0F0] cursor-pointer'>Logout</p>
            </div>
            <div className='w-[778px]'>
                <p className='text-base text-[#767676]'>Hello <span className='text-[#262626]'>admin</span> (not <span className='text-[#262626]'>admin</span> ? <span className='text-[#262626]'>Log out</span>)</p>
                <p className='text-base text-[#767676] leading-[30px] mt-8'>From your account dashboard you can view your <span className='text-[#262626]'>recent orders</span>, manage your <span className='text-[#262626]'><span className='text-[#262626]'>Log out</span></span>, and <span className='text-[#262626]'>edit your password and account details.</span></p>
            </div>
        </div>
    </Container>
  );
}

export default MyAccount;
