import React from 'react';
import Container from '../layer/Container';
import Breadcrum from '../layer/Breadcrum';
import Slider from "react-slick";
import  "./ProductDetails.css";
import InputField from '../layer/InputField';
import BestSeller02 from '../../assets/BestSeller02.jpg'
import BestSeller04 from '../../assets/BestSeller04.jpg'
import Image from '../layer/Image';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import { HiOutlineMinusSm } from 'react-icons/hi';
import { FiPlus } from 'react-icons/fi';
import Botton from '../layer/Botton';

// export default function SimpleSlider() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   }
// }


const ProductDetails = () => {
    var settings = {
        arrows:false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div >
              <ul className='m-0 flex gap-x-3'> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "100px",
                height:'100px',
                color: "blue",
                border: "1px blue solid"
              }}
            >
              {/* {i + 1} */}
            </div>
          )
      };
  return (
    <div>
      <Container className='mb-[217px]'>
        <Breadcrum title='Product Details'/>
        <div className='main flex flex-wrap justify-between gap-y-10 mt-[136px]'>
            <div className='child w-[780px] h-[780px]'>
            <Slider {...settings}>
      <div className='w-full h-[780px]  bg-lime-500'>
        <h3 className='text-4xl'><Image className='w-full' src={BestSeller02}/></h3>
      </div>
      <div className='w-full h-[780px] bg-lime-500'>
        <h3 className='text-4xl'><Image className='w-full' src={BestSeller04}/></h3>
      </div>
      <div className='w-full h-[780px] bg-lime-500'>
        <h3 className='text-4xl'>1</h3>
      </div>
    </Slider>

            </div>
            <div className='child w-[780px] h-[780px]'>
                <h2 className='text-[#262626] text-[39px] font-bold'>Product</h2>
                <p className='text-sm text-[#767676] flex items-center gap-x-[25px]'>
                  <div className='icon flex items-center text-[#FFD881]'>
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  </div>
                  1 Review
                  </p>

                  <div className='flex items-center gap-x-[22px] mt-5 pb-6 border-b border-[#F0F0F0]'>
                    <p className='text-base text-[#767676]'>$88.00</p>
                    <p className='text-[#262626] text-xl font-bold'>$44.00</p>
                  </div>

                  <div className='flex items-center gap-x-[53px] mt-7 '>
                  <h2 className='text-base text-[#262626] font-bold'>COLOR:</h2>
                    <div className='h-7 flex items-center gap-x-4'>
                      <div className='w-5 h-5 bg-[#FF8686] opacity-[19.73%] hover:w-7 hover:h-7 hover:opacity-[100%] rounded-full'></div>
                      <div className='w-5 h-5 bg-[#979797] opacity-[19.73%] hover:w-7 hover:h-7 hover:opacity-[100%] rounded-full'></div>
                      <div className='w-5 h-5 bg-[#7ED321] opacity-[19.73%] hover:w-7 hover:h-7 hover:opacity-[100%] rounded-full'></div>
                      <div className='w-5 h-5 bg-[#B6B6B6] opacity-[19.73%] hover:w-7 hover:h-7 hover:opacity-[100%] rounded-full'></div>
                      <div className='w-5 h-5 bg-[#15CBA5] opacity-[19.73%] hover:w-7 hover:h-7 hover:opacity-[100%] rounded-full'></div>
                    </div>
                  </div>

                  <div className='flex items-center gap-x-[79px] mt-[30px]'>
                    <h3 className='text-[#262626] text-base font-bold'>SIZE:</h3>
                    <select className='w-36 h-9 border border-[#F0F0F0] text-[#767676] text-base px-5'>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                      <option>XXL</option>
                    </select>
                  </div>

                  <div className='flex items-center gap-x-[29px] pt-[30px] pb-[30px] border-b border-[#F0F0F0]'>
                    <h2 className='text-[#262626] text-base font-bold'>QUANTITY:</h2>
                    <div className='flex items-center gap-x-9 px-5 border border-[#F0F0F0] max-w-[139px] h-9 text-[#767676] text-base'>
                    <HiOutlineMinusSm />
                    <p>1</p>
                    <FiPlus />
                    </div>
                  </div>
                  <div className='flex items-start gap-x-7 py-6 border-b border-[#F0F0F0]'>
                    <h2 className=' text-[#262626] font-bold text-base'>STATUS:</h2>
                    <p className=' text-[#767676] text-base'>In stock</p>
                  </div>
                  <div className='flex items-center gap-x-5 py-[30px] border-b border-[#F0F0F0]'>
                    <Botton className='w-[200px]' text='Add to Wish List'/>
                    <Botton className='w-[200px]' text='Add to Cart'/>
                  </div>
                  <div className=' py-6 border-b border-[#F0F0F0]'>
                    <p className='text-[#262626] text-base font-bold flex items-center justify-between'>FEATURES  & DETAILS <FiPlus /></p>
                  </div>
                   
                  <div className=' py-6 border-b border-[#F0F0F0]'>
                    <p className='text-[#262626] text-base font-bold flex items-center justify-between'>FEATURES  & DETAILS <FiPlus /></p>
                  </div>
                  <p className='text-[#767676] text-base mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                  </p>
                   
            </div>
        </div>

        <div className='main mt-[223px] pb-3  border-b border-[#F0F0F0]'>
        <div className='flex items-center gap-x-16'>
          <h2 className='text-[#767676] text-base'>Description</h2>
          <h2 className='text-[#262626] text-base font-bold'>Reviews (1)</h2>
        </div>
        <p className='text-[#767676] text-sm mt-10 pb-4 border-b border-[#F0F0F0]'>1 review for Product</p>

        
        <div className='flex items-center gap-x-9 mt-6'>
          <h2 className='text-[#262626] text-base'>John Ford</h2>
          <div className='icon flex items-center text-[#FFD881]'>
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
        </div>

        </div>
          <p className='text-[#767676] text-base text-right'>6 months ago</p>
       
        <p className='text-[#767676] text-base pt-[14px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        </div>

        <h3 className='text-xl text-[#262626] font-bold mt-12'>Add a Review</h3>
        <InputField className='mt-[42px] ' label='Name' placeholder='Your name here' id='name' type='text'/>
        <InputField className='mt-[42px] ' label='Email' placeholder='Your email here' id='email' type='email'/>

        

        <div className='pt-6 pb-7'>
            <h3 className='text-[#262626] text-base font-bold'>Review</h3>
                <textarea className='w-[780px] h-[138px] mt-2 placeholder:text-sm placeholder:text-[#767676] border-b border-[#F0F0F0] pb-4 outline-none' type='text' id='textArea' placeholder='Your review here'/>
        </div>

        <Botton className='w-[200px]' text='Post'/>    
      </Container>
    </div>
  );
}

export default ProductDetails;
