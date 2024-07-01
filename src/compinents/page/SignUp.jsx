import React, { useState } from 'react';
import Container from '../layer/Container';
import Breadcrum from '../layer/Breadcrum';
import { IoIosEye, IoIosEyeOff  } from "react-icons/io";
import yes from "../../assets/checkbox01.png";
import no from "../../assets/checkbox02.png";
import InputField from '../layer/InputField';
import Botton from '../layer/Botton';
import FromError from '../layer/FromError';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = () => {

    let [name, setName] =useState("")
    let [nameerror, setNameerror]= useState("")
    let[lastname, setLastname]=useState("")
    let [lastnameerror, setLastnameerror] =useState("")
    let [telephone, settelephone] = useState("")
    let [telephoneerr, setTelephoneerr] =useState("")
    let [address2, setAddress2] = useState("")
    let [address2err, setAddress2err] = useState("")
    let [address, setAddress] = useState("")
    let [addresserr, setAddresserr] = useState("")
    let [city, setCity] =useState("")
    let [cityerr, setCityerr] =useState("")
    let [postcode, setPostcode] = useState("")
    let [postcodeerr, setPostcodeerr] = useState("")
    let [email, setEmail] = useState("")
    let [emailerr, setEmailerr] = useState("")

    let [password, setPassword] = useState("")
    let [passworderr, setPassworderr] = useState("")
    const auth = getAuth();

    let [rpassword, setrPassword] = useState("")
    let [rpassworderr, setrPassworderr] = useState("")



    let submit = ()=>{
      if (!name){
        setNameerror("Name is required")
      }
      if (!lastname){
        setLastnameerror("Last Name is required")
      }
      if (!telephone){
        setTelephoneerr("Telephone number is must required")
      }
      if (!address){
        setAddresserr("Address is required")
      }
      if (!address2){
        setAddress2err("Address2 is requard")
      }
        
      if (!city){
        setCityerr("City is required")
      }
      if (!postcode){
        setPostcodeerr("Post Code is required")
      }
      if (!email){
        setEmailerr('Email Must need')
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)){
        setEmailerr('You have entered an invalid email address!')
      }
      if (!password){
        setPassworderr("Password is required")
      }
      // else if (!/"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"/ .test(password)){
      //   setPassworderr("1 lowercase, 1 uppercase, 1 numeric, 1 special charectar is required and Password must be eight characters or longer")
      // }
      if (!rpassword){
        setrPassworderr("Repeat Password is required")
      }

    if(name && lastname && telephone && address && address2 && city && postcode && email && password && rpassword && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    setName("")
    setLastname("")
    settelephone("")
    setAddress2("")
    setAddress("")
    setCity("")
    setPostcode("")
    setEmail("")
    setPassword("")
    setrPassword("")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    if (error.code.includes("auth/email-already-in-use")){
      setEmailerr("Email already in use")
    }
    // ..
  });
    }

    }

// ======================First Name start===========================
    let changeName =(e)=>{
      setName(e.target.value)
      setNameerror("")
      
    }
    // ======================First Name end===========================
    // ======================Last Name start===========================
    let changeLastname =(e)=>{
      setLastname(e.target.value);
      setLastnameerror("")
    }
    // ======================Last Name end===========================
    // ======================Telephone Start===========================
    let changetel =(e)=>{
      settelephone(e.target.value);
      setTelephoneerr("")
    }
    // ======================Telephone end===========================
    // ======================Address start===========================
    let addresschange =(e)=>{
      setAddress(e.target.value);
      setAddresserr("")
    }
    // ======================Address end===========================
    // ======================Address2 start===========================
    let address2change =(e)=>{
      setAddress2(e.target.value);
      setAddress2err("")
    }
    // ======================Address2 end===========================
    // ======================City Start===========================
    let citychange =(e)=>{
      setCity(e.target.value);
      setCityerr("")
    }
    // ======================City end===========================
    // ======================Postcode start===========================
    let postcodechange =(e)=>{
      setPostcode(e.target.value)
      setPostcodeerr("")
    }
    // ======================Postcode end===========================
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

    let changerpassword=(e)=>{
      setrPassword(e.target.value)
      setrPassworderr("")
    }
   




    let [show10, setShow10]=useState(false)
    let [eye, setEye]=useState(false)
    let [checkbox, setCheckbox]=useState(false)

  return (
    <Container className='pt-32'>
        
        <Breadcrum text='Sign up'/>
        
        <div className='border-b border-[#F0F0F0] pb-[62px]'>
        <p className='max-w-[644px] mt-32 font-DM text-base text-[#767676] leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>
        <div className='main border-b border-[#F0F0F0] pb-[69px]'>
            <h2 className='text-[#262626] text-4xl  font-bold mt-14 mb-[42px]'>Your Personal Details</h2>
            <div className='flex flex-wrap gap-x-10 gap-y-6'>
              
            <InputField value={name} onChange={changeName} label='First Name' type='text' id='Fname' placeholder='First Name*'>
            {
              nameerror && 
              <FromError error= {nameerror}/>
            }
            </InputField>
            <InputField value={lastname} onChange={changeLastname} label='Last Name' type='text' id='Lname' placeholder='Last Name'>
            {
              lastnameerror &&
              <FromError error={lastnameerror}/>
            }
            </InputField>
            <InputField value={email} onChange={emailchange}  label='Email address' type='email' id='email' placeholder='company@domain.com'>
            {
              emailerr &&
              <FromError error={emailerr}/>
            }
            
            </InputField>

            <InputField value={telephone} onChange={changetel} label='Telephone' type='tel' id='tel' placeholder='Your phone number'>
            {
              telephoneerr &&
              <FromError error= {telephoneerr}/>
            }
            </InputField>
            </div>
        </div>

        <div className='main border-b border-[#F0F0F0] pb-[69px]'>
            <h2 className='text-[#262626] text-4xl  font-bold mt-14 mb-[42px]'>New Customer</h2>


            <div className='flex flex-wrap gap-x-10 gap-y-6'>
            <InputField value={address} onChange={addresschange} label='Address 1' type='text' id='address' placeholder='4279 Zboncak Port Suite 6212'>
            {
            addresserr &&
            <FromError error= {addresserr}/>
            }
            </InputField>


            <InputField value={address2} onChange={address2change} label='Address 2' type='text' id='address2' placeholder='—'>
            {
              address2err &&
              <FromError error={address2err}/>
            }
            </InputField>

            <InputField value={city} onChange={citychange} label='City' type='text' id='City' placeholder='Your city'>
            {
              cityerr &&
              <FromError error={cityerr}/>
            }
            </InputField>

            <InputField value={postcode} onChange={postcodechange} label='Post Code' type='number' id='PostCode' placeholder='05228'>
            {
              postcodeerr &&
              <FromError error={postcodeerr}/>
            }
            </InputField>
            
            
            <div  className='w-[507px] flex flex-col border-b border-[#F0F0F0]'>
            <label  className={`text-[#262626] font-bold text-base`} htmlFor=''>Division</label>
            <select className='pt-[33px] pb-4 outline-none' type='text'>
            <option value='Please select'>Please select</option>
            <option value='1234'>1234</option>
            <option value='5678'>5678</option>
            <option value='2546'>2546</option>
            </select>
            </div>

            <div className='w-[507px] flex flex-col border-b border-[#F0F0F0]'>
            <label  className={`text-[#262626] font-bold text-base`} htmlFor=''>District</label>
            <select className='pt-[33px] pb-4 outline-none' type='text'>
            <option value='Please select'>Your city</option>
            <option value='1234'>1234</option>
            <option value='5678'>5678</option>
            <option value='2546'>2546</option>
            </select>
            </div>

            
            
            </div>
        </div>
        <div className='main border-b border-[#F0F0F0] pb-[69px]'>
            <h2 className='text-[#262626] text-4xl  font-bold mt-14 mb-[42px]'>Your Password</h2>
            
            <div className='flex flex-wrap gap-x-10 gap-y-6'>
            

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

            <InputField value={rpassword} onChange={changerpassword}  label='Repeat Password' type='password' id='RPassword' placeholder='Repeat Password'>
            {
              rpassworderr &&
              <FromError error= {rpassworderr}/>
              
            }
            </InputField>
            
            </div>
          
        </div>

        <div className='flex items-center gap-x-4 pt-[65px]'>
          <input type='checkbox'/>
          <p>I have read and agree to the Privacy Policy</p>
        </div>

        <div className='flex items-center gap-x-4 pt-[23px] pb-7'>
          <p>Subscribe Newsletter</p>
          <div onClick={()=> setCheckbox(!checkbox)}>
          <label htmlFor='yes'className='flex items-center gap-x-4'> 
          <img className={checkbox?"hidden":"block"}  src={yes} alt=''/> 
          <img className={checkbox?"block":"hidden"} src={no} alt=''/>
          
          Yes</label>
          </div>


          <label htmlFor='no'className='flex items-center gap-x-4'> 
          <img src={yes} alt=''/> 
          <img className='hidden' src={no} alt=''/>
          
          No</label>
          </div>

          <Botton onClick={submit} className='w-[200px] mb-9' text='Log in'/>
    </Container>
  );
}
export default SignUp;
