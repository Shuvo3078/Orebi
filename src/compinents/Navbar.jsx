import React, { useEffect, useState } from 'react';
import Container from "./layer/Container";
import Image from './layer/Image';
import Logo from '../assets/logo.png';
import List from './layer/List';
import { FaBars } from "react-icons/fa6";

const Navbar = () => {

  let [show, setShow] = useState(false)

  useEffect(()=>{
    
    function size(){
      if(window.innerWidth < 1024){
        setShow(false)
      }else{
        setShow(true)
      }
    }

    size()

    window.addEventListener("resize", size)

  },[])
  
  let fdr=() =>{
    setShow(!show)
  }

  return (
    <nav className=''>
        <Container className="flex items-center justify-between lg:py-8 py-3 relative ">
        <div className='logo pl-5'>
            <Image href="/" src={Logo} alt="src/assets/logo.png"></Image>
          </div>
         
          <div className={`menu py-7 lg:py-0 px-4 lg:px-0 absolute left-0 top-full lg:static bg-slate-300 lg:bg-transparent w-full flex justify-center z-50 ${show?"opacity-100 visible":"opacity-0 invisible"} transition-all duration-300`}>
          <ul className='flex items-center flex-col gap-y-2 lg:flex-row gap-x-10'>
             <List className="font-DM text-[#767676] text-sm font-normal leading-normal hover:text-black transition-all duration-300" href="" text="Home"/>
             <List className="font-DM text-[#767676] text-sm font-normal leading-normal hover:text-black transition-all duration-300" href="/products" text="Shop"/>
             <List className="font-DM text-[#767676] text-sm font-normal leading-normal hover:text-black transition-all duration-300" href="/about" text="About"/>
             <List className="font-DM text-[#767676] text-sm font-normal leading-normal hover:text-black transition-all duration-300" href="/contacts" text="Contacts"/>
             <List className="font-DM text-[#767676] text-sm font-normal leading-normal hover:text-black transition-all duration-300" href="/sign/up" text="SignUp"/>
             <List className="font-DM text-[#767676] text-sm font-normal leading-normal hover:text-black transition-all duration-300" href="/login" text="Login"/>
            </ul>
          </div>
          <div className='pr-5'>
          <FaBars onClick={fdr} className='lg:hidden ' />
          </div>
        </Container>
    </nav>
  );
}

export default Navbar;
