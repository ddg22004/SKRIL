import React from 'react';
import { Mail, Linkedin, Instagram, X } from 'lucide-react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.svg';
import linkedin from '../../assets/linkedin.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';

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
                  <Link to="/" className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
                  </Link>
                  </div>
                </div>
              </div>
            </span>
            <span className="text-white text-[30px] font-bold ml-2 font-montserrat">
              SKRIL
            </span>
          </div>
          <p className="text-sm text-zinc-400 mb-2">
            Our vision is to empower content teams with smart, intuitive collaboration tools.
          </p>
          <p className="text-sm text-zinc-400 mb-4">
            Our mission is to streamline video creation by uniting creators, writers, and editors.
          </p>
          <div className="flex gap-[10px] mt-6">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="w-35 h-35 hover:opacity-80 transition" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="w-35 h-35 hover:opacity-80 transition" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className="w-35 h-35 hover:opacity-80 transition" />
            </a>
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
                  <Link to="/" className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
                  </Link>
                </div>
              </div>
            </div>
          </span>
          <span className="text-white text-[30px] font-bold ml-2 font-montserrat">
            SKRIL
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
