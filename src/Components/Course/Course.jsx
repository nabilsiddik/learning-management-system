import React from 'react'
import { Link } from 'react-router-dom'

const Course = (props) => {

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
            <Link to={`/courses/${props.id}`}>
                <img className='w-full' src={props.image_url} alt={props.title} />
            </Link>
        </div>
        <div className="course_info">
            <h2 className='text-xl font-bold mt-3 mb-2'>{props.title}</h2>
            <p>{shortDescription(100, props.description)}</p>
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
                <h3 className='text-md font-bold'>${props.newPrice}</h3>
                <del>
                    <h3 className='text-md'>${props.oldPrice}</h3>
                </del>
            </div>
            <div className="badge py-2 px-3 bg-yellow-200 font-bold rounded-sm inline-block mt-2">
                {props.badge}
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
