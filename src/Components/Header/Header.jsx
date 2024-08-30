import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/mortarboard.png'
import { UserContext } from '../../Context/UserContext/UserContext'

const Header = () => {

    const {userDetails, handleLogout} = useContext(UserContext)

  return (
    <div id='header'>
      <div className="header-top  py-4 border-b border-solid border-gray">
            <div className="container mx-auto flex items-center justify-between px-4 lg:px-0">
                <div className="logo flex items-center gap-3">
                    <img className='w-16' src={logo} alt="LMS Logo" />
                    <h2 className='text-4xl font-bold'>LMS</h2>
                </div>

                <div className="search">
                    <input className='border border-gray w-full block py-3 px-5 rounded-full' type="search" placeholder='Search...' />
                </div>

                <div className="ecommerce-icons">
                    <ul className='flex items-center gap-5 text-white'>
                        <li className={userDetails ? 'text-black font-bold flex items-center gap-1' : 'text-black font-bold flex items-center gap-1  hidden'}>
                            <span className='text-xl h-8 w-8 block bg-white rounded-full flex items-center justify-center text-black'>
                                <i className="fa-solid fa-user"></i>
                            </span>
                            <span>
                                Welcome, {userDetails && userDetails.firstName} {userDetails && userDetails.lastName}
                            </span>
                        </li>
                        <li><Link>
                            <span className='text-xl h-8 w-8 block bg-white rounded-full flex items-center justify-center text-black'>
                                <i className="fa-solid fa-heart"></i>
                            </span>
                        </Link></li>

                        <li><Link>
                            <span className='text-xl h-8 w-8 block bg-white rounded-full flex items-center justify-center text-black'>
                            <i className="fa-solid fa-cart-shopping"></i>
                            </span>
                        </Link></li>

                        <li><Link>
                            <span className='text-xl h-8 w-8 block bg-white rounded-full flex items-center justify-center text-black'>
                            <i className="fa-solid fa-bell"></i>
                            </span>
                        </Link></li>

                        <li className='text-black font-bold'>
                            <button onClick={handleLogout} className={!userDetails ? 'btn bg-purple-600 py-2 px-3 rounded-sm text-white hidden' : 'btn bg-purple-600 py-2 px-3 rounded-sm text-white'}>
                                {userDetails && 'Logout'}
                            </button>

                            <Link to='login'>
                                <button className={userDetails ? 'btn bg-purple-600 py-2 px-3 rounded-sm text-white hidden' : 'btn bg-purple-600 py-2 px-3 rounded-sm text-white'}>
                                    {!userDetails && 'Login'}
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="header-bottom py-5 shadow-md">
            <div className="container mx-auto  flex justify-center">
                <nav>
                    <ul className='flex items-center gap-10'>
                        <li><Link>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Courses</Link></li>
                        <li><Link>Categories</Link></li>
                        <li><Link>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Header
