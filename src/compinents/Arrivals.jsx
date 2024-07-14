import React from 'react';
import Container from './layer/Container';
import ProductItem from './layer/ProductItem';
import ProductItem01 from '../assets/ProductItem01.jpg';
import ProductItem02 from '../assets/ProductItem02.jpg';
import ProductItem03 from '../assets/ProductItem03.jpg';
import ProductItem04 from '../assets/ProductItem04.jpg';
import Slider from 'react-slick';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import Title from './layer/Title';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='w-16 h-16 absolute lg:right-5 right-2 top-1/2 translate-y-[-50%] rounded-full bg-[#c7c7c7] !flex justify-center items-center'
      style={{ ...style, display: "block",  }}
      onClick={onClick}
    ><FaLongArrowAltRight/></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className='w-16 h-16 absolute lg:left-5 left-2 top-1/2 translate-y-[-50%] rounded-full bg-[#c7c7c7] !flex justify-center items-center z-10'
    style={{ ...style, display: "block",  }}
    onClick={onClick}
  ><FaLongArrowAltLeft/></div>
  );
}

const Arrivals = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
  };
  return (
    <div className='lg:pt-32 pt-5 px-3 md:px-0'>
      <Container>
        <Title className='lg:pb-12 pb-3' text='New Arrivals'/>
      </Container>
      <Container className='max-w-[1640px]'>
      <div>
      <Slider {...settings}>
        <div>
        <ProductItem className="mx-auto" offer='10%' src={ProductItem01}/>
        </div>
        <div>
        <ProductItem className="mx-auto" offer='New' src={ProductItem02}/>
        </div>
        <div>
        <ProductItem className="mx-auto" offer='New' src={ProductItem03}/>
        </div>
        <div>
        <ProductItem className="mx-auto" offer='New' src={ProductItem04}/>
        </div>
        <div>
        <ProductItem className="mx-auto" offer='50%' src={ProductItem03}/>
        </div>
    </Slider>
        </div>
      </Container>
    </div>
  );
}

export default Arrivals;
