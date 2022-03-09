import React from 'react'
import logo from '../assets/logo.png'
import {Link, useNavigate} from "react-router-dom"
import Brand from './Brand'
import { useState } from 'react'
import axios from 'axios'

function Signup() {
  const [isSubmitted, setIssubmitted] = useState(false);
  const [values, setValues] =  useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function registerUser(event) {
    event.preventDefault();
    setIssubmitted(true);
    try{
      const url = "http://localhost:5000/api/users/register";
      const {data:res} = await axios.post(url, values);
      navigate("/login");
      console.log(res.message)
    } catch(err) {
       console.log(err)
    }
   }

  const handleNameChange = (event) => {
    setValues({...values, name: event.target.value})
  }

  const handleEmailChange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handlePasswordChange = (event) => {
    setValues({...values, password: event.target.value})
  }

  return (
    <div>
      <Brand/>
        <form onSubmit={registerUser}>
          <img style={{marginLeft:"-45px"}} width="120px" height="120px" src={logo} alt="" />
          <div className="form mt-0">
            <h1>Sign up</h1>
            <p className='login-desc'>Get feedback about anything by attending/creating online surveys!</p>
          </div>
            <button className='gg-btn log-btn flex' >
              <img src="https://img.icons8.com/color/28/000000/google-logo.png"/>
             <b className='ml-10' >Sign up with Google</b> 
            </button>
            <div className='flex'>
              <div className="hr"></div>
              <span className='or'>or Sign up with Email</span>
              <div className='hr'></div>
            </div>
            <div className='mt-20 bold fs-14'>Name*</div>
            <input placeholder='Name' value={values.name} onChange={handleNameChange} name="name"
            className='mt-10' type="name"
            />
           {isSubmitted && !values.name && <div style={{color: "red", fontSize: 12, padding: "5px"}}>Please enter name</div>}
            <div className='mt-20 bold fs-14'>Email*</div>
            <input placeholder='example@mail.com' value={values.email} onChange={handleEmailChange} name="email"
            className='mt-10' type="text"/>
            {isSubmitted && !values.email && <div style={{color: "red", fontSize: 12, padding: "5px"}}>Please enter email</div>} 
            {isSubmitted && values.email && !values.email.includes("@") &&  <div style={{color: "red", fontSize: 12, padding: "5px"}}>Please enter valid email</div> }           
            <div className='bold fs-14 mt-20'>Password*</div>
            <input name='password' placeholder='Min. 8 characters' onChange={handlePasswordChange}
            className='mt-10' type="password" />
             {isSubmitted && !values.password && <div style={{color: "red", fontSize: 12, padding: "5px"}} >Please enter Password</div>}
             {isSubmitted && values.password && values.password.length < 8 && <div style={{color: "red", fontSize: 12, padding: "5px"}}>Please enter 8 character</div>}
            <div>
            <button onClick={(e)=>registerUser(e)} className='mt-30 login'>Sign Up</button>
            <div className="create-ac mt-20">
            <span className='bold mb-10 '>Already have an account?</span>
            <Link to="/login" >
              <a className='bold' href="">Login your Account</a>
            </Link>
          </div>
        </div>
        </form>
      </div>
  )
}

export default Signup