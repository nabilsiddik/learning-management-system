import React, { useState } from 'react'
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {setDoc, doc} from 'firebase/firestore'
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS


const Signup = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async (e) =>{
    e.preventDefault()
    try{
      await createUserWithEmailAndPassword(auth, email, password)
      const user = auth.currentUser
      if(user){
        await setDoc(doc(db,"Users", user.uid),{
          email: user.email,
          firstName: firstName,
          lastName: lastName,
        })
      }
      toast.success("Registration Successful!", {
        position: "top-center"
      });
    }catch(error){
      toast.error(error.message, {
        position: "top-center"
      });
    }

  }

  return (
    <div id='register' className='my-10'>
      <div className="container mx-auto">
        <h1 className='text-5xl text-center'>Register</h1>

        <div className="login_form mt-10 shadow-2xl max-w-[60%] mx-auto py-10 rounded-md">
          <form onSubmit={handleRegister} className='flex flex-col gap-5 w-[80%] mx-auto'>
          <input type="text"
              placeholder='First Name'
              value={firstName}
              onChange={(e)=>{setFirstName(e.target.value)}}
              className='border rounded-md py-4 px-5 focus:outline-none'
            />

            <input type="text"
              placeholder='Last Name'
              value={lastName}
              onChange={(e)=>{setLastName(e.target.value)}}
              className='border rounded-md py-4 px-5 focus:outline-none'
            />

            <input type="email"
              placeholder='Email'
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              className='border rounded-md py-4 px-5 focus:outline-none'
            />
            <input type="password"
              placeholder='Password'
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              className='border rounded-md py-4 px-5 focus:outline-none'
            />

            <input type="submit" value='Register' className='btn btn-lg bg-purple-600 text-white font-bold py-3 rounded-md' />
          </form>
        </div>
      </div>

      <ToastContainer/>
    </div>
  )
}

export default Signup
