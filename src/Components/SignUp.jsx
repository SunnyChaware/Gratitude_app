import { Link } from 'react-router-dom';

function SignUp() {
    return ( 
        <>
        <div className="h-screen flex items-center justify-center px-4 sm:px-6">
            <div className="flex flex-col bg-white rounded-lg shadow-md p-6 sm:p-8 w-full max-w-md" style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px"}}>      
                <h1 className="text-2xl font-bold mb-2 text-center">Create an Account</h1>
                <p className="text-gray-600 mb-4 text-center">Enter your details to create your account</p>

                <form action="">
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                    <input type="text" id="name" className="border border-gray-300 rounded-md p-2 w-full mb-4" placeholder="Enter your name" required />
                    
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                    <input type="email" id="email" className="border border-gray-300 rounded-md p-2 w-full mb-4" placeholder="Enter your email" required />
                    
                    <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2">Password</label>
                    <input type="password" id="password" className="border border-gray-300 rounded-md p-2 w-full mb-4" placeholder="Create a password" required />
                    
                    <button type="submit" className="bg-green-700 text-white font-semibold py-2 px-4 rounded-md w-full hover:bg-green-800">Create an account</button>
                    
                    <p className="text-sm text-gray-500 mt-4 text-center">Already have an account? <Link to="/login" className="text-green-700 hover:underline">Sign in</Link></p>
                </form>
            </div>
        </div>
        </>
     );
}

export default SignUp;
