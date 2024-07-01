import React from 'react';
import Container from './layer/Container';
import Image from './layer/Image';
import ad1 from '../assets/Ad_1.jpg';
import ad2 from '../assets/Ad_2.jpg';
import ad3 from '../assets/Ad_3.jpg';
const Sale = () => {
  return (
    <div className='lg:pt-44 pt-5 px-3 lg:px-0'>
      <Container className="flex items-center justify-between flex-wrap gap-y-4">
        <div className='left w-[780px]  bg-slate-400 lg:h-[780px] h-auto'>
            <Image className="w-full h-full object-cover" src={ad1} alt="ad1" href="#"/>
        </div>
        <div className='left w-[780px] lg:h-[780px] h-auto flex flex-col justify-between gap-y-4 lg:gap-y-0'>
            <div className='child w-full lg:h-[370px] h-auto bg-slate-400'>
            <Image className="w-full h-full object-content" src={ad2} alt="ad2" href="#"/>
            </div>
            <div className='child w-full lg:h-[370px] h-auto bg-slate-400'>
            <Image className="w-full h-full object-content" src={ad3} alt="ad3" href="#"/>
            </div>
        </div>
      </Container>
    </div>
  );
}

export default Sale;
