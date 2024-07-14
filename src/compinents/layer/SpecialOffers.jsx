import React from 'react';
import Container from './Container';
import Title from './Title';
import ProductItem from './ProductItem';
import ProductItem05 from '../../assets/ProductItem05.jpg';
import ProductItem06 from '../../assets/ProductItem06.jpg';
import ProductItem07 from '../../assets/ProductItem07.jpg';
import ProductItem08 from '../../assets/ProductItem08.jpg';

const SpecialOffers = () => {
  return (
    <div className='px-3' pt-10 md:px-0>
        <Container>
            <Title className='lg:pt-32 pt-3 lg:pb-[48px] pb-3'  text='Special Offers'/>
            <div className='flex items-center gap-10 flex-wrap gap-y-3'>
                <ProductItem offer='New' src={ProductItem05}/>
                <ProductItem offer='New' src={ProductItem06}/>
                <ProductItem offer='New' src={ProductItem07}/>
                <ProductItem offer='New' src={ProductItem08}/>
            </div>
        </Container>
      
    </div>
  );
}

export default SpecialOffers;
