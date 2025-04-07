import React from 'react';
import Img from '../../assets/google-logo-search-new-svgrepo-com.svg'; // Ensure this path is correct
import coverImg from '../../assets/2147852010.jpg'; // Ensure this path is correct
import { useForm } from "react-hook-form";
import { Links, useNavigate } from 'react-router-dom';
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const onSubmit = (data) => console.log(data);
  const handleClick = () => {
    navigate('/signUp');  // Navigates to the specified path
  };
  return (
    <div className="flex h-screen rounded-md items-center justify-center px-12">
      {/* Left Image Section */}
      <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url(${coverImg})` }}>
        {/* You can add more content or styling here if needed */}
      </div>

      {/* Right Section (Form Area) */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-xs">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                {...register("password", { required: "Password is required" })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>

            {/* Divider with "or" */}
            <div className="flex items-center space-x-2 my-4">
              <div className="w-1/2 h-[1px] bg-black"></div>
              <div>or</div>
              <div className="w-1/2 h-[1px] bg-black"></div>
            </div>

            {/* Google Login Button */}
            <div className="flex items-center justify-center">
              <button className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 transition duration-150">
                <img className="w-6 h-6" src={Img} alt="Google logo" />
                <span>Login with Google</span>
              </button>
            </div>

            {/* Sign-up Link */}
            <div className='text-center my-3'>
              <div>
                Don't have an account? <Links className='text-red-500' to={'/signUp'}>Sign-up</Links>
              </div>
            </div>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-500 text-xs">
            &copy;2025 Acme Corp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
