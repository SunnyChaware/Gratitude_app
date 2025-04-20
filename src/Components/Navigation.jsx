import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";

function Navigation() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return ( 
        <>
        <nav className="flex justify-between items-center p-4 px-7 top-0 w-full z-10 bg-white shadow-md sticky">
            <Link to="/" className="flex items-center">
                <img src="vite.svg" alt="Logo" className="h-8 w-8" />
                <span className="mx-2 text-xl font-bold text-black">Gratitude</span>
            </Link>
            <div className="hidden md:flex">
                <Link to="/add-gratitude" className="mx-4 text-sm font-medium text-gray-700 hover:text-emerald-600">Journal</Link>
                <Link to="/settings" className="mx-4 text-sm font-medium text-gray-700 hover:text-emerald-600">Setting</Link>
            </div>
            <div className="relative" ref={dropdownRef}>
                <button 
                    onClick={toggleDropdown} 
                    className="text-sm font-medium text-gray-700 hover:text-emerald-600"
                >
                    <FontAwesomeIcon icon={faUser} />
                </button>
                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                        <Link 
                            to="/profile" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Profile
                        </Link>
                        <Link 
                            to="/settings" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Settings
                        </Link>
                        <button 
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </nav>
        </>
    );
}

export default Navigation;