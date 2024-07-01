import React from 'react';
import Container from './layer/Container';
import List from './layer/List';
import { FaFacebookF, FaLinkedinIn  } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Footer_Logo from "../assets/Footer_logo.png"
import Image from './layer/Image';

const Footer = () => {
  return (
    <div className='bg-[#F5F5F3] md:pt-14 pt-7 md:pb-[52px] pb-5 md:mt-[106px] mt-5'>
      <Container className='flex justify-between flex-wrap px-3'>
        <div className='left w-full md:w-auto'>
        <div className='flex lg:gap-x-36 justify-between flex-wrap gap-y-3 lg:gap-y-0'>
        <ul>
                <h4 className='text-base text-[#262626] font-bold font-DM'>MENU</h4>
                <List className='text-sm text-[#6D6D6D] font-normal font-DM' href='#' text='Home'/>
                <List className='text-sm text-[#6D6D6D] font-normal font-DM' href='#' text='Shop'/>
                <List className='text-sm text-[#6D6D6D] font-normal font-DM' href='#' text='About'/>
                <List className='text-sm text-[#6D6D6D] font-normal font-DM' href='#' text='Contact'/>
                <List className='text-sm text-[#6D6D6D] font-normal font-DM' href='#' text='Journal'/>
            </ul>
            <ul>
                <h4 className='text-base text-[#262626] font-bold font-DM'>SHOP</h4>
                <List className='text-sm text-[#6D6D6D] font-normal font-DM' href='#' text='Home'/>
                <List className='text-sm text-[#6D6D6D] font-normal font-DM' href='#' text='Category 1'/>
                <List className='text-sm text-[#6D6D6D] font-normal font-DM' href='#' text='Category 2'/>
                <List className='text-sm text-[#6D6D6D] font-normal font-DM' href='#' text='Category 3'/>
                <List className='text-sm text-[#6D6D6D] font-normal font-DM' href='#' text='Category 4'/>
                <List className='text-sm text-[#6D6D6D] font-normal font-DM' href='#' text='Category 5'/>
            </ul>
            <ul>
                <h4 className='text-base text-[#262626] font-bold font-DM'>HELP</h4>
                <List className='text-sm text-[#6D6D6D] font-normal font-DM' href='#' text='Privacy Policy'/>
                <List className='text-sm text-[#6D6D6D] font-normal font-DM' href='#' text='Terms & Conditions'/>
                <List className='text-sm text-[#6D6D6D] font-normal font-DM' href='#' text='Special E-shop'/>
                <List className='text-sm text-[#6D6D6D] font-normal font-DM' href='#' text='Shipping'/>
                <List className='text-sm text-[#6D6D6D] font-normal font-DM' href='#' text='Secure Payments'/>
            </ul>
            <ul>
                <List className='text-base text-[#262626] font-bold font-DM' href='tel:6115711' text='(052) 611-5711'/>
                <List className='text-base text-[#262626] font-bold font-DM' href='https://company@domain.com'  text='company@domain.com'/>
                <h2 className='text-sm text-[#6D6D6D] font-normal font-DM pt-4'>575 Crescent Ave. Quakertown, PA 18951</h2>
                </ul>
                <Image className='md:hidden block w-[76px]' src={Footer_Logo} href='/'/>
        </div>
        <div className='icon flex text-[#262626] gap-x-6 md:mt-16 mt-5 mb-5 md:mb-0'>
                <FaFacebookF/>
                <FaLinkedinIn/>
                <FaInstagram/>
            </div>
        </div>
        <div className='right flex flex-col justify-between'>
            <Image className='hidden md:block' src={Footer_Logo} href='/'/>
            <p className='text-[#6D6D6D] md:text-sm text-sx font-DM'>2024 Orebi Minimal eCommerce Figma Template by Adveits</p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
