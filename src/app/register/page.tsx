"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validateLoginRegisterSchema } from "../utils/validate";
import { z } from "zod";

const registerSchema = validateLoginRegisterSchema(false); // false because this is the register page
type RegisterPageData = z.infer<typeof registerSchema>;

const RegisterPage: React.FC = () => {
  const {
    
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, dirtyFields },
  } = useForm<RegisterPageData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterPageData) => {
    console.log("Registration form submitted with data: ", data);
    // Handle registration logic here (e.g., API call)
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
      <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="johndoe@example.com"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            placeholder="********"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword")}
            placeholder="********"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          
          {errors.confirmPassword && (
            <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Register
        </button>
      </form>

      <p className="text-center mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-indigo-600 hover:text-indigo-700">
          Login here
        </a>
      </p>
    </div>
  );
};

export default RegisterPage;
