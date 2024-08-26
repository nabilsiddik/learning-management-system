import React, { createContext, useState } from 'react'
import { allCourses } from '../../Data/AllCourses'

const CourseContext = createContext()

const CourseContextProvider = ({children}) => {

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
