
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Login = () => {
  const [loginType, setLoginType] = useState("user");

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-6">Login to DTTC Portal</h1>
          
          <div className="mb-4">
            <div className="flex border-b">
              <button
                className={`flex-1 py-2 px-4 text-center ${
                  loginType === "user" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"
                }`}
                onClick={() => setLoginType("user")}
              >
                User Login
              </button>
              <button
                className={`flex-1 py-2 px-4 text-center ${
                  loginType === "admin" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"
                }`}
                onClick={() => setLoginType("admin")}
              >
                Admin Login
              </button>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                {loginType === "admin" ? "Admin ID" : "Username/Email"}
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder={loginType === "admin" ? "Enter admin ID" : "Enter username or email"}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter password"
              />
            </div>

            {loginType === "user" && (
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm">Remember me</label>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              {loginType === "admin" ? "Admin Login" : "Login"}
            </button>
          </form>

          {loginType === "user" && (
            <div className="mt-4 text-center">
              <a href="#" className="text-blue-600 hover:underline text-sm">Forgot Password?</a>
              <p className="mt-2 text-sm">
                Don't have an account? <a href="#" className="text-blue-600 hover:underline">Register here</a>
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
