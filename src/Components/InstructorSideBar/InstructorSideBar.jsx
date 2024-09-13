import React from 'react'
import { Link } from 'react-router-dom'

const InstructorSideBar = () => {
  return (
    <div id='instructor_side_bar'>
      <nav>
        <ul>
            <Link to='add-course'>
                <li className='text-white text-lg mb-2 bg-purple-700 px-3 py-3 rounded-md cursor-pointer'>
                    Add Course
                </li>
            </Link>
            <Link to='all-courses'>
                <li className='text-white text-lg mb-2 bg-purple-800 px-3 py-3 rounded-md cursor-pointer'>
                    All Courses
                </li>
            </Link>
            
        </ul>
      </nav>
    </div>
  )
}

export default InstructorSideBar
