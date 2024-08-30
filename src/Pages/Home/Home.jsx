import React, { useContext } from 'react'
import DisplayCourses from '../../Components/DisplayCourses/DisplayCourses'
import Login from '../../Components/Login/Login'
import { UserContext } from '../../Context/UserContext/UserContext'


const Home = () => {

  const {userDetails} = useContext(UserContext)

  return (
    <div id='home_page' className='my-10'>
      {userDetails ? <DisplayCourses/> : <Login/>}
    </div>
  )
}

export default Home
