import React from 'react'
import InstructorCourseList from '../InstructorCourseList/InstructorCourseList'

const AllCourses = () => {
  return (
    <div id='all_courses' className='py-10 min-h-[60vh]'>
      <div className="container mx-auto">
        <h1 className='text-5xl text-center mb-5'>All Courses</h1>

        <div className="course_lists max-h-[70vh] overflow-auto">
          <div className="container mx-auto">
           <InstructorCourseList/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllCourses
