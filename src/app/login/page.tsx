"use client";
import React from "react";
import Image from "next/image";
import imgLogin from "../images/adminback.png";
// import { useRouter } from "next/navigation";

// export const RegisterButton: React.FC = () => {
//   const router = useRouter();

//   const handleRegister = (
//     e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
//   ) => {
//     e.preventDefault();
//     router.push("/register");
//   };
//   return (
//     <a className="text-blue-700 hover:text-blue-500 px-1 "
//       href="/register"
//       onClick={handleRegister}
//     >
//       Register Now
//     </a>
//   );
// };

const Page: React.FC = () => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="grid md:grid-cols-2 h-screen overflow-hidden animate__animated animate__fadeIn">
      <Image src={imgLogin} alt="background image" />
      <div className="flex flex-col justify-center p-16">
        <h1 className="text-4xl font-bold mb-2">Login</h1>
        <p className="text-lg text-gray-600">Enter your details</p>
        <form className="mt-8 space-y-8" onSubmit={handleLogin}>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold text-lg mb-1">
              Email
            </label>
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
            <label htmlFor="password" className="font-semibold text-lg mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="p-3 border border-gray-600 rounded"
              placeholder="********"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-700 text-white py-2 font-semibold px-8 rounded-md hover:bg-blue-500 mb-4"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
        Don't have an account?{" "}
        <a href="/register" className="text-indigo-600 hover:text-indigo-700">
          Register here!
        </a>
      </p>
      </div>
    </div>
  );
};

export default Page;
