"use client";
import React from "react";

interface NavBarProps {
  navItems: string[];
}

const NavBar: React.FC<NavBarProps> = ({ navItems }) => {
  return (
    <section className="bg-white">
      <nav className="flex flex-col md:flex-row justify-between items-center mx-6 my-6 p-6 bg-transparent rounded-lg shadow-lg">
        {/* Logo / Site Title */}
        <div className="text-indigo-700 text-2xl font-semibold hover:text-indigo-500 transition-all duration-600">
          Chats
        </div>

        {/* Navigation Items */}
        <ul className="flex flex-col md:flex-row space-y-4  md:space-x-10 md:space-y-0">
          {navItems.map((value, index) => (
            <li
              key={index}
              className="text-gray-700 hover:text-indigo-700 cursor-pointer transition-all duration-300"
            >
              {value}
            </li>
          ))}
        </ul>

        {/* Buttons & Icons */}
        <div className="flex items-center space-x-6 md:mt-0">
          <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-all duration-300">
            Sign in
          </button>
          <button className="px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-all duration-300">
            Sign up
          </button>
          <button>
            <img
              src="https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your avatar/icon URL
              alt="User Icon"
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-indigo-500 transition-all duration-300"
            />
          </button>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
