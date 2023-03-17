import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-8">Welcome to the Translate quiz</h1>
          <p className="text-xl md:text-2xl text-white mb-8">Get started by registering or logging in</p>
          <div>
            <Link to="/register" className="bg-green-600 text-white py-2 px-6 mr-4 rounded-md shadow-md hover:bg-green-700">
              Register
            </Link>
            <Link to="/login" className="bg-blue-600 text-white py-2 px-6 ml-4 rounded-md shadow-md hover:bg-blue-700">
              Login
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Landing;
