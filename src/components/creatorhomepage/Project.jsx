import React from "react";
import Sidebar from "./Sidebar";
import { MoreVertical } from "lucide-react";

const ProjectDetail = () => {
  const creators = ["Creator 1", "Creator 2"];
  const editors = ["Editor 1", "Editor 2", "Editor 3"];

  return (
<>  <div className="absolute w-72 h-72 bg-zinc-600 rounded-full mix-blend-screen blur-3xl opacity-30 bottom-0 left-0 animate-pulse" />
        <div className="absolute w-72 h-72 bg-purple-700 rounded-full mix-blend-screen blur-3xl opacity-30 bottom-0 right-10 animate-pulse" />
        <div className="absolute w-72 h-72 bg-green-700 rounded-full mix-blend-screen blur-3xl opacity-20 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />    <div className="relative flex w-screen h-screen overflow-hidden">

     
      <div className="absolute inset-0 z-0 pointer-events-none">
      
      </div>

      <div className="md:text-sm sm:text-sm"> <Sidebar /></div>{/* 📚 Sidebar */}
     

      {/* 📄 Main Content */}
      <div className="flex-1 bg-gradient-to-b from-black to-zinc-900 text-white relative z-10 overflow-y-auto">
      <div className="absolute w-32 h-32 bg-zinc-600 rounded-full mix-blend-screen blur-2xl opacity-30 top-0 left-0 z-0" />
  <div className="absolute w-32 h-32 bg-purple-700 rounded-full mix-blend-screen blur-2xl opacity-30 bottom-0 right-10 z-0" />
  <div className="absolute w-32 h-32 bg-green-700 rounded-full mix-blend-screen blur-2xl opacity-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0" />

        <div className="max-w-6xl mx-auto py-6 px-4 space-y-6">

          {/* 🔹 Project Info */}
          <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg relative">
            {/* 3 Dots Icon */}
            <MoreVertical className="absolute top-4 right-4 cursor-pointer text-gray-400 hover:text-white" />
            <h2 className="text-2xl font-semibold">Project Name</h2>
            <p className="text-sm text-gray-400 mt-1">
              <b>Date of creation:</b> 12-04-2024
            </p>
            <p className="text-sm text-gray-400">
              <b>Uploading Date:</b> 14-04-2024
            </p>
          </div>

          {/* 🔹 Persons Associated */}
          <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg space-y-4">
            <h3 className="text-lg font-medium">Persons Associated</h3>

            {/* Creators */}
            <div>
  <p className="text-gray-400 mb-2">Creators</p>
  <div className="flex flex-wrap gap-4">
    {creators.map((name, idx) => (
      <div
        key={idx}
        className="w-32 bg-zinc-900 border border-white/20 rounded-xl p-4 flex flex-col items-center shadow-md hover:shadow-lg transition"
      >
        <div className="w-12 h-12 bg-gray-500 rounded-full mb-2" />
        <p className="text-sm text-center">{name}</p>
      </div>
    ))}
  </div>
</div>


            {/* Editors */}
            <div>
  <p className="text-gray-400 mt-6 mb-2">Editors</p>
  <div className="flex flex-wrap gap-4">
    {editors.map((name, idx) => (
      <div
        key={idx}
        className="w-32 bg-zinc-900 border border-white/20 rounded-xl p-4 flex flex-col items-center shadow-md hover:shadow-lg transition"
      >
        <div className="w-12 h-12 bg-gray-500 rounded-full mb-2" />
        <p className="text-sm text-center">{name}</p>
      </div>
    ))}
  </div>
</div>
          </div>

          {/* 🔹 Raw Videos */}
          <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg">
  <h3 className="text-lg font-medium mb-4">Raw Videos</h3>

  <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-zinc-600 rounded-xl cursor-pointer hover:border-zinc-400 transition">
    <input
      type="file"
      accept="video/*"
      multiple
      className="hidden"
      onChange={(e) => {
        const files = Array.from(e.target.files);
        console.log("Uploaded files:", files);
        // Add your logic to store / upload / preview here
      }}
    />
    <p className="text-zinc-400 text-sm">Click to upload or drag & drop video files here</p>
  </label>

  {/* Example preview (if needed) */}
  {/* Replace this with dynamic list if storing uploaded files */}
  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
    {["video1.mp4", "video2.mov"].map((filename, idx) => (
      <div
        key={idx}
        className="bg-zinc-700 p-3 rounded-lg text-sm text-zinc-300 truncate"
      >
        {filename}
      </div>
    ))}
  </div>
</div>

          {/* 🔹 Reviewed Video */}
          <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg h-72 flex items-center justify-center text-gray-400 text-lg">
            Streaming reviewed Video Files here...
          </div>
        </div>
      </div>
    </div></>
  );
};

export default ProjectDetail;
