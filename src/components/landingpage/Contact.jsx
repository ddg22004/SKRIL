import React from 'react';
import Navbar from './Navbar';

const ContactUs = () => {
  return (
    <div><Navbar/>
    <section className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-6">Get in Touch</h1>
        <p className="text-zinc-400 text-center mb-12 text-lg">
          Have a question, feedback, or just want to say hello? We're always here to help. Fill out the form below or reach out to us directly.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="bg-zinc-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 rounded-lg bg-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded-lg bg-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="What's on your mind?"
                className="w-full p-3 rounded-lg bg-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 transition-colors w-full py-3 rounded-lg font-semibold text-white"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center bg-zinc-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
            <p className="text-zinc-400 mb-4">
              Feel free to reach out to us directly through email or visit our HQ. We're open Monday to Friday, 9AM - 6PM.
            </p>
            <div className="space-y-3 text-zinc-300 text-sm">
              <p><strong>Email:</strong> devdgupta22@gmail.com</p>
              <p><strong>Phone:</strong>+91 9876543210</p>
              <p><strong>Address:</strong> IIIT Surat ,Kholvad</p>
            </div>
          </div>
        </div>
      </div>
    </section></div>
  );
};

export default ContactUs;
