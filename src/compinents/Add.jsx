import React from 'react';
import Container from './layer/Container';
import Image from './layer/Image';
import add from '../assets/Ad_5.jpg'

const Add = () => {
  return (
    <div>
      <Container className=' Add lg:mt-32 mt-5 px-3'>
        <Image className='w-full' src={add}/>
      </Container>
    </div>
  );
}

export default Add;