import React from 'react';
import { Link } from 'react-router-dom';


function Landing() {
    return ( <>
        <div className='text-bold text-2xl flex items-center px-5 py-5 md:px-20 lg:px-40 2xl:px-80'>
            <img src="vite.svg"/> <span className='mx-2'>Gratitude</span>
        </div>        
        <div className="flex flex-col md:flex-row px-5 md:px-30 lg:px-40 2xl:px-80 h-screen items-center justify-center" style={{marginTop: '-60px'}}>
            <div className='md:w-1/2 text-center md:text-left'>
                <div className=''>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Show Gratitude Daily <br/></h1>
                    <span className="text-base md:text-lg mb-8 text-gray-500">Your journey to a more grateful life starts here.</span><br /><br />
                    <div className='flex flex-col md:flex-row items-center md:justify-start justify-center gap-4'>
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300
                        font-medium rounded-lg text-sm w-40 h-10 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        Get Started 
                      </button>
                      <button
                        type="button"
                        className="w-40 h-10 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg 
                        border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-100
                        dark:focus:ring-gray-700 dark:border-gray-600 dark:hover:text-green-700 dark:hover:bg-transparent"
                       >
                        Sign Up
                      </button>
                    </div>
                </div>
            </div>
            <div className='w-1/2 flex justify-center '>
                <img src="vite.svg" alt="image" className='w-[300px] h-[200px] md:w-[500px] md:h-[400px]'/>
            </div>

        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-transparent text-black text-center py-4" style={{borderTop: '1px solid #e6e6e6'}}>
            <p>&copy; 2025 Gratitude. All rights reserved.</p>
        </div>
    </> );
}

export default Landing;