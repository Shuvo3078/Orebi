import React, { useState } from 'react';
import Container from '../layer/Container';
import Breadcrum from '../layer/Breadcrum';
import { IoIosEye, IoIosEyeOff  } from "react-icons/io";
import InputField from '../layer/InputField';
import Botton from '../layer/Botton';
import FromError from '../layer/FromError';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { Blocks } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    
    let [email, setEmail] = useState("")
    let [emailerr, setEmailerr] = useState("")

    let [password, setPassword] = useState("")
    let [passworderr, setPassworderr] = useState("")

    const auth = getAuth();
    let navigate = useNavigate()


    let [spinner, setSpinner] = useState(true)
    
    


    let submit = ()=>{
     
      if (!email){
        setEmailerr('Email Must need')
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)){
        setEmailerr('You have entered an invalid email address!')
      }
      if (!password){
        setPassworderr("Password is required")
      }
      

    if(email && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    
    setEmail("")
    setPassword("")
    
    if(user){
      setSpinner(false)

    toast.success('Welcome');
    setTimeout(()=>{
      navigate("/")
    }, 2000)
    }
    

  })
 
  
  .catch((error) => {
    const errorCode = error.code;
    if (error.code.includes("auth/email-already-in-use")){
      setEmailerr("Email already in use")
      toast.error('Something wrong');
    }
    // ..
  });
    }

    }

// ======================Email start===========================
    let emailchange=(e)=>{
      setEmail(e.target.value)
      setEmailerr("")
    }
    // ======================Email end===========================
    let changepassword=(e)=>{
      setPassword(e.target.value)
      setPassworderr("")
    }

   




    let [show10, setShow10]=useState(false)
    let [eye, setEye]=useState(false)

  return (
    <Container className='pt-32'>


        <ToastContainer
        className=" text-white"
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        
        <Breadcrum text='Login'/>
        
        <div className='border-b border-[#F0F0F0] pb-[62px]'>
        <p className='max-w-[644px] mt-32 font-DM text-base text-[#767676] leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>
        <div className='main border-b border-[#F0F0F0]'>
            <h2 className='text-[#262626] text-4xl  font-bold mt-14 mb-[42px]'>Returning Customer</h2>
            <div className='flex flex-wrap gap-x-10 gap-y-6'>
              
            
            <InputField value={email} onChange={emailchange}  label='Email address' type='email' id='email' placeholder='company@domain.com'>
            {
              emailerr &&
              <FromError error={emailerr}/>
            }
            
            </InputField>
            <div onClick={()=> setShow10(true)} className='w-[507px] flex flex-col relative border-b border-[#F0F0F0]'>
            <InputField value={password} onChange={changepassword}  label='Password' type={eye?"text":"password"} id='Password' placeholder='Password'>
            {
              passworderr &&
              <FromError error= {passworderr}/>
              
            }
            </InputField>
            {eye? (
            <IoIosEye 
            onClick={()=> setEye(!eye)} 
            className={`absolute right-0 top-1/2 ${show10?" opacity-100" : "opacity-0"}`}/>
            ):(
            <IoIosEyeOff 
            onClick={()=> setEye(!eye)} 
            className={`absolute right-0 top-1/2 ${show10?" opacity-100" : "opacity-0"}`} />
            )}
            </div>
           
            </div>
            
            {
            spinner ?  <Botton onClick={submit} className=' mt-7 w-[200px] mb-[70px]' text='Log in'/>
            :<Blocks
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
        />
          }

            


        </div>

        <div className='border-t border-[#F0F0F0]'>
        <h2 className='text-4xl text-[#262626] font-bold mt-14 mb-9'>New Customer</h2>
        <p className='max-w-[644px] text-base text-[#767676] leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>
        

   
          

         
        <Botton className='w-[200px] text-sm mt-[51px]' text='Continue'/>
    </Container>
  );
}
export default Login;
