import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";


const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    
    

    const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }
    const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        if (password !== confirmPassword) {
            console.log("Passwords don't match");
            setError("Passwords don't match");
            return;
        }
        axios.post("http://localhost:3000/users/subscribe", {
            UserName: username,
            Email: email,
            Password: password,  
        })
        .then((res) => {
            console.log(res);
            navigate("/login")
        })
        .catch((err) => {
            console.log(err);
            setError(err.response.data.message);
        })
    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
        <FontAwesomeIcon icon={faArrowLeft} className="text-white text-2xl absolute top-4 left-4 cursor-pointer" onClick={() => navigate("/")} />
        <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/3">
          <h1 className="text-4xl md:text-5xl text-center text-green-600 mb-8">Register</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="username"
              onChange={handleUsername}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="email"
              onChange={handleEmail}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder="password"
              onChange={handlePassword}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder="confirm password"
              onChange={handleConfirmPassword}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="submit"
              value="Register"
              onClick={handleSubmit}
              className="w-full bg-green-600 text-white py-2 px-6 rounded-md shadow-md hover:bg-green-700"
            />
          </form>
          <p>{error} </p>
        </div>
      </div>
    )
}

export default Register;