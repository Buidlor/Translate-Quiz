
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = ({score}) => {

  const [rulesDropdown, setRulesDropdown] = useState(false);

  const toggleRulesDropdown = () => {
    setRulesDropdown(!rulesDropdown);
  };

  
  const handleLogout = () => {
    localStorage.removeItem("x-auth-token");
    console.log("logout");
    window.location.reload();
  }
    return (
        <header className="bg-green-400">
        <nav className="container mx-auto px-4 py-2 flex justify-between items-center h-16">
          <h1 className="text-3xl text-white font-bold">Translate Quiz</h1>
          <ul className="hidden md:flex space-x-8">
            <li className="text-white font-extrabold hover:text-gray-300">
              <Link to="/">Home</Link>
            </li>
            <li className=" relative">
              <button onClick={toggleRulesDropdown}
                className="text-white font-extrabold hover:text-gray-300"
              >
                Rules
              </button>
              {rulesDropdown && (
                 <div className="absolute left-0 mt-2 w-48 p-2 bg-white rounded-lg shadow-md">
                  
                  <p>
                    <span className="font-bold">1.</span> You will be given a a random word in French.
                  </p>
                  <p>
                    <span className="font-bold">2.</span> You will have to translate the word into English.
                  </p>
                  <p>
                    <span className="font-bold">3.</span> correct answers will give you a new word.
                  </p>
                  <p>
                    <span className="font-bold">4.</span> incorrect answers will give you the same word.
                  </p>
                  <p>
                    <span className="font-bold">5.</span> when all words are answered, you will be given a score.
                  </p>
               </div>
              )}
            </li>
            <li className="font-extrabold text-blue-500 hover:text-gray-300 animate-pulse transition-transform duration-500">
              <span className="hover:scale-100 scale-150">Score:</span><span>{score}</span>
            </li>
          </ul>
          <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                onClick={handleLogout}
            >
            <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        </nav>
      </header>
    )
}

export default Header