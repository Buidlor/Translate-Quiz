
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {

  const [rulesDropdown, setRulesDropdown] = useState(false);

  const toggleRulesDropdown = () => {
    setRulesDropdown(!rulesDropdown);
  };

    return (
        <header className="bg-green-400">
        <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
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
            <li className="text-white font-extrabold hover:text-gray-300">
              Score
            </li>
          </ul>
          <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        </nav>
      </header>
    )
}

export default Header