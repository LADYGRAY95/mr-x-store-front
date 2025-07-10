'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import axios from "axios";
import backgroundImage from "@/app/login.jpg"; // ✅ adjust if needed
import { apiurl } from "@/apiurl";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setAnimation(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isRegister) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
    }
  };

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${apiurl}/login`, loginFormData);
      if (res.data.success) {
        localStorage.setItem("AUTH_TOKEN", res.data.token);
        alert("Login successful!");
        router.push("/");
      } else {
        alert("Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Try again later.");
    }
  };

  const register = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${apiurl}/register`, formData);
      if (res.data.success) {
        localStorage.setItem("AUTH_TOKEN", res.data.token);
        alert("Registration successful!");
        router.push("/");
      } else {
        alert("Email already exists.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
        }}
      >
        <div className="backdrop-blur-sm bg-white/10 p-6 sm:p-10 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-white text-center text-2xl sm:text-3xl font-bold mb-6">
            {isRegister ? "Register" : "Log in"}
          </h2>

          <form
            onSubmit={isRegister ? register : login}
            className="flex flex-col gap-4"
          >
            {isRegister && (
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                className="p-3 rounded-md outline-none bg-white text-black"
              />
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={isRegister ? formData.email : loginFormData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-md outline-none bg-white text-black"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={isRegister ? formData.password : loginFormData.password}
              onChange={handleChange}
              required
              className="p-3 rounded-md outline-none bg-white text-black"
            />

            {isRegister && (
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                className="p-3 rounded-md outline-none bg-white text-black"
              />
            )}

            <span
              onClick={toggleForm}
              className="text-sm text-white text-center hover:text-primary cursor-pointer"
            >
              {isRegister
                ? "Already have an account?"
                : "Don't have an account?"}
            </span>

            <button
              type="submit"
              className="bg-secondary text-white py-2 rounded-md font-semibold hover:bg-primary transition"
            >
              {isRegister ? "Register" : "Log in"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;