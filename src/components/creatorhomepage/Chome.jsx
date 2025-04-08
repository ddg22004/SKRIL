import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../landingpage/Footer";
import Sidebar from "./Sidebar";



const Data = [
  {
    name: "Project 1",
    date: "12/12/2021",
  },
  { name: "Project 2", date: "12/12/2021" },
  {
    name: "Project 1",
    date: "12/12/2021",
  },
  { name: "Project 2", date: "12/12/2021" },
  {
    name: "Project 1",
    date: "12/12/2021",
  },
  { name: "Project 2", date: "12/12/2021" },
  {
    name: "Project 1",
    date: "12/12/2021",
  },
  { name: "Project 2", date: "12/12/2021" },
  {
    name: "Project 1",
    date: "12/12/2021",
  },
  { name: "Project 2", date: "12/12/2021" },
];
const Dashboard = () => {
  const projects = new Array(7).fill("Project Name");

  return (
    <div className="flex-1 p-6 bg-gradient-to-b from-black to-zinc min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* + Add Project card - already done by you */}

        {/* Project Cards */}
        {projects.map((project, index) => (
          <Link
            key={index}
            className="bg-zinc-900 rounded-2xl p-4 shadow-md relative h-40 flex flex-col justify-between"
          to='/project'>
            {/* Top: Project Name and Status Dot */}
            <div className="flex justify-between items-center">
              <h2 className="text-white text-lg font-semibold">{project}</h2>
              <span className="h-3 w-3 bg-green-400 rounded-full"></span>
            </div>
            <div className="items-center flex justify-center">
            <svg width="135" height="78" viewBox="0 0 135 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_146_307)">
<circle cx="103.124" cy="39" r="23" fill="#D9D9D9"/>
</g>
<g filter="url(#filter1_d_146_307)">
<circle cx="87.124" cy="39" r="24" fill="#D9D9D9"/>
</g>
<g filter="url(#filter2_d_146_307)">
<circle cx="31.1257" cy="39.0746" r="23" transform="rotate(179.671 31.1257 39.0746)" fill="#D9D9D9"/>
</g>
<g filter="url(#filter3_d_146_307)">
<circle cx="47.1254" cy="38.9713" r="24" transform="rotate(179.671 47.1254 38.9713)" fill="#D9D9D9"/>
</g>
<g filter="url(#filter4_d_146_307)">
<circle cx="67" cy="39" r="26" fill="#D9D9D9"/>
</g>
<path d="M73.2406 28.6C73.2406 25.2595 70.3411 22.36 67.0006 22.36C63.6601 22.36 60.7606 25.2595 60.7606 28.6C60.7606 31.9405 63.6601 34.84 67.0006 34.84C70.3411 34.84 73.2406 31.9405 73.2406 28.6ZM67.0006 36.92C61.5343 36.92 56.6006 42.8168 56.6006 50.1447C56.6006 57.4725 77.4006 57.4725 77.4006 50.1447C77.4006 42.8168 72.4668 36.92 67.0006 36.92Z" fill="#343434"/>
<defs>
<filter id="filter0_d_146_307" x="72.124" y="8" width="62" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_146_307"/>
<feOffset/>
<feGaussianBlur stdDeviation="3.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.101667 0 0 0 0 0.101667 0 0 0 0 0.101667 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_146_307"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_146_307" result="shape"/>
</filter>
<filter id="filter1_d_146_307" x="55.124" y="7" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_146_307"/>
<feOffset/>
<feGaussianBlur stdDeviation="3.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.101667 0 0 0 0 0.101667 0 0 0 0 0.101667 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_146_307"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_146_307" result="shape"/>
</filter>
<filter id="filter2_d_146_307" x="0.125488" y="8.07458" width="62.0005" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_146_307"/>
<feOffset/>
<feGaussianBlur stdDeviation="3.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.101667 0 0 0 0 0.101667 0 0 0 0 0.101667 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_146_307"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_146_307" result="shape"/>
</filter>
<filter id="filter3_d_146_307" x="15.1255" y="6.97131" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_146_307"/>
<feOffset/>
<feGaussianBlur stdDeviation="3.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.101667 0 0 0 0 0.101667 0 0 0 0 0.101667 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_146_307"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_146_307" result="shape"/>
</filter>
<filter id="filter4_d_146_307" x="28" y="0" width="78" height="78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_146_307"/>
<feOffset/>
<feGaussianBlur stdDeviation="5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.346392 0 0 0 0 0.351667 0 0 0 0 0.349557 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_146_307"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_146_307" result="shape"/>
</filter>
</defs>
</svg>
</div>
           
          </Link>
        ))}
      </div>
    </div>
  );
};

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
              fill-opacity="0.4"
              shape-rendering="crispEdges"
            />
          </g>
          <g filter="url(#filter1_d_35_252)">
            <path
              d="M126.541 86.9861C126.508 87.8861 126.191 88.5694 125.591 89.0361C124.991 89.5028 124.158 89.7361 123.091 89.7361C121.924 89.7361 121.024 89.5028 120.391 89.0361C119.791 88.5694 119.491 87.8861 119.491 86.9861C119.491 86.2528 119.491 85.2361 119.491 83.9361C119.524 82.6361 119.541 81.2194 119.541 79.6861C119.574 78.1194 119.591 76.5528 119.591 74.9861C119.624 73.4194 119.641 71.9861 119.641 70.6861C119.641 69.3861 119.641 68.3694 119.641 67.6361C119.608 66.7028 119.891 66.0194 120.491 65.5861C121.091 65.1194 121.958 64.8861 123.091 64.8861C124.258 64.8861 125.124 65.1194 125.691 65.5861C126.291 66.0194 126.608 66.7028 126.641 67.6361C126.674 68.3028 126.691 69.2528 126.691 70.4861C126.691 71.7194 126.674 73.1194 126.641 74.6861C126.641 76.2194 126.624 77.7861 126.591 79.3861C126.591 80.9528 126.574 82.4194 126.541 83.7861C126.541 85.1194 126.541 86.1861 126.541 86.9861ZM113.291 80.7361C112.458 80.7361 111.824 80.4528 111.391 79.8861C110.958 79.3194 110.741 78.5194 110.741 77.4861C110.741 76.3861 110.958 75.5528 111.391 74.9861C111.824 74.3861 112.458 74.0861 113.291 74.0861C114.158 74.0861 115.341 74.0861 116.841 74.0861C118.374 74.0861 120.008 74.1028 121.741 74.1361C123.474 74.1361 125.141 74.1528 126.741 74.1861C128.374 74.2194 129.774 74.2528 130.941 74.2861C132.108 74.2861 132.874 74.2861 133.241 74.2861C134.008 74.2861 134.591 74.5694 134.991 75.1361C135.391 75.7028 135.591 76.5028 135.591 77.5361C135.591 78.6028 135.391 79.4194 134.991 79.9861C134.591 80.5528 134.008 80.8361 133.241 80.8361C133.008 80.8361 132.341 80.8361 131.241 80.8361C130.174 80.8361 128.824 80.8361 127.191 80.8361C125.558 80.8028 123.858 80.7861 122.091 80.7861C120.358 80.7528 118.691 80.7361 117.091 80.7361C115.524 80.7361 114.258 80.7361 113.291 80.7361Z"
              fill="#B5B5B5"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_35_252"
              x="0"
              y="0"
              width="245"
              height="157.4"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="6"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_35_252"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="3.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.19475 0 0 0 0 0.205 0 0 0 0 0.199875 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_35_252"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_35_252"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_35_252"
              x="104.741"
              y="58.8861"
              width="36.8501"
              height="36.85"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.515 0 0 0 0 0.508133 0 0 0 0 0.508133 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_35_252"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_35_252"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
    </div>
  );
};
const Project = ({ data }) => {
  return (
    <Link className=" m-3 p-2 w-56 h-36 rounded-lg" to='/project'>
      <h1 className="text-center font-bold">{data.name}</h1>
      <div className="flex justify-center">
      <svg width="219" height="132" viewBox="0 0 219 132" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="219" height="131.4" rx="7" fill="#494646" fill-opacity="0.25"/>
</svg>

      </div>
      <h1 className="text-center">{data.date}</h1>
    </Link>
  );
};
const Chome = () => {
  return (
    <>
    
      <div className="w-full h-screen">
        <aside className="top-0 left-0 bg-zinc-900 h-screen fixed md:text-sm sm:text-sm">
          <Sidebar />
        </aside>
        <div className="absolute w-72 h-72 bg-zinc-600 rounded-full mix-blend-screen blur-3xl opacity-30 bottom-0 left-0 animate-pulse" />
  <div className="absolute w-72 h-72 bg-purple-700 rounded-full mix-blend-screen blur-3xl opacity-30 bottom-0 right-10 animate-pulse" />
  <div className="absolute w-72 h-72 bg-green-700 rounded-full mix-blend-screen blur-3xl opacity-20 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />

        <div className="sm:ml-[32%] mt-5 lg:ml-[20%]">
            <Link to='/addproject' className="my-5 rounded-sm"><AddProject/></Link>
            <Dashboard />
          
        </div>
      </div>
    </>
  );
};

export default Chome;
