function Login() {
    return ( 
        <>
        <div className="h-screen flex items-center justify-center px-4 sm:px-6">
            <div className="w-full max-w-md">
                {/* Back to home link */}
                <div className="mb-2 flex items-center text-green-700 cursor-pointer">
                    <span className="mr-2">&larr;</span> {/* Back arrow symbol */}
                    <a href="/" className="text-sm font-semibold">Back to home</a>
                </div>
                <div className="flex flex-col bg-white rounded-lg shadow-md p-6 sm:p-8 w-full" style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px"}}>
                    {/* Login content */}
                    <h1 className="text-2xl font-bold mb-2 text-center">Welcome back</h1>
                    <p className="text-gray-600 mb-4 text-center">Enter your email and password to sign in</p>
                    <form action="">
                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                        <input type="email" id="email" className="border border-gray-300 rounded-md p-2 w-full mb-4" placeholder="Enter your email" required />
                        <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2">Password</label>
                        <input type="password" id="password" className="border border-gray-300 rounded-md p-2 w-full mb-4" placeholder="Enter your password" required />
                        <button type="submit" className="bg-green-700 text-white font-semibold py-2 px-4 rounded-md w-full hover:bg-green-800">Login</button>
                        <p className="text-sm text-gray-500 mt-4 text-center">Don't have an account? <a href="/signup" className="text-green-700 hover:underline">Sign up</a></p>
                        <p className="text-sm text-gray-500 mt-4 text-center">Forgot your password? <a href="/reset-password" className="text-green-700 hover:underline">Reset it</a></p>
                        <p className="text-sm text-gray-500 mt-4 text-center">By logging in, you agree to our <a href="/terms" className="text-green-700 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-green-700 hover:underline">Privacy Policy</a>.</p>
                    </form>
                </div>
            </div>
        </div>
        </>
     );
}

export default Login;

