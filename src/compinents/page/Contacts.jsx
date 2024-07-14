import React from 'react';
import Container from '../layer/Container';
import Breadcrum from '../layer/Breadcrum';
import Title from '../layer/Title';
import InputField from '../layer/InputField';
import Botton from '../layer/Botton';
import { TiPlus } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <Container className='p-[34px]'>
        <Breadcrum className='mt-[124px] mb-[152px]' text='Contacts'/>
        <div className='w-[780px]'>
            <Title className='mb-[42px]' text='Fill up a Form'/>
            <InputField className='w-full' type='text' label='Name' id='name' placeholder='Your name here'/>
            <InputField className='w-full py-6' type='email' label='Email' id='email' placeholder='Your email here'/>

            <label className='text-base text-[#262626] font-bold ' htmlFor='message'>Message</label>
            <textarea className='w-[780px] h-[138px] mt-2 placeholder:text-sm placeholder:text-[#767676] border-b border-[#F0F0F0] pb-4 outline-none' type='text' id='message' placeholder='Your message here'/>
        </div>

        <Botton className='w-[200px] mt-8 mb-[140px]' text='Post'/>

        <div className='relative '>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14610.949943009166!2d90.3793610121727!3d23.72106685396465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8dea7c18969%3A0xc4c2a51658e86152!2z4Kay4Ka-4Kay4Kas4Ka-4KaXLCDgpqLgpr7gppXgpr4!5e0!3m2!1sbn!2sbd!4v1717770441694!5m2!1sbn!2sbd" width="1600px" height="572px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className='absolute top-[50%] left-[80px] translate-y-[-50%] w-[451px] bg-[#FFFFFF] border border-[#F0F0F0] px-5 pb-6'>
        <h2 className='text-[#262626] text-base font-bold py-[30px] border-b border-[#F0F0F0] flex items-center justify-between'>Germany Office <TiPlus /></h2>
        <h2 className='text-[#262626] text-base font-bold py-[30px]  border-b border-[#F0F0F0] flex items-center justify-between'>Slovakia Office <TiPlus /></h2>
        <h2 className='text-[#262626] text-base font-bold py-[30px] '>Lithuania Office</h2>
        <div className='text-[#767676] text-base flex flex-col gap-y-3'>
        <p>575 Crescent Ave. Quakertown, PA 18951</p>
        <Link to='tel:+432 533 12 523'>+432 533 12 523</Link>
        <Link to='mailto:info@domain.com'>info@domain.com</Link>
        <p>Mon - Fri: 9am - 6pm</p>
        </div>
        </div>
        </div>
    </Container>
  );
}

export default Contacts;
