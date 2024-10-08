import React, { useContext } from 'react'
import { CourseContext } from '../../Context/CourseContext/CourseContext';
import Course from '../Course/Course';

const DisplayCourses = () => {

const {allCourses} = useContext(CourseContext)

  return (
    <div id='display_courses'>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {allCourses && allCourses.map(course => {
            const {id, title, description, image_path, rating, review, old_price, new_price, badge} = course
            return <Course key={course.id} course={course}/>
        })}
      </div>
    </div>
  )
}

export default DisplayCourses
