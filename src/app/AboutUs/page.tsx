"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from 'react';

const words = `Welcome to our Software Engineering hub, where innovation meets precision. Our team of dedicated professionals is committed to delivering top-notch software solutions tailored to meet the unique needs of our clients. With a deep understanding of modern technologies and industry best practices, we excel in creating robust, scalable, and secure applications. Our expertise spans across various domains, including web development, mobile applications, cloud computing, and AI-driven solutions. We prioritize collaboration, continuous learning, and customer satisfaction, ensuring that every project we undertake not only meets but exceeds expectations. Join us on a journey of technological excellence and discover how we can transform your ideas into reality.`;

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 py-12 pt-36 flex items-center justify-center">
      <div className="w-full max-w-2xl px-10 py-12 bg-gray-900 rounded-3xl shadow-2xl transform transition-transform hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8">
          About Us
        </h1>
        <div className="text-white text-lg leading-relaxed">
          <TextGenerateEffect words={words} />
        </div>
      </div>
    </div>
  );
};

export default page;

