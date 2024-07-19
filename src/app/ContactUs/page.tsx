'use client'
import React from "react";
import { Meteors } from "@/components/ui/meteors";

const Page = () => {
  const message = "We're here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your software journey. ";
    return (
      <div className='min-h-screen bg-black py-12 pt-36 flex items-center justify-center'>
        <div className='w-full max-w-lg px-8 py-8 bg-gray-800 rounded-lg shadow-lg'>
        <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            Contact Us
          </h1>
          <p className="text-gray-400 mb-6 text-center">
          {message}
          </p>
          <form action="" className='space-y-6'>
            <div>
              <input 
                type="text" 
                name='name' 
                placeholder='Enter your name' 
                className='w-full px-4 py-2 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500' 
              />
            </div>
            <div>
              <input 
                type="email" 
                name='email' 
                placeholder='Enter your email' 
                className='w-full px-4 py-2 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500' 
              />
            </div>
            <div>
              <textarea 
                name="message" 
                 
                placeholder='Enter your message' 
                className='w-full px-4 py-2 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500' 
              ></textarea>
            </div>
            <div className='text-center'>
              <button 
                type='submit' 
                className='px-6 py-2 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600 transition duration-300'
              >
                Send Message
              </button>
              <Meteors number={30} />
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default Page;