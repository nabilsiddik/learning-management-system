import React from 'react'
import InstructorCourse from '../InstructorCourse/InstructorCourse'
import { useContext } from 'react';
import { CourseContext } from '../../Context/CourseContext/CourseContext';

const InstructorCourseList = () => {

    const {allCourses} = useContext(CourseContext)

  return (
    <div id='instructor_course_list'>
        {allCourses.map((course) => {
            return <InstructorCourse key={course.id} course={course}/>
        })}
    </div>
  )
}

export default InstructorCourseList
