import React from 'react';
import { FaRegUserCircle, FaTh, FaPlusSquare,  FaUsers, FaCog } from 'react-icons/fa';
import { FaLinkedinIn, FaInstagram, FaX } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-64 bg-gradient-to-b from-zinc-900 to-zinc-700 text-white">
      {/* Top Section */}
      <div className="p-4 flex items-center justify-center">
        <span className="text-lg font-semibold">
          <div className="flex flex-col">
            <div className="flex">
              <div className="bg-zinc flex items-center justify-center">
                <svg width="50" height="50" viewBox="0 0 100 100">
                  <g transform="translate(50,50)">
                    <circle cx="0" cy="-30" r="7" fill="#E0FFFF" />
                    <path d="M -25,10 L 0,-10 L 25,10" stroke="#E0FFFF" strokeWidth="8" strokeLinecap="round" />
                  </g>
                  <g transform="translate(50,50) rotate(90)">
                    <circle cx="0" cy="-30" r="7" fill="#ADD8E6" />
                    <path d="M -25,10 L 0,-10 L 25,10" stroke="#ADD8E6" strokeWidth="8" strokeLinecap="round" />
                  </g>
                  <g transform="translate(50,50) rotate(180)">
                    <circle cx="0" cy="-30" r="7" fill="#9370DB" />
                    <path d="M -25,10 L 0,-10 L 25,10" stroke="#9370DB" strokeWidth="8" strokeLinecap="round" />
                  </g>
                  <g transform="translate(50,50) rotate(270)">
                    <circle cx="0" cy="-30" r="7" fill="#D8BFD8" />
                    <path d="M -25,10 L 0,-10 L 25,10" stroke="#D8BFD8" strokeWidth="8" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <FaRegUserCircle className="text-gray-400" />
          <div>
            <p className="text-sm">Bhumil Rangholiya</p>
            <p className="text-xs text-gray-400">bhumi.rangholiya@gmail.com</p>
          </div>
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
          <Link className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
             to="/settings">
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
                  <svg width="50" height="50" viewBox="0 0 100 100">
                    <g transform="translate(50,50)">
                      <circle cx="0" cy="-30" r="7" fill="#E0FFFF" />
                      <path d="M -25,10 L 0,-10 L 25,10" stroke="#E0FFFF" strokeWidth="8" strokeLinecap="round" />
                    </g>
                    <g transform="translate(50,50) rotate(90)">
                      <circle cx="0" cy="-30" r="7" fill="#ADD8E6" />
                      <path d="M -25,10 L 0,-10 L 25,10" stroke="#ADD8E6" strokeWidth="8" strokeLinecap="round" />
                    </g>
                    <g transform="translate(50,50) rotate(180)">
                      <circle cx="0" cy="-30" r="7" fill="#9370DB" />
                      <path d="M -25,10 L 0,-10 L 25,10" stroke="#9370DB" strokeWidth="8" strokeLinecap="round" />
                    </g>
                    <g transform="translate(50,50) rotate(270)">
                      <circle cx="0" cy="-30" r="7" fill="#D8BFD8" />
                      <path d="M -25,10 L 0,-10 L 25,10" stroke="#D8BFD8" strokeWidth="8" strokeLinecap="round" />
                    </g>
                  </svg>
                  SKRIL
                </div>
              </div>
            </div>
          </span>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="text-gray-400 hover:text-white" /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-gray-400 hover:text-white" /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaX className="text-gray-400 hover:text-white" /></a>
          </div>
          <p className="text-xs text-gray-400 mt-2">© 2025 SKRIL All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
