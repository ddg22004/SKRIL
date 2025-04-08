import React from "react";
import { Link } from "react-router-dom";

const AddprojectForm = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-black to-black flex justify-center items-center bg-fixed max-h-screen m-5">
      {/* Background Radial Gradients */}
      <div className="absolute top-[0.5vh] left-[55vw] h-[55vh] w-[35vh] bg-[radial-gradient(circle,_rgb(70,25,125)_1.2%,_rgba(0,0,0,0)_70%)] z-10 rounded-full"></div>
      <div className="absolute top-[45vh] left-[35vw] h-[45vh] w-[75vh] bg-[radial-gradient(circle,_rgb(5,88,20)_10%,_rgba(0,0,0,0)_50%)] z-10 rounded-full"></div>
      <div className="absolute top-[35.5vh] left-[10vw] h-[55vh] w-[35vh] bg-[radial-gradient(circle,_rgb(54,54,54)_25%,_rgba(0,0,0,0)_70%)] z-10 rounded-full"></div>

      {/* Form Container */}
      <div className="relative rounded-lg shadow-lg w-[500px] z-20 bg-zinc-800/40 backdrop-blur-md border border-gray-700">
        <div className="flex flex-col items-center ">
          {/* Logo */}
          <div className="bg-zinc rounded-full">
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

        {/* Form */}
        <form className="p-4">
          {/* Project Name */}
          <div className="mb-4">
            <label htmlFor="projectName" className="block text-gray-400 text-sm mb-2">Project Name</label>
            <input type="text" id="projectName" placeholder="Project Name" className="w-full p-2 rounded bg-zinc-700 border-none text-gray-200 focus:outline-none focus:ring focus:ring-gray-600" />
          </div>

          {/* Creators */}
          <div className="mb-2">
            <label htmlFor="creatorEmail" className="block text-gray-400 text-sm mb-2">Creators</label>
            <input type="email" id="creatorEmail" placeholder="E-Mail Address: Creator" className="w-full p-2 rounded bg-zinc-700 border-none text-gray-200 focus:outline-none focus:ring focus:ring-gray-600" />
          </div>

          {/* Content Writers */}
          <div className="mb-2">
            <label htmlFor="contentWriterEmail" className="block text-gray-400 text-sm mb-2">Content Writers</label>
            <input type="email" id="contentWriterEmail" placeholder="E-Mail Address: Content Writer" className="w-full p-2 rounded bg-zinc-700 border-none text-gray-200 focus:outline-none focus:ring focus:ring-gray-600" />
          </div>

          {/* Editors */}
          <div className="mb-2">
            <label htmlFor="editorEmail" className="block text-gray-400 text-sm mb-2">Editors</label>
            <input type="email" id="editorEmail" placeholder="E-Mail Address: Editor" className="w-full p-2 rounded bg-zinc-700 border-none text-gray-200 focus:outline-none focus:ring focus:ring-gray-600" />
          </div>

          {/* Uploading Date */}
          <div className="mb-2">
            <label htmlFor="uploadingDate" className="block text-gray-400 text-sm mb-2">Uploading Date</label>
            <input type="date" id="uploadingDate" className="w-full p-2 rounded bg-zinc-700 border-none text-gray-200 focus:outline-none focus:ring focus:ring-gray-600" />
          </div>

          {/* Raw Videos */}
          <div className="mb-2">
            <label htmlFor="rawVideos" className="block text-gray-400 text-sm mb-2">Raw Videos</label>
            <input type="file" id="rawVideos" className="w-full p-2 rounded bg-zinc-700 border-none text-gray-200 focus:outline-none focus:ring focus:ring-gray-600" />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <Link to="/create" className="px-4 py-2 rounded bg-zinc-700 text-white hover:bg-zinc-600 transition duration-200">Cancel</Link>
            <button type="submit" className="px-4 py-2 rounded bg-zinc-800 text-white hover:bg-zinc-600 transition duration-200">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddprojectForm;
