"use client";
import React from "react";
import Image from "next/image";
import imgLogin from "../images/adminback.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validateLoginRegisterSchema } from "../utils/validate";
import { z } from "zod";
import { useRouter } from "next/navigation";

const loginSchema = validateLoginRegisterSchema(true);

type LoginPageData = z.infer<typeof loginSchema>;

const LoginPage: React.FC = () => {
  const router = useRouter();
  // zod schema initialize
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPageData>({
    resolver: zodResolver(loginSchema),
  });

  // Handle form submission
  const onSubmit = (data: LoginPageData) => {
    try {
      console.log("Login data submitted:", data);
      router.push("/dashboard");
    } catch (error) {
      console.error("error while logging", error);
    }

    // Add your login logic here (e.g., API call)
  };

  return (
    <div className="grid md:grid-cols-2 h-screen overflow-hidden animate__animated animate__fadeIn">
      <Image src={imgLogin} alt="background image" />
      <div className="flex flex-col justify-center p-16">
        <h1 className="text-4xl font-bold mb-2">Login</h1>
        <p className="text-lg text-gray-600">Enter your details</p>

        {/* Form */}
        <form className="mt-8 space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold text-lg mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="p-3 border border-gray-600 rounded"
              placeholder="johndow@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="font-semibold text-lg mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className="p-3 border border-gray-600 rounded"
              placeholder="********"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-700 text-white py-2 font-semibold px-8 rounded-md hover:bg-blue-500"
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

export default LoginPage;
