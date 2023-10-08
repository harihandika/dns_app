import React, { useState } from 'react';
import { login } from '../store/actions';
import { useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const payload = {
        username: username,
        password: password
      }
      history.push('/recruitment')
      dispatch(login(payload, () => {
      }))
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                id="username"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-200"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };

  export default Login