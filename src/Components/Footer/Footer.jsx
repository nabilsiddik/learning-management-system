import React from 'react'
import logo from '../../assets/images/mortarboard.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id='footer' className='py-10 bg-dark text-white'>
      <div className="container mx-auto grid grid-cols-3 px-4 lg:px-0">
        <div className="widget-1 col-span-full lg:col-span-1 mb-10 lg:mb-0">
            <div className="logo flex items-center gap-3">
                <img className='w-16' src={logo} alt="LMS Logo" />
                <h2 className='text-4xl font-bold'>LMS</h2>
            </div>  
            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore accusantium consectetur, voluptas doloremque maiores alias aperiam atque? Assumenda doloribus tenetur, illum nulla tempora cupiditate sint ducimus inventore odio eos ex?</p>  
        </div> 

        <div className="lg:flex justify-center widget-2 col-span-full lg:col-span-1 mb-10 lg:mb-0">
            <div>
                <h3 className='text-2xl lg:text-3xl mb-5 font-bold'>Important Links</h3>
                <nav>
                    <ul className='flex flex-col gap-4'>
                        <li><Link>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Courses</Link></li>
                        <li><Link>Categories</Link></li>
                        <li><Link>Contact</Link></li>
                    </ul>
                </nav>  
            </div>
        </div>

        <div className="lg:flex justify-end col-span-full lg:col-span-1 widget-3">
            <div>
                <h3 className='text-2xl lg:text-3xl mb-5 font-bold'>Important Links</h3>
                <nav>
                    <ul className='flex flex-col gap-4'>
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
    </footer>
  )
}

export default Footer
