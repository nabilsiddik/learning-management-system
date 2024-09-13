import axios from 'axios'
import React, { useState } from 'react'
import InstructorSideBar from '../../Components/InstructorSideBar/instructorSideBar'
import AddCourse from '../../Components/AddCourse/AddCourse'
import { Route, Routes } from 'react-router-dom'
import AllCourses from '../../Components/AllCourses/AllCourses'


const Instructor = () => {

  return (
    <div id='instructor_dashboard' className=' flex'>
      <div className="instructor_sidebar bg-purple-600 w-[30%] lg:w-[20%] px-5 py-5">
        <InstructorSideBar/>
      </div>

      <div className="container mx-auto">
        <Routes>
          <Route path='/add-course' element={<AddCourse/>}/>
          <Route path='/all-courses' element={<AllCourses/>}/>
          <Route path='/' element={<AddCourse/>}/>
        </Routes>
      </div>
      
    </div>
  )
}

export default Instructor
