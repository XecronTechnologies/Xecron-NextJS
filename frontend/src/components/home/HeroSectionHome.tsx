// src/app/page.tsx
"use client"
import { useState } from "react";
import GradientButton from "../common/LogoColorButton";
import Image from 'next/image';

const smallBusinessBenefits = [
  "Affordable starter websites or web applications starting from ₹499",
  "Basic mobile apps for local businesses",
  "Monthly maintenance plans",
  "Free initial consultation",
];

const enterpriseBenefits = [
  "Custom software development",
  "AI and machine learning solutions",
  "Enterprise cloud architecture",
  "Dedicated development teams",
];

const technologies = [
  { name: "Web Development", icon: "💻" },
  { name: "Mobile Apps", icon: "📱" },
  { name: "Cloud Solutions", icon: "☁️" },
  { name: "UI/UX Design", icon: "🎨" },
  { name: "AI & ML", icon: "🤖" },
  { name: "Data Analytics", icon: "📊" },
];

const testimonials = [
  {
    quote: "Xecron transformed our small retail business with an affordable e-commerce solution that doubled our online sales in just 3 months.",
    author: "Rajesh Sharma",
    company: "Urban Fashion Hub",
  },
  {
    quote: "Their enterprise solutions helped us streamline operations across 5 locations with a custom inventory management system.",
    author: "Priya Mehta",
    company: "Global Logistics Inc.",
  },
  {
    quote: "As a startup, their flexible payment plans and dedicated support made professional web development accessible to us.",
    author: "Arjun Patel",
    company: "FinTech Innovations",
  },
];

const CheckIcon = () => (
  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const HeroSectionHome = () => {
  const [activeTab, setActiveTab] = useState<"smallbiz" | "enterprise">("smallbiz");

  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="px-4 py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-4 py-1 mb-6 shadow-sm border border-gray-200">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">INNOVATING THE FUTURE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            Welcome To <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">Xecron Technologies</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Cutting-Edge Digital Solutions for Businesses of All Sizes
          </p>
          
          {/* Important Note */}
          <div className="mt-6 max-w-2xl mx-auto p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <p className="text-blue-800 font-medium">
              <span className="font-bold">Important:</span> We specialize in affordable, scalable solutions tailored for small-scale businesses and startups.
            </p>
          </div>
          
          <div className="mt-10 flex justify-center space-x-4">
            <GradientButton 
              href="/contact" 
              text="Get Started Today" 
              className="from-blue-600 to-indigo-600 py-3 px-6 text-lg"
            />
            <a 
              href="/services" 
              className="py-3 px-6 border-2 border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition duration-300"
            >
              Explore Services
            </a>
          </div>
          
          {/* Hero Images */}
          <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 w-full md:w-1/2 lg:w-1/3">
              <Image
                src="https://qkkdkbnsgruubnzdplrx.supabase.co/storage/v1/object/public/xecron-technologies//xecron-app-looks-interface.webp" 
                alt="Small Business Growth" 
                className="w-full h-64 object-cover"
 width={600}
 height={400}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
 <p className="text-white font-semibold">Solutions for Small Businesses&apos;</p>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 w-full md:w-1/2 lg:w-1/3">
              <Image
                src="https://qkkdkbnsgruubnzdplrx.supabase.co/storage/v1/object/public/xecron-technologies//xecron-app-looks-interface.webp" 
                alt="App Interface" 
 className="w-full h-64 object-cover" width={600} height={400}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-semibold">Enterprise Application Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="px-4 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Xecron</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              We deliver strategic digital solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Performance Focused</h3>
              <p className="text-gray-600">
                Our solutions are optimized for speed and efficiency, ensuring optimal user experience and business growth.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Enterprise Security</h3>
              <p className="text-gray-600">
                We implement industry-standard security protocols to protect your data and your customer&apos;s information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Scalable Architecture</h3>
              <p className="text-gray-600">
                Our solutions are built to grow with your business, ensuring you never outgrow your digital infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="px-4 py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Solutions for <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">Every Business</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              We believe every business deserves access to quality technology, regardless of size.
            </p>
          </div>
          
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => setActiveTab("smallbiz")}
                className={`py-3 px-6 rounded-lg font-medium transition-all ${activeTab === "smallbiz" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white" : "text-gray-700 hover:bg-gray-50"}`}
              >
                Small Business
              </button>
              <button
                onClick={() => setActiveTab("enterprise")}
                className={`py-3 px-6 rounded-lg font-medium transition-all ${activeTab === "enterprise" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white" : "text-gray-700 hover:bg-gray-50"}`}
              >
                Enterprise
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-600">
                  {activeTab === "smallbiz" ? "Small Business Packages" : "Enterprise Solutions"}
                </h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  {(activeTab === "smallbiz" ? smallBusinessBenefits : enterpriseBenefits).map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <GradientButton 
                  href={activeTab === "smallbiz" ? "/small-business" : "/enterprise"} 
                  text={activeTab === "smallbiz" ? "Explore Small Biz Solutions" : "Enterprise Services"} 
                  className={`${activeTab === "smallbiz" ? "from-blue-600 to-indigo-600" : "from-purple-600 to-indigo-700"} w-full`}
                />
              </div>
              
              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-dashed border-blue-200 rounded-xl w-full h-64 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-5xl mb-4">
                      {activeTab === "smallbiz" ? "🚀" : "🏢"}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {activeTab === "smallbiz" ? "Grow Your Business" : "Transform Your Enterprise"}
                    </h3>
                    <p className="text-gray-600">
                      {activeTab === "smallbiz" 
                        ? "Affordable solutions designed for growth" 
                        : "Scalable systems for complex business needs"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Special Support */}
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 shadow-sm">
            <h3 className="text-2xl font-bold text-center mb-6 text-blue-800">Special Support for Small Businesses</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-blue-500 text-3xl font-bold mb-2">₹0</div>
                <p className="text-gray-700">Down payment for initial consultation</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-blue-500 text-3xl font-bold mb-2">Flexible</div>
                <p className="text-gray-700">Payment plans tailored to your cash flow</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-blue-500 text-3xl font-bold mb-2">1:1</div>
                <p className="text-gray-700">Dedicated support representative</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Expertise */}
      <div className="px-4 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Technology Expertise</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Comprehensive digital solutions across all platforms and business domains
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors text-center"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h3 className="font-semibold text-gray-800">{tech.name}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="mb-6 text-blue-100">
                Whether you&apos;re a small startup or a large enterprise, we have the technology solutions to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="flex items-center justify-center bg-white text-blue-700 hover:bg-gray-50 font-semibold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Get Free Consultation
          </a>
          <a 
            href="/case-studies" 
            className="flex items-center justify-center py-3 px-6 bg-transparent border-2 border-white rounded-md text-white font-semibold hover:bg-white/10 transition duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Case Studies
          </a>
        </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Clients Say</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Success stories from businesses we&apos;ve transformed
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="text-yellow-400 mb-4">
                  {"★".repeat(5)}
                </div>
 <p className="text-gray-700 italic mb-6">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="px-4 py-20 bg-gradient-to-br from-blue-700 to-indigo-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Digital Transformation?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-blue-100 mb-10">
            Partner with Xecron Technologies for innovative solutions that drive real business results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="flex items-center justify-center bg-white text-blue-700 hover:bg-gray-50 font-semibold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Get Free Consultation
          </a>
          <a 
            href="/case-studies" 
            className="flex items-center justify-center py-3 px-6 bg-transparent border-2 border-white rounded-md text-white font-semibold hover:bg-white/10 transition duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Case Studies
          </a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionHome;