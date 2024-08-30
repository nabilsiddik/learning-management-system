import React, { createContext, useEffect, useState } from 'react'
import { auth, db } from '../../Components/firebase'
import {getDoc, doc} from 'firebase/firestore'

const UserContext = createContext()

const UserContextProvider = (props) => {

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

    const handleLogout = async() => {
        try{
            await auth.signOut()
            window.location.href = "/login"
            console.log("Logout Successfull")
        }catch(error){
            console.log(error.message)
        }
    }

    useEffect(()=>{
        fatchingUserData()
    }, [])

    const userContextValue = {
        userDetails,
        handleLogout
    }

  return (
    <UserContext.Provider value={userContextValue}>
      {props.children}
    </UserContext.Provider>
  )
}

export {UserContext, UserContextProvider}
