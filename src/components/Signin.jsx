import React from 'react'
import logo from '../assets/logo.png'
import {Link, useNavigate} from "react-router-dom"
import Brand from './Brand'
import { useState } from 'react'
import axios from 'axios'

function Signin() {
  const [isSubmitted, setIssubmitted] = useState(false);
  const [values, setValues] =  useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setIssubmitted(true);
    try{
      const url = "http://localhost:5000/api/users/authenticate";
      const {data:res} = await axios.post(url, values);
      localStorage.setItem("token", res.data);
      navigate("/login");
      console.log(res.message)
    } catch(err) {
       console.log(err)
    }
   }

  const handleEmailChange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handlePasswordChange = (event) => {
    setValues({...values, password: event.target.value})
  }

  return (
    <div >
      <Brand/>
        <form onSubmit={handleSubmit}>
          <img style={{marginLeft:"-45px"}} width="120px" height="120px" src={logo} alt="" />
          <div className="form mt-0">
            <h1>Sign in</h1>
            <p className='login-desc'>Get feedback about anything by attending/creating online surveys!</p>
          </div>
            <button className='gg-btn log-btn flex' >
              <img src="https://img.icons8.com/color/28/000000/google-logo.png"/>
             <b className='ml-10' >Sign in with Google</b> 
            </button>
            <div className='flex'>
              <div className="hr"></div>
              <span className='or' >or Sign in with Email</span>
              <div className='hr'></div>
            </div>
            <div className='mt-20 bold fs-14'>Email*</div>
            <input placeholder='' value={values.email} onChange={handleEmailChange} name="email"
            className='mt-10' type="text"/>
            {isSubmitted && !values.email && <div style={{color: "red", fontSize: 12, padding: "5px"}}>Please enter email</div>} 
            {isSubmitted && values.email && !values.email.includes("@") &&  <div style={{color: "red", fontSize: 12, padding: "5px"}}>Please enter valid email</div> }
            <div className='bold fs-14 mt-20'>Password*</div>
            <input name='password' onChange={handlePasswordChange} className='mt-10' type="password" />
            {isSubmitted && !values.password && <div style={{color: "red", fontSize: 12, padding: "5px"}} >Please enter Password</div>}
             {isSubmitted && values.password && values.password.length < 8 && <div style={{color: "red", fontSize: 12, padding: "5px"}}>
            Please enter 8 character</div>}
            <div className="">
            <button className='mt-30 login'>Sign in</button>
            <div className="create-ac mt-20">
              <span className='bold' >Not registered yet?</span>
            <Link to="/signup" >
              <a className='bold' href="">Sign up</a>
            </Link>
            </div>
        </div>
        </form>
      </div>
  )
}

export default Signin