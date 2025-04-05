import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login form submitted:', { email, password });
    } else {
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      console.log('Signup form submitted:', { email, password });
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black p-4 text-gray-400 font-light text-xl h-screen flex justify-center items-center">
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
    </div>
  );
};

export default Login;
