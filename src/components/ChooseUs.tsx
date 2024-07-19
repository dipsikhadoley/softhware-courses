
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const content = [
  {
    title: "Discover your intrest in Software Engineering",
    description:   "Build robust and scalable software solutions tailored to your business needs. Our team of expert engineers leverages the latest technologies and best practices to deliver high-quality software. Whether it's developing new applications, maintaining existing systems, or integrating third-party services, we ensure seamless performance and reliability.",
     
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Data Structures and Algorithms",
    description:
      "Master the foundational concepts of computer science with our comprehensive resources on data structures and algorithms. From basic arrays to complex graph algorithms, learn how to efficiently solve problems and optimize your code.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--pink-500))] flex items-center justify-center text-white">
        Data Structures and Algorithms
      </div>
    ),
  },
  {
    title: "Web Development",
    description:
      "Build dynamic and responsive websites with our state-of-the-art web development tools and frameworks. Whether you're creating a personal blog or a complex e-commerce site, our platform provides everything you need to bring your ideas to life.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] flex items-center justify-center text-white">
        Web Development
      </div>
    ),
  },
  {
    title: "DevOps",
    description:
      "Automate your development and deployment processes with our robust DevOps tools. Improve collaboration between development and operations teams, streamline your workflow, and achieve faster delivery of high-quality software.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] flex items-center justify-center text-white">
        DevOps
      </div>
    ),
  },
  {
    title: "Machine Learning",
    description:
      "Unlock the power of artificial intelligence with our advanced machine learning resources. Learn how to build and train models, analyze data, and apply machine learning techniques to solve real-world problems and drive innovation.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
        Machine Learning
      </div>
    ),
  },
];


const ChooseUs = () => {
  return (
  
  <div className="p-10">
      <StickyScroll content={content} />
    </div>
    
  )
}

export default ChooseUs