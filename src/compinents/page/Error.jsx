import React from 'react';
import Container from '../layer/Container';
import { FaSearch } from 'react-icons/fa';
import Botton from '../layer/Botton';

const Error = () => {
  return (
    <Container className='pl-2'>
        <h2 className='text-[#262626] text-[200px] font-bold pt-20'>404</h2>
        <p className='text-[#767676] text-base w-[644px] leading-[30px]'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
        <div className='relative w-[644px] pt-[50px] pb-[60px]'>
        <input className=' w-full outline-none border border-[#F0F0F0] p-5 placeholder:text-[#767676] placeholder:text-base' placeholder='Type to search'/>
        <FaSearch className='absolute top-[50%] right-0 translate-y-[-50%] translate-x-[-21px]' />
        </div>

        <Botton href='/' className='w-[200px]' text='Back to Home'/>
    </Container>
  );
}

export default Error;
