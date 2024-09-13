import React from 'react'
import { Link } from 'react-router-dom'

const Course = (props) => {

  const {id, title, description, image_path, old_price, new_price, badge, category} = props.course

  const shortDescription = (num, description) =>{
    if(description.length > num){
        return description.substring(0, num) + "..."
    }
    return description
  }

  return (
    <div id='course'>
      <div className="card shadow-lg py-5 px-4">
        <div className="course_img">
            <Link to={`/courses/${id}`}>
                <img className='w-full' src={image_path} alt={title} />
            </Link>
        </div>
        <div className="course_info">
            <h2 className='text-xl font-bold mt-3 mb-2'>{title}</h2>
            <p>{shortDescription(100, description)}</p>
            <div className="review_and_rating flex items-center gap-4 my-2">
                <h3 className="text-md font-bold">{props.rating}</h3>
                <ul className='flex items-center gap-2 text-yellow-600'>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-solid fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                </ul>
                <p>({props.review})</p>
            </div>
            <div className="prices flex items-center gap-3">
                <h3 className='text-md font-bold'>${new_price}</h3>
                <del>
                    <h3 className='text-md'>${old_price}</h3>
                </del>
            </div>
            
            <div className="badge_and_category flex justify-between mt-2">
              <div className="badge py-2 px-3 bg-yellow-500 font-bold rounded-sm">
                  {badge}
              </div>
              <div className="category py-2 px-3 bg-blue-500 text-white font-bold rounded-sm">
                  {category}
              </div>
            </div>
            
        </div>
        <div className="add_to_cart">
            <button className='btn btn-lg bg-purple-500 text-white font-bold text-lg w-full py-3 rounded-sm mt-5 hover:bg-purple-600'>Add To Cart</button>
        </div>

      </div>
    </div>
  )
}

export default Course
