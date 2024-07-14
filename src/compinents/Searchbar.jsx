import React, { useEffect, useRef, useState } from 'react';
import Container from "./layer/Container";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import List from './layer/List';
import { RxCross2 } from "react-icons/rx";
import Botton from './layer/Botton';
import Image from './layer/Image';



const Searchbar = () => {

  let [cat, setCat]=useState(false)
  let [cart, setCart]=useState(false)
  let [account, setAccount]=useState(false)

  let catRef= useRef()
  let cartRef= useRef()
  let accountRef= useRef()

  useEffect(()=>{
    document.body.addEventListener("click", (element)=>{
      if (catRef.current.contains(element.target)){
        setCat(true)
      }else{
        setCat(false)
      }
    })
  },[])

  
  useEffect(()=>{
    document.body.addEventListener("click", (element)=>{
      if (cartRef.current.contains(element.target)){
        setCart(true)
      }else{
        setCart(false)
      }
    })
  },[])

  
  useEffect(()=>{
    document.body.addEventListener("click", (element)=>{
      if (accountRef.current.contains(element.target)){
        setAccount(true)
      }else{
        setAccount(false)
      }
    })
  },[])

  return (
    <div className='pt-3 py-0 lg:py-[25px] bg-[#F5F5F3]'>
      <Container className="flex justify-between lg:items-center flex-wrap">
        <div ref={catRef} className='relative lg:order-1 or-der-1 pl-3 lg:pl0'>
          <p  className='flex cursor-pointer items-center gap-x-[10px] text-[#262626] font-DM text-sm font-normal'><HiMiniBars3BottomLeft />Shop by Category</p>
          
        {
          cat && (<ul className='absolute top-full lg:translate-y-[23px] bg-[#262626] w-[263px] z-50'>
          <List className="px-5 py-1 lg:py-4  border-b block border-[#2D2D2D] font-DM text-white/70 text-sm hover:font-bold font-normal leading-normal lg:hover:ml-3 hover:text-[#FFF] transition-all duration-300" href='' text="Accesories"/>
            <List className="px-5 py-1 lg:py-4  border-b block border-[#2D2D2D] font-DM text-white/70 text-sm hover:font-bold font-normal leading-normal lg:hover:ml-3 hover:text-[#FFF] transition-all duration-300" href='' text="Furniture"/>
            <List className="px-5 py-1 lg:py-4 border-b block border-[#2D2D2D] font-DM text-white/70 text-sm hover:font-bold font-normal leading-normal lg:hover:ml-3 hover:text-[#FFF] transition-all duration-300" href='' text="Electronics"/>
            <List className="px-5 py-1 lg:py-4 border-b block border-[#2D2D2D] font-DM text-white/70 text-sm hover:font-bold font-normal leading-normal lg:hover:ml-3 hover:text-[#FFF] transition-all duration-300" href='' text="Clothes"/>
            <List className="px-5 py-1 lg:py-4 border-b block border-[#2D2D2D] font-DM text-white/70 text-sm hover:font-bold font-normal leading-normal lg:hover:ml-3 hover:text-[#FFF] transition-all duration-300" href='' text="Bags"/>
            <List className="px-5 py-1 lg:py-4  font-DM text-white/70 text-sm hover:font-bold font-normal leading-normal lg:hover:ml-3 hover:text-[#FFF] transition-all duration-300" href='' text="Home appliances"/>
          </ul>)
        }
        </div>
        <div className='relative lg:order-2 order-3 w-full lg:w-auto mt-3 lg:mt-0'>
          <input type='text' placeholder='Search Products' className='text-sm lg:text-base lg:border-transparent border-b border-slate-300 lg:w-[601px] w-full py-2 lg:py-4 outline-none border-0 px-[21px] bg-[#FFFFFF]'/>
          <FaSearch className='absolute right-5 top-1/2 translate-y-[-50%]' />
        </div>
        <div className=' relative flex gap-3 lg:order-3 order-2 pr-3 lg:pr-0'>
          <div ref={accountRef} className=''>
          <div className='icon flex gap-x-[10px]'>
          <FaUser />
          <FaCaretDown />
          </div>
              {
                account && (<ul className='absolute right-[60px] top-full lg:translate-y-4 w-[200px] text-center z-50'>
                <div className='bg-[#2B2B2B]'>
                <List className='font-DM text-[#FFF] text-sm font-bold leading-normal ' href="/my/account" text="My Account"/>
                </div>
                <div className='bg-[#FFFFFF]'>
                <List className='font-DM text-[#262626] text-sm font-normal leading-normal  w-full' href="" text="Log Out"/>
                </div>
              </ul>)
              }
          </div>
          <div ref={cartRef}   className='relative'>
          <FaShoppingCart />
              
              {
                cart && (<div className='cart absolute  right-0 top-full translate-y-[15px] lg:translate-y-5 w-[360px] z-50'>
                <div className='top flex justify-between items-center p-5  bg-[#F5F5F3]  '>
                 <div className='left flex items-center gap-x-5'>
                 <div className='image w-20 h-20 bg-[#D8D8D8] mr-5 border border-gray-300'>
                  <Image src='../src/assets/ProductItem07.jpg' alt='' className='w-full h-full object-cover'/>
                </div>
                <div className='text'>
                  <h2 className='font-DM text-[#262626] text-sm font-bold leading-normal mb-3'>Black Smart Watch</h2>
                  <p className='font-DM text-[#262626] text-sm font-bold leading-normal'>$44.00</p>
                </div>
                 </div>
                  <div><RxCross2 /></div>
                </div>
                <div className='bottom p-5 pt-[21px] bg-[#FFFFFF]'> 
                <div className='total flex gap-1 pb-[13px]'>
                  <h2 className='text-[#767676] font-DM text-base font-normal'>Subtotal: <span className='text-[#262626] font-bold'>$44.00</span></h2>
                  
                </div>
                <div className='btn flex gap-x-5'>
                  <Botton href='/cart' className=" vew_cart" text='View Cart'/>
                  <Botton href='/checkout' className=" vew_cart" text='Checkout'/>
                </div>
                </div>
                </div>)
              }

          </div>
        </div>
      </Container>
    </div>
  );
}

export default Searchbar;
