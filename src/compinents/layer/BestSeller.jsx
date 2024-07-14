import React from 'react';
import Container from './Container';
import Title from './Title';
import ProductItem from './ProductItem';
import BestSeller01 from '../../assets/BestSeller01.jpg';
import BestSeller02 from '../../assets/BestSeller02.jpg';
import BestSeller03 from '../../assets/BestSeller03.jpg';
import BestSeller04 from '../../assets/BestSeller04.jpg';

const BestSeller = () => {
  return (
    <div>
        <Container className='px-3 lg:px-0'>
            <Title className='lg:pt-32 pt-5 lg:pb-12 pb-2 px-3 md:px-0'  text='Best Seller'/>
            <div className='flex items-center gap-x-10 flex-wrap gap-y-3'>
                <ProductItem offer='New' src={BestSeller01}/>
                <ProductItem offer='New' src={BestSeller02}/>
                <ProductItem offer='New' src={BestSeller03}/>
                <ProductItem offer='New' src={BestSeller04}/>
            </div>
        </Container>
      
    </div>
  );
}

export default BestSeller;
