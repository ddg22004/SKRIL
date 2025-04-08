import React from 'react';
import Navbar from './Navbar';

const AboutPage = () => {
  return (
    <div><Navbar/>
    <section className="bg-black py-20 text-white">
      
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-6">About SKRIL</h1>
        <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12 text-lg">
          SKRIL is your all-in-one platform for content collaboration, project management, and video production. We empower creators, teams, and organizations to work smarter, faster, and more efficiently through seamless tools and intuitive workflows.
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-zinc-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-zinc-400">
              At SKRIL, we aim to revolutionize the content creation space by bridging the gap between ideation and execution. Our platform streamlines communication, project management, and asset delivery—so you can focus on creativity.
            </p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">Why SKRIL?</h2>
            <p className="text-zinc-400">
              Unlike traditional tools, SKRIL is built for modern creative teams. We provide real-time collaboration, role-based workflows, and media integration—all in one unified platform.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>  );
};

export default AboutPage;
