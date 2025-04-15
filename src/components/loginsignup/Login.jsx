import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  // ✅ Detect existing session (e.g., after OAuth redirect)
  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        console.log('OAuth session detected:', session);
        navigate('/create');
      }
    };

    checkSession();
  }, [navigate]);

  // ✅ Google login
  const handleOAuthLogin = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
    });

    if (error) {
      alert('OAuth login error: ' + error.message);
    } else {
      console.log(`Redirecting to ${provider}...`);
    }
  };

  // ✅ Email/Password login or signup
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        alert(error.message);
      } else {
        alert('Login successful!');
        console.log('User:', data.user);
        navigate('/create');
      }
    } else {
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        alert(error.message);
      } else {
        alert('Signup successful! Check your email for confirmation.');
        console.log('User:', data.user);
        navigate('/create');
      }
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black p-4 text-gray-400 font-light text-xl h-screen flex justify-center items-center">
      <div>
        <form onSubmit={handleFormSubmit} className="bg-zinc-800 p-8 rounded shadow-md w-80">
          <h2 className="text-2xl text-gray-200 mb-4">{isLogin ? 'Login' : 'Signup'}</h2>
          <div className="mb-4">
            <label className="block text-gray-200 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full p-2 rounded bg-zinc-700 text-gray-200 focus:outline-none focus:ring focus:ring-gray-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full p-2 rounded bg-zinc-700 text-gray-200 focus:outline-none focus:ring focus:ring-gray-200"
              required
            />
          </div>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-200 mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full p-2 rounded bg-zinc-700 text-gray-200 focus:outline-none focus:ring focus:ring-gray-200"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full p-2 rounded bg-gray-200 text-zinc-900 hover:bg-gray-300 transition duration-200"
          >
            {isLogin ? 'Login' : 'Signup'}
          </button>
          <p className="text-gray-200 mt-4">
            {isLogin ? (
              <span>Don't have an account? <span className="cursor-pointer text-blue-500" onClick={toggleForm}>Signup</span></span>
            ) : (
              <span>Already have an account? <span className="cursor-pointer text-blue-500" onClick={toggleForm}>Login</span></span>
            )}
          </p>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-300">Or login with</p>
          <div className="flex justify-center mt-2 space-x-4">
            <button
              onClick={() => handleOAuthLogin('google')}
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
            >
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
