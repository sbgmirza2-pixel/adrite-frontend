import React from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from "../../store/slices/authSlice";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    
    const userData = {
      user: { name: 'Saleha Baig' },
      access_token: 'fake-jwt-token-123', 
      role: 'admin' 
    };

    dispatch(setCredentials(userData));

    localStorage.setItem("access_token", userData.access_token);
    localStorage.setItem("role", userData.role);

    navigate('/admin/users'); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8FAFC]">
      <div className="p-8 bg-white shadow-2xl rounded-xl border border-slate-100">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-blue-600">ADRITE <span className="text-slate-800">AI</span></h2>
            <p className="text-slate-500 text-sm mt-2">Welcome back! Please login to your account.</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4"> 
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-700 uppercase ml-1">Email Address</label>
            <input 
              type="email" 
              placeholder="admin@adrite.ai" 
              className="border border-slate-200 p-3 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required 
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-700 uppercase ml-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="border border-slate-200 p-3 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required 
            />
          </div>
          
          <button 
            type="submit" 
            className="bg-blue-600 text-white p-3 rounded-lg font-bold mt-2 hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
          >
            Sign In as Admin
          </button>
        </form>

        <p className="text-center text-xs text-slate-400 mt-6">
            Internship Project by Saleha Baig
        </p>
      </div>
    </div>
  );
};

export default Login;