import React, { useState } from 'react';
import Container from '../layer/Container';
import Breadcrum from '../layer/Breadcrum';
import ProductFilter from '../layer/ProductFilter';
import ProductItem from '../layer/ProductItem';
import image1 from '../../assets/BestSeller03.jpg'
import Pagination from '../Pagination';
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";

const Product = () => {

  let [number, setNumber] = useState(12)
  let selectNumber=(element)=>{
    let numberConverter = Number(element.target.value) 
    setNumber(numberConverter)
  }
  
  return (
    <div>
      <Container>
        <div className='header py-32'>
      <Breadcrum text='Products'/>
        </div>
        <div className='main flex justify-between'>
        <div className='sidebar w-[370px]'>
         <ProductFilter catTitle='Shop by Category' text1='Category 1' text2='Category 2' text3='Category 3' text4='Category 4' text5='Category 5'/>
         <ProductFilter className='mt-[53px]' classNames='hidden' catTitle='Shop by Color' text1='Color 1' text2='Color 2' text3='Color 3' text4='Color 4' text5='Color 5'/>
         <ProductFilter className='mt-[53px]' classNames='hidden' catTitle='Shop by Brand' text1='Brand 1' text2='Brand 2' text3='Brand 3' text4='Brand 4' text5='Brand 5'/>
         <ProductFilter className='mt-[53px]' classNames='hidden' catTitle='Shop by Price' text1='$0.00 - $9.99' text2='$10.00 - $19.99' text3='$20.00 - $29.99' text4='$30.00 - $39.99' text5='$40.00 - $69.99' />
             </div>




        <div className='product w-[1190px]  '>
          {/* ============================================================================ */}
          <div className='w-full flex justify-between mb-[60px]'>
            <div className='icon flex gap-x-5'>
              <div className='w-9 h-9 border border-[#F0F0F0] flex items-center justify-center text-[#737373] hover:text-[#FFFFFF] hover:bg-[#262626] cursor-pointer transition-all duration-300 '>
              <IoGrid />
              </div>

              <div className='w-9 h-9 border border-[#F0F0F0] flex items-center text-[#737373] hover:text-[#FFFFFF] justify-center hover:bg-[#262626] cursor-pointer transition-all duration-300'>
              <FaThList />
              </div>
            </div>
            <div className='right '>
              <label className='text-[#767676] font-DM text-base pr-4' for=''>Sort by:</label>
              <select name='' id='' className='w-[239px] py-1 px-5 text-base leading-7 outline-none border border-[#F0F0F0] text-[#767676] font-DM'>
                <option className='p-7 bg-gray-400' value='Featured'>Featured</option>
                <option className='p-7 bg-gray-400' value='Featured'>Featured</option>
                <option className='p-7 bg-gray-400' value='Featured'>Featured</option>
                <option className='p-7 bg-gray-400' value='Featured'>Featured</option>
                <option className='p-7 bg-gray-400' value='Featured'>Featured</option>
              </select>
              <label className='text-[#767676] font-DM text-base pr-4 ml-10' for=''>Show:</label>
              <select
              onChange={selectNumber}
              name='' id='' className='w-[139px] py-1 px-5 text-base leading-7 outline-none border border-[#F0F0F0] text-[#767676] font-DM'>
                <option className=' bg-gray-400' value='12'>
                  12
                  </option>
                <option className=' bg-gray-400' value='24'>
                  24
                  </option>
                <option className=' bg-gray-400' value='36'>
                  36
                  </option>
              </select>
            </div>
          </div>
          {/* ====================================================================================== */}
          {/* <ProductItem src={image1}/> 
          <ProductItem src={image1}/> 
          <ProductItem src={image1}/> 
          <ProductItem src={image1}/> 
          <ProductItem src={image1}/> 
          <ProductItem src={image1}/> 
          <ProductItem src={image1}/> 
          <ProductItem src={image1}/> 
          <ProductItem src={image1}/> 
          <ProductItem src={image1}/> 
          <ProductItem src={image1}/>  */}

          <Pagination itemsPerPage={number}/>
        </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
