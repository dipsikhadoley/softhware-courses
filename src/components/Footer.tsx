import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-gray-400 py-12'>
    <div className='max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
      <div>
        <h2 className='text-white text-lg font-semibold mb-4'>About Us</h2>
        <p>We are a dynamic and innovative software engineering firm dedicated to delivering high-quality software solutions to meet the diverse needs of our clients. Our team consists of experienced professionals who are passionate about technology and committed to excellence.</p>
      </div>
      <div>
        <h2 className='text-white text-lg font-semibold mb-4'>Quick Links</h2>
        <ul>
          <li><a href="#" className='hover:text-white transition-colors duration-300 block mb-2'>Home</a></li>
          <li><a href="#" className='hover:text-white transition-colors duration-300 block mb-2'>About Us</a></li>
          <li><a href="#" className='hover:text-white transition-colors duration-300 block mb-2'>Our Courses</a></li>
          <li><a href="#" className='hover:text-white transition-colors duration-300 block mb-2'>Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h2 className='text-white text-lg font-semibold mb-4'>Contact Us</h2>
        <ul>
          <li className='mb-2'>New Delhi 110001</li>
          <li className='mb-2'>Uttar Pradesh 22002</li>
          <li className='mb-2'>Assam 787032</li>
          <li className='mb-2'>Bengal 56098</li>
        </ul>
      </div>
      <div>
        <h2 className='text-white text-lg font-semibold mb-4'>Follow Us</h2>
        <ul>
          <li><a href="#" className='hover:text-white transition-colors duration-300 block mb-2'>Facebook</a></li>
          <li><a href="#" className='hover:text-white transition-colors duration-300 block mb-2'>Twitter</a></li>
          <li><a href="#" className='hover:text-white transition-colors duration-300 block mb-2'>LinkedIn</a></li>
          <li><a href="#" className='hover:text-white transition-colors duration-300 block mb-2'>Instagram</a></li>
        </ul>
      </div>
    </div>
    <div  >
    <p className='text-center text-xs pt-8 justify-center flex items-center'>@ 2024 Softhware Engineering Web. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer