
"use client"

import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
// import Link from "next/link";
import Head from 'next/head';
import { setContactField, submitContactStart, resetContactState, submitContactFailure } from '@/redux/slices/contactSlice';

const ContactPage: React.FC = () => {
  const { name, email, phone, message, isLoading, error, success } = useAppSelector((state) => state.contact);
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch(setContactField({ field: name as "name" | "email" | "phone" | "message", value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(submitContactStart());

    try {
      const response = await fetch('contact/api/submitContact', {
        method: 'POST' ,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (!response.ok) {
        console.log(response)
        throw new Error('Failed to submit form');
      }
      dispatch(resetContactState());
    } catch (err) {
      dispatch(submitContactFailure((err as Error).message));
    }
  };

  useEffect(() => {
    return () => {
      dispatch(resetContactState());
    }
  }, [dispatch]);
  return (
    <div className="min-h-screen bg-gray-50 py-30 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Contact Us</title>
        <meta name="description" content='Contact us page' />
      </Head>

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3l font-bold text-gray-900">Contact Us</h1>
          <p className="mt-2 text-sm text-gray-600">We&apos;d love to hear from you!</p>
        </div>

        {success && (
          <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
            Thank you for your message! We&apos;ll get back to you soon.
          </div>
        )}

        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )
        }


        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>


          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={message}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
          <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>


        </form>

      </div>
    </div>
  )
}

export default ContactPage;