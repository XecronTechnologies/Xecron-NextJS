"use client"
import React from "react";
import Head from "next/head";
import GradientButton from "@/components/common/LogoColorButton"
import { useAppSelector } from "@/redux/hooks";

export default function ServicePage() {
  const { services } = useAppSelector((state) => state.services)
  return (
    <div className="bg-gray-50 py-30 font-['Calibri'] text-lg px-4">
      <Head>
        <title>Our Services - Web & Mobile App Development</title>
        <meta name="description" content="Professional web and mobile app development services for small businesses. We create SEO-friendly web applications and React Native Mobile apps." />
        <meta name="keywords" content="web development, mobile app development, small business, React, React Native, SEO." />
      </Head>

      <div className="px-4">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center text-center mb-16">
            <h1 className="text-3xl sm:text-5xl">
              Our&nbsp;
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
                Services
              </span>
            </h1>
            <h3 className="text-lg mt-2">
              Tailored solutions for small business to establish and grow their online presence.
            </h3>
          </div>

          {/* Types of Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.id} 
              className={`bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 ${index % 2 === 0 ? 'bg-gradient-to-r from-blue-50 to-pink-50' : 'bg-gradient-to-r from-pink-50 to-blue-50'}`}>
              
                <div className="flex items-start">
                  <span className="text-5xl mr-6">{service.icon}</span>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h2>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <div className="mt-4">
                      <h3 className="text-xl font-medium text-gray-900 mb-2">Key Features:</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        {service.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                <GradientButton text="Get Started" href={service.redirect} py="py-4"/>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-r from-blue-50 to-pink-50 p-8 rounded-lg border border-gray-200">
            <h2 className="text-3xl text-center font-bold text-gray-900 mb-8">
              Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">Us</span>?
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Solutions</h3>
                <p className="text-gray-600">We understand small business budgets and deliver high-value solutions at competitive prices.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
                <p className="text-gray-600">Quick turnaround times to get your business online and visible to customers faster.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
                <p className="text-gray-600">We provide maintenance and support to ensure your digital presence stays current.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-16">
            <a href="/contact" className="py-3 px-8 mx-2 rounded-md text-white font-bold bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 transition duration-300">
              Get Started Today
            </a>
            <a href="/portfolio" className="py-3 px-8 mx-2 border border-gray-400 rounded-md text-gray-700 font-semibold hover:bg-gray-100 transition duration-300">
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}