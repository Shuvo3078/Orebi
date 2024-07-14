import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiMinus } from "react-icons/fi";
import { GoTriangleRight } from "react-icons/go";

const ProductFilter = ({catTitle , className, text1, text2, text3, text4, text5, classNames}) => {
    
  let [show, setShow]= useState(false)
  let [show2, setShow2]= useState(false)
  let [showheading, setShowheading]= useState(false)
  return (
    <div>
       <h3 onClick={()=> setShowheading(!showheading)} className={`text-[#262626] text-xl font-DM font-bold flex justify-between items-center ${className}`}>{catTitle}
       <GoTriangleRight className={` transition-all duration-300 ${showheading?  'rotate-90':'rotate-0'}`}/>
       </h3>
          {
            showheading && (<ul className=' flex flex-col gap-y-5'>
            <li className='text-base font-DM relative overflow-hidden pb-5 mt-[35px] border-b border-[#D8D8D8]' onClick={()=>setShow(!show)}>
            <Link className='flex justify-between relative text-[#767676] text-base font-DM leading-7'><span>{text1}</span>  
            <span className={`${classNames}`}>
              <FiPlus className={`absolute top-1/2 translate-y-[-50%] transition-all duration-300 right-0 ${show?'opacity-0 invisible':'opacity-100 visible rotate-90'}`}/>
              <FiMinus className={`absolute top-1/2 translate-y-[-50%] right-0 ${show?'opacity-100 visible':'opacity-0 invisible'}`} />
              </span>
              </Link>
            <ul className={`transition-all duration-300 flex flex-col gap-y-5 ${classNames}  ${show?"static":"absolute translate-x-[-100%] invisible"}`}>
            <li>
              <Link className="  text-base font-DM leading-7 pl-4 block">Sub Catagory</Link>
            </li>
            <li>
              <Link className="  text-base font-DM leading-7 pl-4 block">Sub Catagory</Link>
            </li>
            <li>
              <Link className="  text-base font-DM leading-7 pl-4 block">Sub Catagory</Link>
            </li>
            </ul>
            </li>
            <li className='text-base font-DM relative pb-5 border-b border-[#D8D8D8]'>
            <Link className='flex justify-between relative text-[#767676] text-base font-DM leading-7'>{text2}
              </Link>
            </li>
            <li className='text-base font-DM relative overflow-hidden pb-5 border-b border-[#D8D8D8]' onClick={()=>setShow2(!show2)}>
            <Link className='flex justify-between relative text-[#767676] text-base font-DM leading-7'><span>{text3}</span>  
            <span className={`${classNames}`}>
              <FiPlus className={`absolute top-1/2 translate-y-[-50%] transition-all duration-300 right-0 ${show2?'opacity-0 invisible':'opacity-100 visible rotate-90'}`}/>
              <FiMinus className={`absolute top-1/2 translate-y-[-50%] right-0 ${show2?'opacity-100 visible':'opacity-0 invisible'}`} />
              </span>
              </Link>
            <ul className={`transition-all duration-300 flex flex-col gap-y-5 ${classNames} ${show2?"static":"absolute translate-x-[-100%] invisible"}`}>
            <li>
              <Link className="  text-base font-DM leading-7 pl-4 block">Sub Catagory</Link>
            </li>
            <li>
              <Link className="  text-base font-DM leading-7 pl-4 block">Sub Catagory</Link>
            </li>
            <li>
              <Link className="  text-base font-DM leading-7 pl-4 block">Sub Catagory</Link>
            </li>
            </ul>
            </li>

            <li className='text-base font-DM relative pb-5 border-b border-[#D8D8D8]'>
            <Link className='flex justify-between relative text-[#767676] text-base font-DM leading-7'>{text4}
              </Link>
            </li>

            <li className='text-base font-DM relative pb-5 border-b border-[#D8D8D8]'>
            <Link className='flex justify-between relative text-[#767676] text-base font-DM leading-7'>{text5}
              </Link>
            </li>

          </ul>)
          }
    </div>
  );
}

export default ProductFilter;
