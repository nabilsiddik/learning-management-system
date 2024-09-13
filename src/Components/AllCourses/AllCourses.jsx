import React from 'react'
import InstructorCourseList from '../InstructorCourseList/InstructorCourseList'

const AllCourses = () => {
  return (
    <div id='all_courses' className='py-10 min-h-[60vh]'>
      <div className="container mx-auto">
        <h1 className='text-5xl text-center'>All Courses</h1>

        <div className="course_lists">
          <div className="container mx-auto">
           <InstructorCourseList/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllCourses
