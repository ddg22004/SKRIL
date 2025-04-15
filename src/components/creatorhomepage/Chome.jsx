import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { supabase } from "../../supabaseClient";
import Dashboard from "./Dashboard";

// ⬇ + Add Project Button
const AddProject = () => {
  return (
    <div className="ml-4">
      <svg
        width="244"
        viewBox="0 0 245 158"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_35_252)">
          <rect
            x="13"
            y="13"
            width="224"
            height="161"
            rx="7"
            fill="#494646"
            fillOpacity="0.4"
            shapeRendering="crispEdges"
          />
        </g>
        <g filter="url(#filter1_d_35_252)">
          <path
            d="M113.291 80.7361H133.241C134.008 80.7361 134.591 80.4528 134.991 79.8861C135.391 79.3194 135.591 78.5194 135.591 77.4861C135.591 76.3861 135.391 75.5528 134.991 74.9861C134.591 74.3861 134.008 74.0861 133.241 74.0861H113.291C112.458 74.0861 111.824 74.3861 111.391 74.9861C110.958 75.5528 110.741 76.3861 110.741 77.4861C110.741 78.5194 110.958 79.3194 111.391 79.8861C111.824 80.4528 112.458 80.7361 113.291 80.7361Z"
            fill="#B5B5B5"
          />
        </g>
      </svg>
    </div>
  );
};

// ⬇ Main Chome Component
const Chome = () => {
  const [projects, setProjects] = useState([]);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const fetchUserAndProjects = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) return;

      setUserEmail(user.email);

      const { data: projectsData, error: fetchError } = await supabase
        .from("projects")
        .select("*")
        .eq("creator_email", user.email);

      if (!fetchError) setProjects(projectsData);
    };

    fetchUserAndProjects();
  }, []);

  return (
    <div className="w-full h-screen">
      <aside className="top-0 left-0 bg-zinc-900 h-screen fixed md:text-sm sm:text-sm">
        <Sidebar />
      </aside>

      {/* Glowing Background Effects - Fixed & Breathing */}
      <div style={{
        width: 195.32,
        height: 195.32,
        left: 144.05,
        top: 475.73,
        position: 'fixed',
        background: 'rgba(232, 226, 236, 0.70)',
        boxShadow: '300px 300px 300px',
        borderRadius: '9999px',
        filter: 'blur(150px)',
        zIndex: 0,
        animation: 'breathe 6s ease-in-out infinite',
      }} />
      <div style={{
        width: 476,
        height: 477,
        left: 702,
        top: 667,
        position: 'fixed',
        background: '#60A9C1',
        boxShadow: '500px 500px 500px',
        borderRadius: '9999px',
        filter: 'blur(250px)',
        zIndex: 0,
        animation: 'breathe 8s ease-in-out infinite',
      }} />
      <div style={{
        width: 340.12,
        height: 340.12,
        left: 833.69,
        top: 53.52,
        position: 'fixed',
        background: '#7264BB',
        boxShadow: '300px 300px 300px',
        borderRadius: '9999px',
        filter: 'blur(150px)',
        zIndex: 0,
        animation: 'breathe 7s ease-in-out infinite',
      }} />

      {/* Content */}
      <div className="sm:ml-[32%] mt-5 lg:ml-[20%]">
        <Dashboard projects={projects} />
      </div>
    </div>
  );
};

export default Chome;
