import React from 'react';
import { Mail, Linkedin, Instagram, X } from 'lucide-react';
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto border-b border-zinc-700 pb-10 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Left Section */}
        <div>
          <div className="flex items-center mb-4 space-x-2">
            {/* Placeholder logo */}
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
            <span className="font-bold text-lg">SKRIL</span>
          </div>
          <p className="text-sm text-zinc-400 mb-2">
            Our vision is to empower content teams with smart, intuitive collaboration tools.
          </p>
          <p className="text-sm text-zinc-400 mb-4">
            Our mission is to streamline video creation by uniting creators, writers, and editors.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="text-white p-2 bg-zinc-800 rounded-full hover:bg-zinc-700"><Linkedin size={16} /></a>
            <a href="#" className="text-white p-2 bg-zinc-800 rounded-full hover:bg-zinc-700"><Instagram size={16} /></a>
            <a href="#" className="text-white p-2 bg-zinc-800 rounded-full hover:bg-zinc-700"><X size={16} /></a>
          </div>
        </div>

        {/* Quick Access Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Access</h4>
          <ul className="space-y-2 text-zinc-300 text-sm">
            <Link to='/create' className='flex'>Dashboard</Link>
            <Link to='/addproject' className='flex'><a href="#">Create Project</a></Link>
            <Link className='flex'><a href="#">Team Members</a></Link>
           
            <Link className='flex' to='/settings'><a href="#">Settings</a></Link>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-zinc-300 text-sm">
            <li><a href="#">API Docs</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Member Portal</a></li>
            <li><a href="#">Member</a></li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h4 className="font-semibold mb-4">Subscribe to our blog</h4>
          <p className="text-sm text-zinc-400 mb-4">Subscribe now to get the exclusive insights of the SKRIL platform.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full px-4 py-2 rounded-l-full bg-zinc-800 text-sm text-white placeholder:text-zinc-400 border border-zinc-700 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-r-full hover:bg-zinc-300 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto mt-6 px-4 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500">
        <p>© 2025 SKRIL. All Rights Reserved</p>
        <div className="flex items-center mt-2 md:mt-0 space-x-2">
          {/* Repeating logo */}
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
          <span className="text-white font-semibold">SKRIL</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
