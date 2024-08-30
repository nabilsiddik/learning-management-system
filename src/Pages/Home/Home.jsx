import React, { useContext, useEffect, useState } from 'react'
import DisplayCourses from '../../Components/DisplayCourses/DisplayCourses'
import { auth, db } from '../../Components/firebase'
import {setDoc, getDoc, doc} from 'firebase/firestore'
import Login from '../../Components/Login/Login'

const Home = () => {

  const [userDetails, setUserDetails] = useState(null)

  const fatchingUserData = async() => {
    auth.onAuthStateChanged(async(user) => {
      console.log(user)
      const docRef = doc(db, "Users", user.uid)
      const docSnap = await getDoc(docRef)
      if(docSnap.exists()){
        setUserDetails(docSnap.data())
        console.log(docSnap.data())
      }else{
        console.log("User is not logged in.")
      }
    })
  }

  useEffect(()=>{
    fatchingUserData()
  }, [])

  return (
    <div id='home_page' className='my-10'>
      {userDetails ? <DisplayCourses/> : <Login/>}
    </div>
  )
}

export default Home
