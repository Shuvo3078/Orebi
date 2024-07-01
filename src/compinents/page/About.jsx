import React from 'react';
import Container from '../layer/Container';
import Breadcrum from '../layer/Breadcrum';
import Image from '../layer/Image';
import product1 from '../../assets/ProductItem01.jpg'
import product9 from '../../assets/ProductItem09.jpg'
import Botton from '../layer/Botton';

const About = () => {
  return (
    <Container className='pt-[124px] mb-6'>
      <Breadcrum className='mb-[136px]' text='About'/>
      <div className='main flex items-center justify-between mb-32'>
        <div className='w-[780px] h-[776px] bg-slate-400 relative'>
          <Image className='w-full object-cover' href='#' src={product1} alt='../../assets/ProductItem01.jpg'/>
          <Botton className='w-[281px] absolute left-[50%] bottom-[62px] translate-x-[-50%] translate-y-[-50%]' text='Our Brands'/>
        </div>
        <div className='w-[780px] h-[776px] bg-slate-400 relative'>
          <Image className='w-full object-cover' href='#' src={product9} alt='../../assets/ProductItem09.jpg'/>
          <Botton className='w-[281px] absolute left-[50%] bottom-[62px] translate-x-[-50%] translate-y-[-50%]' text='Our Brands'/>
        </div>
        
      </div>
      <p className='text-[39px] text[#262626] leading-[52px] tracking-[1.64px] mb-[118px]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>

      <div className='main flex items-center justify-between'>
        <div className='w-[507px]'>
          <h2 className='text-[#262626] text-[25px] font-bold mb-3' >Our Vision</h2>
          <p className='text-[#767676] text-base leading-[30px]' text- >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className='w-[507px]'>
          <h2 className='text-[#262626] text-[25px] font-bold mb-3' >Our Story</h2>
          <p className='text-[#767676] text-base leading-[30px]' text- >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
        </div>
        <div className='w-[507px]'>
          <h2 className='text-[#262626] text-[25px] font-bold mb-3' >Our Brands</h2>
          <p className='text-[#767676] text-base leading-[30px]' text- >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        </div>
      </div>
    </Container>
  );
}

export default About;
