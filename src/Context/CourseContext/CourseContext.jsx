import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const CourseContext = createContext()

const CourseContextProvider = ({children}) => {

  const [allCourses, setAllCourses] = useState([])

  const loadCourses = async() =>{
    const result = await axios.get("http://localhost:8080/courses")
    const courses = result.data
    setAllCourses(courses)
  }

  useEffect(()=>{
    loadCourses()
  },[])

    const contextValue = {
        allCourses,
    }

  return (
    <CourseContext.Provider value={contextValue}>
      {children}
    </CourseContext.Provider>
  )
}

export {CourseContext, CourseContextProvider}
