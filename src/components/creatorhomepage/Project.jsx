import React from "react";
import Sidebar from "./Sidebar";
import { MoreVertical } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";


const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching project:", error.message);
      } else {
        setProject(data);
      }
    };

    fetchProject();
  }, [id]);
  if (!project) return <div className="text-white p-8">Loading project...</div>;

  return (
    <>
      {/* Glows */}
      <div className="absolute w-72 h-72 bg-zinc-600 rounded-full mix-blend-screen blur-3xl opacity-30 bottom-0 left-0 animate-pulse" />
      <div className="absolute w-72 h-72 bg-purple-700 rounded-full mix-blend-screen blur-3xl opacity-30 bottom-0 right-10 animate-pulse" />
      <div className="absolute w-72 h-72 bg-green-700 rounded-full mix-blend-screen blur-3xl opacity-20 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />

      <div className="relative flex w-screen h-screen overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none" />
        <div className="md:text-sm sm:text-sm">
          <Sidebar />
        </div>

        <div className="flex-1 bg-gradient-to-b from-black to-zinc-900 text-white relative z-10 overflow-y-auto">
          {/* Extra glow */}
          <div className="absolute w-32 h-32 bg-zinc-600 rounded-full mix-blend-screen blur-2xl opacity-30 top-0 left-0 z-0" />
          <div className="absolute w-32 h-32 bg-purple-700 rounded-full mix-blend-screen blur-2xl opacity-30 bottom-0 right-10 z-0" />
          <div className="absolute w-32 h-32 bg-green-700 rounded-full mix-blend-screen blur-2xl opacity-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0" />

          <div className="max-w-6xl mx-auto py-6 px-4 space-y-6">
            {/* 🔹 Project Info */}
            <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg relative">
              <MoreVertical className="absolute top-4 right-4 cursor-pointer text-gray-400 hover:text-white" />
              <h2 className="text-2xl font-semibold">{project.name}</h2>
              <p className="text-sm text-gray-400 mt-1">
                <b>Date of creation:</b>{" "}
                {new Date(project.created_at).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-400">
                <b>Uploading Date:</b> {project.uploading_date}
              </p>
            </div>

            {/* 🔹 Persons Associated */}
            <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg space-y-4">
              <h3 className="text-lg font-medium">Persons Associated</h3>

              {/* Creator */}
              <div>
                <p className="text-gray-400 mb-2">Creators</p>
                <div className="flex flex-wrap gap-4">
                  <div className="w-32 bg-zinc-900 border border-white/20 rounded-xl p-4 flex flex-col items-center shadow-md hover:shadow-lg transition">
                    <img
                      src={project.creator_avatar}
                      alt="Avatar"
                      className="w-12 h-12 rounded-full mb-2"
                    />
                    <p className="text-sm text-center">{project.creator_name}</p>
                    <p className="text-xs text-center text-zinc-400">{project.creator_email}</p>
                  </div>
                </div>
              </div>

              {/* Content Writer */}
              <div>
                <p className="text-gray-400 mt-6 mb-2">Content Writers</p>
                <div className="flex flex-wrap gap-4">
                  <div className="w-32 bg-zinc-900 border border-white/20 rounded-xl p-4 flex flex-col items-center shadow-md hover:shadow-lg transition">
                    <img
                      src={project.content_writer_avatar}
                      alt="Avatar"
                      className="w-12 h-12 rounded-full mb-2"
                    />
                    <p className="text-sm text-center">{project.content_writer_name}</p>
                    <p className="text-xs text-center text-zinc-400">
                      {project.content_writer_email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Editor */}
              <div>
                <p className="text-gray-400 mt-6 mb-2">Editors</p>
                <div className="flex flex-wrap gap-4">
                  <div className="w-32 bg-zinc-900 border border-white/20 rounded-xl p-4 flex flex-col items-center shadow-md hover:shadow-lg transition">
                    <img
                      src={project.editor_avatar}
                      alt="Avatar"
                      className="w-12 h-12 rounded-full mb-2"
                    />
                    <p className="text-sm text-center">{project.editor_name}</p>
                    <p className="text-xs text-center text-zinc-400">{project.editor_email}</p>
                  </div>
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
                  }}
                />
                <p className="text-zinc-400 text-sm">
                  Click to upload or drag & drop video files here
                </p>
              </label>

              {/* Example preview (optional) */}
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
      </div>
    </>
  );
};

export default ProjectDetail;