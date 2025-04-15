import React from 'react';
import { FaRegUserCircle, FaTh, FaPlusSquare,  FaUsers, FaCog } from 'react-icons/fa';
import { FaLinkedinIn, FaInstagram, FaX } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import logo from '../../assets/logo.svg';
import linkedin from '../../assets/linkedin.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';

const Sidebar = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }

    getUser()
  }, [])

  return (
    <div className="flex flex-col h-screen w-64 bg-gradient-to-b from-zinc-900 to-zinc-700 text-white">
      {/* Top Section */}
      <div className="p-4 flex items-center justify-center">
        <span className="text-lg font-semibold">
          <div className="flex flex-col">
            <div className="flex">
              <div className="bg-zinc flex items-center justify-center">
                <Link to="/">
                  <img src={logo} alt="SKRIL logo" width={40} height={40} />
                </Link>              
              </div>
            </div>
          </div>
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-2">
          {user ? (
            <div className="flex items-center space-x-2">
              {user.user_metadata?.avatar_url ? (
                <img
                  src={user.user_metadata.avatar_url}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <FaRegUserCircle className="text-gray-400 text-2xl" />
              )}
              <div>
                <p className="text-sm">{user.user_metadata?.full_name || 'Creator'}</p>
                <p className="text-xs text-gray-400">{user.email}</p>
              </div>
            </div>
          ) : (
            <div className="text-sm text-gray-400">Not logged in</div>
          )}
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 p-4">
        <ul>
          <Link className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md" to="/create">
              <FaTh className="text-gray-400" />
              <span>Dashboard</span>
            </Link>
          <Link className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md" to="/addproject">
              <FaPlusSquare className="text-gray-400" />
              <span>Create Project</span>
          </Link>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
            <FaUsers className="text-gray-400" />
            <span>Team Members</span>
          </li>
          <Link className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md" to="/settings">
              <FaCog className="text-gray-400" />
              <span>Settings</span>
          </Link>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="p-4">
        <div className="flex flex-col items-center">
          <span className="text-lg font-semibold">
            <div className="flex flex-col">
              <div className="flex">
                <div className="bg-zinc flex items-center justify-center">
                <Link to="/">
                  <img src={logo} alt="SKRIL logo" width={35} height={35} />
                </Link>
                  <span className="text-white text-[38px] font-bold ml-2 font-montserrat">
                    SKRIL
                  </span>
                </div>
              </div>
            </div>
          </span>
          <div className="flex gap-[9px] mt-6">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="w-30 h-30 hover:opacity-80 transition" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="w-30 h-30 hover:opacity-80 transition" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className="w-30 h-30 hover:opacity-80 transition" />
            </a>
          </div>
          <hr className="w-full border-t border-[#C3C0C0] mt-4 mb-2" />
          <p className="text-xs text-gray-400 mt-2">© 2025 SKRIL All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
