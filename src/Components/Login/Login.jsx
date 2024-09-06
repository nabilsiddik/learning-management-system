import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import { auth } from '../firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext/UserContext';
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {userDetails} = useContext(UserContext)

  const handleSubmit = async (e) => {
      e.preventDefault()
      try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // Fetch the user's role
        const firestore = getFirestore();
        const userDoc = await getDoc(doc(firestore, 'users', user.uid));
        if(userDoc.exists()){
          const userData = userDoc.data();

          if (userData && userData.role === 'instructor') {
            window.location.assign('/instructor'); // Use assign to ensure navigation
          } else {
            window.location.assign('/'); // Use assign to ensure navigation
          }
        }else{
          toast.error('User data not found. Please contact support.', {
            position: "top-center"
          });
        }
      }catch(error){
        toast.error(error.message, {
          position: "top-center"
        });
      }
  }


  return (
    <div id='login' className='my-10'>
      <div className="container mx-auto">
        <h1 className='text-5xl text-center'>{userDetails ? "Logout" : "Login"}</h1>

        <div className={userDetails ? 'login_form mt-10 shadow-2xl md:max-w-[60%] lg:max-w-[40%] max-w-[80%] mx-auto py-10 rounded-md hidden' : 'login_form mt-10 shadow-2xl md:max-w-[60%] lg:max-w-[40%] max-w-[80%] mx-auto py-10 rounded-md'}>
          <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-[80%] mx-auto'>
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
            
            <p>Don't have an account? <Link to='/register' className='underline text-blue-700'>Register Now</Link></p>
          </form>
        </div>
      </div>

      <ToastContainer/>
    </div>
  )
}

export default Login
