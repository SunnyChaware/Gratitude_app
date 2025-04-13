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
        <nav className="flex justify-between items-center p-4 fixed top-0 w-full z-10" >
            <div className=" text-2xl font-bold px-20 text-black">
                <Link to="/">Gratitude</Link>
            </div>
            <div className="text-black text-2xl flex items-center px-20">
                {/* Avatar with popover */}
                {/* <div className="relative px-5">
                    <img
                        src="pic.jpg"
                        alt="User Avatar"
                        className="rounded-full cursor-pointer  w-9 h-9"
                        onClick={() => setShowProfile(!showProfile)}
                    />
                    {showProfile && (
                        <div
                            ref={popoverRef}
                            className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
                        >
                            <ul className="py-2 text-gray-700">
                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                    <Link to="/profile" className="block w-full h-full">Profile</Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                    Logout
                                </li>
                            </ul>
                        </div>
                    )}
                </div> */}

                {/* sign up Button */}
                <Link to="/settings" className="text-black">
                    <FontAwesomeIcon icon={faCog} />
                </Link>
            </div>
        </nav>
        {/* Add a spacer div to prevent content from being hidden behind the fixed navbar */}
        <div className="pt-16"></div>
    </>
);
}

export default Navigation;