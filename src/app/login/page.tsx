'use client';
import React from 'react';
import Image from 'next/image';
import imgLogin from '../images/adminback.png';

const Page: React.FC = () => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="grid md:grid-cols-2 h-screen overflow-hidden animate__animated animate__fadeIn">
      <Image src={imgLogin} alt="background image" />
      <div className="flex flex-col justify-center p-16">
        <h1 className="text-4xl font-bold">Login</h1>
        <p className="text-lg text-gray-600">Enter your details</p>
        <form className="mt-8 space-y-8" onSubmit={handleLogin}>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold text-lg mb-1">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-3 border border-gray-600 rounded"
              placeholder="abc@gmail.com"
              required
            />
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="password" className="font-semibold text-lg mb-1">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="p-3 border border-gray-600 rounded"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 font-semibold px-8 rounded hover:bg-rose-600"
          >
            Login
          </button>
        </form>
        <div>
          Don't have an account? <a className="text-blue-600" href="/signup">Register Now</a>
        </div>
      </div>
    </div>
  );
};

export default Page;
