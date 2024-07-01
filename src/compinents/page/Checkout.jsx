import React from 'react';
import Container from '../layer/Container';
import Breadcrum from '../layer/Breadcrum';
import Title from '../layer/Title';
import InputField from '../layer/InputField';
import Botton from '../layer/Botton';

const Checkout = () => {
  return (
    <Container>
        <Breadcrum className='mt-32 mb-32' text='Checkout'/>
        <input className='w-[122px] outline-none placeholder:text-[#767676] placeholder:text-base' type='text' id='cupon' placeholder='Have a coupon? '/>
        <label className='text-[#262626] text-base' htmlFor='cupon'>Click here to enter your code</label>
        <Title text='Billing Details' className='mt-[119px] mb-10'/>
        <div className='flex items-center gap-x-10'>
            <InputField type='text' label='First Name *' id='Fname' placeholder='First Name'/>
            <InputField  type='text' label='Last Name *' id='Lname' placeholder='Last Name'/>
        </div>
        <InputField className='w-[1055px] mt-6' type='text' label='Companye Name (optional) *' id='companye' placeholder='Company Name'/>
        <div className='my-6'>
            <h2 className='text-[#262626] text-base font-bold '>Country *</h2>
            <select className='text-[#767676] text-sm border-b outline-none w-[1055px] border-[#F0F0F] py-3'>
            <option>Please select</option>
            <option>USA</option>
            <option>Australia</option>
            <option>Canada</option>
            <option>Bangladesh</option>
            <option>Canada</option>
        </select>
        </div>
        <InputField className='w-[1055px] mt-6' type='text' label='Street Address *' id='address' placeholder='House number and street name'/>
        <InputField className='w-[1055px] ' type='text' placeholder='Apartment, suite, unit etc. (optional)'/>
        <InputField className='w-[1055px] mt-6' type='text' label='Town/City *' id='city' placeholder='Town/City'/>
        <InputField className='w-[1055px] mt-6' type='text' label='County (optional)' id='coun' placeholder='County'/>
        <InputField className='w-[1055px] mt-6' type='number' label='Post Code *' id='pCode' placeholder='Post Code'/>
        <InputField className='w-[1055px] mt-6' type='number' label='Phone *' id='phone' placeholder='Phone'/>
        <InputField className='w-[1055px] mt-6' type='email' label='Email Address *' id='phone' placeholder='Email'/>

        <div className='w-[1055px] border-b border-[#F0F0F0] pb-[87px]'>
            <Title className='mt-[129px] mb-[42px]' text='Additional Information'/>
            <div className='flex flex-col gap-y-2.5'>
            <label className='text-base text-[#262626] font-bold ' htmlFor='nots'>Other Notes (optional)</label>
            <input className='placeholder:text-sm placeholder:text-[#767676] pb-4 outline-none' type='text' id='nots' placeholder='Notes about your order, e.g. special notes for delivery.'/>
            </div>
        </div>

        <div>
            <Title className='mt-[129px] mb-12' text='Your Order'/>
            <div className='flex items-center'>
                <div className='border border-[#F0F0F0] w-[320px] pt-4 pb-[14px] px-5 text-[#262626] text-base font-bold'>Product</div>
                <div className='border border-[#F0F0F0] w-[320px] pt-4 pb-[14px] px-5 text-[#767676] text-base '>Total</div>
            </div>
            <div className='flex items-center'>
                <div className='border border-[#F0F0F0] w-[320px] pt-4 pb-[14px] px-5 text-[#262626] text-base font-bold'>Product name x 1</div>
                <div className='border border-[#F0F0F0] w-[320px] pt-4 pb-[14px] px-5 text-[#767676] text-base '>389.99 $</div>
            </div>
            <div className='flex items-center'>
                <div className='border border-[#F0F0F0] w-[320px] pt-4 pb-[14px] px-5 text-[#262626] text-base font-bold'>Subtotal name x 1</div>
                <div className='border border-[#F0F0F0] w-[320px] pt-4 pb-[14px] px-5 text-[#262626] text-base '>389.99 $</div>
            </div>
            <div className='flex items-center'>
                <div className='border border-[#F0F0F0] w-[320px] pt-4 pb-[14px] px-5 text-[#262626] text-base font-bold'>Total name x 1</div>
                <div className='border border-[#F0F0F0] w-[320px] pt-4 pb-[14px] px-5 text-[#262626] text-base '>389.99 $</div>
            </div>
        </div>
        <div className='w-[1053px] py-5 mt-[60px]'>
        <Botton className='w-[200px]' text='Proceed to Bank'/>
        </div>
    </Container>
  );
}

export default Checkout;
