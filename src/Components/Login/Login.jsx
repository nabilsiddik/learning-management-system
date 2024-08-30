import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div id='login' className='my-10'>
      <div className="container mx-auto">
        <h1 className='text-5xl text-center'>Login</h1>

        <div className="login_form mt-10 shadow-2xl max-w-[60%] mx-auto py-10 rounded-md">
          <form className='flex flex-col gap-5 w-[80%] mx-auto'>
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

            <input type="submit" value='Login' className='btn btn-lg bg-purple-600 text-white font-bold py-3 rounded-md' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
