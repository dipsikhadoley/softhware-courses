"use client";
import React from 'react'
import courseData from "../data/{ } software_courses.json"
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";


interface Course{
            id:number,
            title:string,
            slug:string,
            description:string,
            price: number,
            instructor:string,
            isFeatured:boolean,
            //  image:image,
}



const FeaturedCoures = () => {
 const featuredCoures = courseData.courses.filter((course:Course) =>course.isFeatured)
  return (
    <div className='py-12 bg-gray-900'>
    <div>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center text-indigo-600 mb-4'>Features Courses
        </h1>
        <p className='text-lg md:text-xl lg:text-2xl font-medium text-center text-gray-500 mt-2'>Learn With the Best</p>
        </div>
    <div className='mt-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
        {featuredCoures.map((course:Course)=>(
        <div key={course.id} className='flex justify-center'>
           <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
      <p className='text-lg sm:text-xl text-black mt-4 md-2 dark:text-neutral-200'>{course.title}</p>
      <p className=' text-sm sm:text-xl text-neutral-600  mt-2  dark:text-neutral-400 flex-grow'>{course.description}</p>
      <Link href={`/courses/${course.slug}`}>
      Learn More
      </Link>
      </div>
      
      </BackgroundGradient>
        </div>
        ))}
      </div>
    </div>
    <div className='mt-20 text-center'>
        <Link href={"/courses"} className='mt-6 inline-block bg-indigo-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200'>
        View All Courses
        </Link>
    </div>
  </div>
  
  )
}

export default FeaturedCoures