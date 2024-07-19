"use client";
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
import  Link  from 'next/link';
 const webinars = [
    {
      title: "Understanding the basic of web development",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      slug: "understanding-music-theory",
      isFeatured:true,
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        slug: "understanding-music-theory",
        isFeatured:true,
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
        slug: "understanding-music-theory",
        isFeatured:true,
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        slug: "understanding-music-theory",
        isFeatured:true,
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        slug: "understanding-music-theory",
        isFeatured:true,
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        slug: "understanding-music-theory",
        isFeatured:true,
    },
  ];
const UpcomingWeb = () => {
  return (
    <div className='p-12 bg-gray-950'>
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className='text-center'>
        <h2 className='text-base font-semibold text-center text-blue-600 tracking-wide uppercase'>
        FEATURED WEBINARS</h2>
        <p className='text-3xl font-extrabold text-white leading-8 mt-2 tracking-tight sm:text-4xl '>Enhance Your Musical Journey</p>
        </div>
        <div className='mt-10'>
        <HoverEffect items={webinars.map(webinar =>({
          title:webinar.title,
          description:webinar.description,
          link:'/'
        }))} />
        </div>
        <div className='mt-10 text-center'>
         <Link href={"/"} className='mt-6 inline-block bg-indigo-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200'>
         View All Webinars
         </Link>
        </div>
   
  </div>
  </div>
  )
}

export default UpcomingWeb