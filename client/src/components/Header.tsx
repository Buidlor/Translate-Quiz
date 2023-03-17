//import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="bg-green-400">
        <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
          <h1 className="text-3xl text-white font-bold">Translate Quiz</h1>
          <ul className="hidden md:flex space-x-8">
            <li className="text-white font-extrabold hover:text-gray-300">
              Home
            </li>
            <li className="text-white font-extrabold hover:text-gray-300">
              Quiz
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