import React from 'react';
import { Link } from 'react-router-dom';
// import Button from '../ui/Button';


function Landing() {
    return ( <>
        <div className='text-bold text-2xl flex items-center px-20 py-5 '>
            <span>logo </span> &nbsp; Gratitude
        </div>
        <div className="flex flex-col px-20 h-screen">
            <h1 className="text-4xl font-bold mb-4">Show Gratitude Daily <br/>
            <span className="text-lg mb-8 text-gray-200">Your journey to a more grateful life starts here.</span></h1>

        </div>
        <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white text-center py-4">
            <p>&copy; 2025 Gratitude. All rights reserved.</p>
        </footer>
    </> );
}

export default Landing;