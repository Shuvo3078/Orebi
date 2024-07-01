import React from 'react';
import Container from '../layer/Container';
import Breadcrum from '../layer/Breadcrum';
import Botton from '../layer/Botton';
import InputField from '../layer/InputField';

const Login = () => {
  return (
    <div>
      <Container>
        <div className='main border-b border-[#F0F0F0]'>
        <Breadcrum text='Login'/>
        <p className='mt-32 mb-16 max-w-[644px] text-base text-[#767676] leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>
        <h2 className='text-[39px] text-[#262626] font-bold mt-14' >Returning Customer</h2>

        <div className='from flex items-center gap-x-10 '>
            <InputField  label='Email address' type='email' id='email' placeholder='company@domain.com'/>
            <InputField className='!placeholder:text-4xl placeholder:text-[#767676]'  label='Password' type='password' id='password' placeholder='. . . . . .'/>
        </div>
        <Botton className='mt-7 w-[200px] mb-[70px]' text='Log in'/>


        <div className='border-t border-[#F0F0F0]'>
        <h2 className='text-4xl text-[#262626] font-bold mt-14 mb-9'>New Customer</h2>
        <p className='max-w-[644px] text-base text-[#767676] leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        <Botton className='w-[200px] text-sm mt-[51px]' text='Continue'/>
        </div>
      </Container>
    </div>
  );
}

export default Login;
