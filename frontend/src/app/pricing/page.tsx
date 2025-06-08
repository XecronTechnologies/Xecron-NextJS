// Suggested code may be subject to a license. Learn more: ~LicenseLog:2478840422.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:928606215.
"use client"
import { useState } from "react";
import GradientButton from "../../components/common/LogoColorButton";

const CheckIcon = () => (
  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const websitePlans = [
  {
    name: "Starter",
    price: "₹499",
    description: "Perfect for small businesses establishing their online presence",
    features: [
      "1-3 page responsive website",
      "Basic contact form integration",
      "Mobile-optimized design",
      "1 month complimentary maintenance",
      "Standard 24-48 hour delivery"
    ],
    popular: false,
    buttonText: "Get Started",
    buttonVariant: "from-blue-600 to-blue-700"
  },
  {
    name: "Business",
    price: "₹1,999",
    description: "Comprehensive solution for growing businesses",
    features: [
      "5-10 page responsive website",
      "Contact form with basic CRM integration",
      "On-page SEO optimization",
      "3 months complimentary maintenance",
      "CMS integration (WordPress)",
      "Google Analytics setup"
    ],
    popular: true,
    buttonText: "Choose Business",
    buttonVariant: "from-purple-600 to-indigo-600"
  },
  {
    name: "Enterprise",
    price: "₹4,999",
    description: "Premium solution for established businesses",
    features: [
      "10-20 page responsive website",
      "Advanced API integrations",
      "E-commerce functionality",
      "6 months complimentary maintenance",
      "Custom UI/UX design",
      "Comprehensive SEO strategy",
      "Quarterly performance reports"
    ],
    popular: false,
    buttonText: "Contact Sales",
    buttonVariant: "from-blue-600 to-indigo-700"
  }
];

const appPlans = [
  {
    name: "Basic",
    price: "₹9,999",
    description: "Entry-level mobile application solution",
    features: [
      "Single platform (iOS or Android)",
      "Standard UI/UX design",
      "Core functionality implementation",
      "1 month complimentary maintenance",
      "4-6 week development timeline"
    ],
    popular: false,
    buttonText: "Get Started",
    buttonVariant: "from-blue-600 to-blue-700"
  },
  {
    name: "Professional",
    price: "₹24,999",
    description: "Advanced mobile solution for business growth",
    features: [
      "Cross-platform development",
      "Enhanced UI/UX design",
      "API integrations",
      "3 months complimentary maintenance",
      "Push notification system",
      "User analytics dashboard"
    ],
    popular: true,
    buttonText: "Choose Professional",
    buttonVariant: "from-purple-600 to-indigo-600"
  },
  {
    name: "Custom",
    price: "₹49,999+",
    description: "Tailored mobile solution for enterprise needs",
    features: [
      "Custom cross-platform development",
      "Premium UI/UX design",
      "Complex system integrations",
      "6 months complimentary maintenance",
      "Offline functionality",
      "Enterprise-grade security",
      "Dedicated account manager"
    ],
    popular: false,
    buttonText: "Request Proposal",
    buttonVariant: "from-blue-600 to-indigo-700"
  }
];

const enterpriseFeatures = [
  "Custom application development",
  "Enterprise-grade security protocols",
  "Dedicated project management team",
  "24/7 priority support",
  "Scalable cloud architecture",
  "API and system integrations",
  "Ongoing maintenance & updates",
  "Performance optimization",
  "Compliance with industry standards",
  "Training and documentation"
];

const PricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"website" | "app">("website");
  const [isAnnual, setIsAnnual] = useState(false);

  const currentPlans = activeTab === "website" ? websitePlans : appPlans;

  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="px-4 py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-4 py-1 mb-6 shadow-sm border border-gray-200">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">PRICING PLANS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            Transparent <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Pricing</span> for Every Business
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Scalable solutions designed to grow with your business. Start with what you need today and upgrade as your requirements evolve.
          </p>
          
          {/* Service Type Toggle */}
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => setActiveTab("website")}
                className={`py-3 px-6 rounded-lg text-sm md:text-base font-medium transition-all ${activeTab === "website" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white" : "text-gray-700 hover:bg-gray-50"}`}
              >
                Website Development
              </button>
              <button
                onClick={() => setActiveTab("app")}
                className={`py-3 px-6 rounded-lg text-sm md:text-base font-medium transition-all ${activeTab === "app" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white" : "text-gray-700 hover:bg-gray-50"}`}
              >
                App Development
              </button>
            </div>
          </div>

          {/* Billing Toggle */}
          {activeTab === "website" && (
            <div className="mt-8 flex items-center justify-center space-x-4">
              <span className={`font-medium ${!isAnnual ? "text-gray-900" : "text-gray-500"}`}>Monthly Billing</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative rounded-full h-7 w-14 bg-gray-300 transition-colors focus:outline-none"
              >
                <span
                  className={`absolute left-0 top-0 h-7 w-7 rounded-full bg-white shadow-md transform transition-transform ${
                    isAnnual ? "translate-x-7 bg-blue-600" : "translate-x-0"
                  }`}
                />
              </button>
              <div>
                <span className={`font-medium ${isAnnual ? "text-gray-900" : "text-gray-500"}`}>Annual Billing</span>
                <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Save 20%</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {currentPlans.map((plan, index) => (
              <div 
                key={`${activeTab}-${index}`}
                className={`relative p-8 rounded-xl shadow-sm transition-all hover:shadow-lg border ${
                  plan.popular 
                    ? "border-indigo-500 bg-white transform md:-translate-y-3 ring-1 ring-indigo-100" 
                    : "border-gray-200 bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-md">
                    RECOMMENDED
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {isAnnual && activeTab === "website" 
                        ? `₹${Math.floor(parseInt(plan.price.replace(/\D/g, '')) * 12 * 0.8)}` 
                        : plan.price}
                    </span>
                    <span className="text-gray-500 ml-1.5">
                      {isAnnual && activeTab === "website" ? "/year" : "/one-time"}
                    </span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-10">
                  <GradientButton 
                    href="/contact" 
                    text={plan.buttonText} 
                    className={`w-full py-3 text-lg ${plan.popular ? "from-purple-600 to-indigo-600" : plan.buttonVariant}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enterprise Solutions */}
      <div className="px-4 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Enterprise-Grade</span> Solutions
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Custom solutions tailored to your organization&apos;s specific requirements and scale.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Enterprise Features</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                {enterpriseFeatures.map((feature, index) => (
                  <li key={`enterprise-${index}`} className="flex items-start">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Custom Proposal</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our enterprise solutions are tailored to your specific business objectives. Pricing is based on:
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <CheckIcon />
                  Project scope and technical complexity
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  Implementation timeline
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  Support and maintenance requirements
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  Integration with existing systems
                </li>
              </ul>
              <GradientButton 
                href="/contact" 
                text="Schedule Consultation" 
                className="from-blue-600 to-indigo-700 w-full py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Solutions</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              We deliver more than just websites and apps - we provide strategic digital solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Performance Focused</h3>
              <p className="text-gray-600">
                Our solutions are optimized for speed and efficiency, ensuring optimal user experience and search rankings.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
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
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
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

{/* Fixed CTA Section */}
<div className="px-4 py-20 bg-gradient-to-br from-blue-700 to-indigo-800">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="lg:w-1/2">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Transform Your Digital Strategy Today
        </h2>
        <p className="text-lg text-blue-100 mb-8">
          Our experts are ready to help you build a solution that drives real business results. 
          Schedule your free consultation to discuss your project requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
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
      <div className="lg:w-1/2 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
        <h3 className="text-xl font-bold text-white mb-4">Why businesses choose us:</h3>
        <ul className="space-y-3">
          {[
            "15+ years industry experience",
            "100+ successful projects delivered",
            "Dedicated project managers",
            "Transparent development process",
            "Post-launch support"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-green-300 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-blue-100">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>

{/* Enhanced FAQ Section */}
<div className="px-4 py-20 bg-gray-50">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-14">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Frequently Asked Questions
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-600">
        Quick answers to common questions about our services and process.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        {[
          {
            question: "What&apos;s included in the maintenance period?",
            answer: "Our maintenance covers bug fixes, security updates, and minor adjustments. Major changes require separate quotes."
          },
          {
            question: "How long do projects typically take?",
            answer: "Timelines vary from 2-5 days for starter sites to 8-12 weeks for complex apps. We provide estimates after requirements review."
          },
          {
            question: "Do you offer post-launch support?",
            answer: "Yes, we provide several support plans from basic to enterprise-level with 24/7 availability options."
          }
        ].map((faq, index) => (
          <div key={index} className="group bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
            <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 flex justify-between items-center">
              {faq.question}
              <svg className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transform group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </h3>
            <p className="text-gray-600">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
      
      <div className="space-y-6">
        {[
          {
            question: "What payment methods do you accept?",
            answer: "We accept cards, bank transfers, UPI, and offer payment plans for larger projects."
          },
          {
            question: "Can I upgrade my plan later?",
            answer: "Absolutely! We make upgrades seamless—you&apos;ll only pay the difference between plans."
          },
          {
            question: "Do you provide design mockups before development?",
            answer: "Yes, all projects include design concepts for approval before we begin development."
          }
        ].map((faq, index) => (
          <div key={index} className="group bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
            <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 flex justify-between items-center">
              {faq.question}
              <svg className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transform group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </h3>
            <p className="text-gray-600">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
    
    <div className="mt-12 text-center">
      <p className="text-gray-600 mb-6">
        Didn&apos;t find what you&apos;re looking for?
      </p>
      <GradientButton 
        href="/contact" 
        text="Contact Our Support Team" 
        className="from-blue-600 to-indigo-600 mx-auto"
      />
    </div>
  </div>
</div>
    </div>
  )
}

export default PricingPage