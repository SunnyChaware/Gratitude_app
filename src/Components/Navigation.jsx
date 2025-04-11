import { React, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  const [showProfile, setShowProfile] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="flex justify-between items-center bg-gray-800 p-4">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Gratitude</Link>
        </div>
        <div className="text-white text-2xl flex items-center">
          <Link to="/settings">
            <FontAwesomeIcon icon={faCog} />
          </Link>

          {/* Avatar with popover */}
          <div className="relative px-4">
            <img
              src="/assets/react.svg"
              alt="Avatar"
              className="rounded-full cursor-pointer"
              onClick={() => setShowProfile(!showProfile)}
            />
            {showProfile && (
              <div
                ref={popoverRef}
                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
              >
                <ul className="py-2 text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Settings
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
      <hr className="border-gray-700" />
    </>
  );
}

export default Navigation;