import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import backgroundImage from "/app/login.jpg";
import axios from "axios";
import { apiurl } from "../../apiurl";
const bgImages = {
  backgroundImage: `url(${backgroundImage.src})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "100%",
};

const LoginPage: React.FC = () => {
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

  const handleClick = () => {
    setIsRegister(!isRegister);
    setAnimation(true);
    console.log(isRegister, formData, loginFormData);
  };
  const chnagehundler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const loginChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };
  //here make api call to the server to login , make sure ur server is running.
  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("login ", loginFormData);
    try {
      //install axios with "npm install axios" in the frontend folder root
      //and import it
      //declare apiurl in a seperate file and import it whenever u need api call.
      //in ur case, apiurl = http://localhost:4000
      const res = await axios.post(`${apiurl}/login`, loginFormData);
      if (res.data.success === true) {
        //save token in localstorage to use it later for authorization
        localStorage.setItem("AUTH_TOKEN", res.data.token);
        //alert succes or something
        alert("Succesfully logged in");
      } else {
        alert("Check your credentials");
      }
    } catch (err) {
      console.log(err);
      alert("Error logging in , try later");
    }
  };
  const Register = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      //install axios with "npm install axios" in the frontend folder root
      //declare apiurl in a seperate file and import it whenever u need api call.
      //in ur case, apiurl = http://localhost:4000
      const res = await axios.post(`${apiurl}/register`, formData);
      if (res.data.success === true) {
        //save token in localstorage to use it later for authorization
        localStorage.setItem("AUTH_TOKEN", res.data.token);
        //alert succes or something
        alert("Succesfully registered");
      } else {
        alert("A user with such email already exists");
      }
    } catch (err) {
      console.log(err);
      alert("Error registering , try later");
    }
  };

  return (
    <div className="">
      <Navbar />
      <div className="min-h-[650px] bg-gray-100" style={bgImages}>
        <div className="min-h-[650px] backdrop-blur-sm flex justify-center items-center">
          <div className="relative flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col max-h-[420px] overflow-hidden rounded-lg shadow-lg">
              <button
                onClick={handleClick}
                className="text-white text-4xl justify-center flex font-bold cursor-pointer transition-all duration-500 ease-in-out"
              >
                {isRegister ? "Register" : "Log in"}
              </button>

              {!isRegister && (
                <div className="login relative w-full h-full">
                  <form
                    onSubmit={login}
                    className="flex flex-col space-y-3.5 p-6"
                  >
                    <input
                      className="w-full h-10 p-2.5 outline-primary text-black rounded-md"
                      type="email"
                      name="email"
                      value={loginFormData.email}
                      onChange={loginChangeHandler}
                      placeholder="Email"
                      required
                    />
                    <input
                      className="w-full h-10 p-2.5 outline-primary text-black rounded-md"
                      type="password"
                      name="password"
                      value={loginFormData.password}
                      onChange={loginChangeHandler}
                      placeholder="Password"
                      required
                    />
                    <a onClick={handleClick} className="hover:text-primary">
                      Don't have an account ?
                    </a>
                    <button
                      type="submit"
                      className="w-4/5 h-10 mx-auto my-3 text-red-500 bg-secondary text-base font-bold border-none rounded-md cursor-pointer transition-all duration-200 ease-in hover:bg-primary hover:text-white"
                    >
                      Log in
                    </button>
                  </form>
                </div>
              )}

              {isRegister && (
                <div
                  className={`register rounded-[60%]/[10%] transform-gpu transition-transform duration-800 ease-in-out ${
                    animation ? "" : "translate-y-full"
                  }`}
                >
                  <form
                    onSubmit={Register}
                    className="flex flex-col space-y-3.5 p-6"
                  >
                    <input
                      className="w-full h-10 p-2.5 outline-primary  text-black rounded-md"
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={formData.username}
                      onChange={chnagehundler}
                      required
                    />
                    <input
                      className="w-full h-10 p-2.5 outline-primary  text-black rounded-md"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={chnagehundler}
                      placeholder="Email"
                      required
                    />
                    <input
                      className="w-full h-10 p-2.5 outline-primary  text-black rounded-md"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={chnagehundler}
                      placeholder="Password"
                      required
                    />
                    <input
                      className="w-full h-10 p-2.5 outline-primary  text-black rounded-md"
                      type="password"
                      name="confirmPswd"
                      placeholder="Confirm Password"
                      required
                    />
                    <a onClick={handleClick} className="hover:text-primary">
                      Already have an account ?
                    </a>
                    <button
                      type="submit"
                      className="w-4/5 h-10 mx-auto my-3 text-red-500 text-base font-bold border-none rounded-md cursor-pointer transition-all duration-200 ease-in hover:bg-red-500 hover:text-white"
                    >
                      Register
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;