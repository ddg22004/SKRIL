import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../landingpage/Footer";
import AddprojectForm from "./AddprojectForm";

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
const ProfileSection = () => {
  return (
    <div className="bg-zinc-900 p-5 flex flex-col items-center m-5 rounded-2xl lg:text-2xl sm:text-md">
      <svg
        width="86"
        height="86"
        viewBox="0 0 86 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_25_1645)">
          <circle cx="43" cy="43" r="30" fill="#D9D9D9" />
        </g>
        <defs>
          <filter
            id="filter0_d_25_1645"
            x="0"
            y="0"
            width="86"
            height="86"
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
              radius="3"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_25_1645"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.346392 0 0 0 0 0.351667 0 0 0 0 0.349557 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_25_1645"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_25_1645"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <h1 className="mt-5 ">John Doe</h1>
      <h1 className="mb-5 sm:text-xs">johndoe@gmail.com</h1>
      <div className="flex flex-col items-center text-center text-black font-bold sm:text-sm">
        <Link
          to="/create"
          className=" bg-zinc-400 p-3 rounded-lg m-2 w-36 hover:bg-white"
        >
          Projects
        </Link>
        <Link className=" bg-zinc-400 p-3 rounded-lg m-2 w-36 hover:bg-white" to='/dashboard'>
          Dashboard
        </Link>
        <Link className=" bg-zinc-400 p-3 rounded-lg m-2 w-36 hover:bg-white">
          Calendar
        </Link>
        <Link className=" bg-zinc-400 p-3 rounded-lg m-2 w-36 hover:bg-white">
          Team Members
        </Link>
        <Link className=" bg-zinc-400 p-3 rounded-lg m-2 w-36 hover:bg-white">
          Settings
        </Link>
      </div>

      <h1 className="lg:mt-20 sm:mt-32">SKRIL</h1>
    </div>
  );
};
const AddProject = () => {
  const [showAddProject, setShowAddProject] = useState(false);
  const [showRest, setshowRest] = useState(true);
  function handleAddproject(){
    setShowAddProject(true);
    setshowRest(false);
  }
  return (
    <div>
      <button onClick={handleAddproject} >
      {
showAddProject && <AddprojectForm />}
        {showRest &&
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
        </svg>}
       
      </button>
    </div>
  );
};
const Project = ({ data }) => {
  return (
    <Link className="bg-zinc-900 m-3 p-2 w-56 h-36 rounded-lg" to='/project'>
      <h1 className="text-center font-bold">{data.name}</h1>
      <div className="flex justify-center">
        <svg
          width="135"
          height="54"
          viewBox="0 0 135 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_35_567)">
            <circle cx="103.124" cy="34" r="23" fill="#D9D9D9" />
          </g>
          <g filter="url(#filter1_d_35_567)">
            <circle cx="87.124" cy="34" r="24" fill="#D9D9D9" />
          </g>
          <g filter="url(#filter2_d_35_567)">
            <circle
              cx="31.1257"
              cy="34.0746"
              r="23"
              transform="rotate(179.671 31.1257 34.0746)"
              fill="#D9D9D9"
            />
          </g>
          <g filter="url(#filter3_d_35_567)">
            <circle
              cx="47.1254"
              cy="33.9713"
              r="24"
              transform="rotate(179.671 47.1254 33.9713)"
              fill="#D9D9D9"
            />
          </g>
          <g filter="url(#filter4_d_35_567)">
            <circle cx="67.124" cy="34" r="26" fill="#D9D9D9" />
          </g>
          <defs>
            <filter
              id="filter0_d_35_567"
              x="72.124"
              y="3"
              width="62"
              height="62"
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
                radius="1"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_35_567"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="3.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.101667 0 0 0 0 0.101667 0 0 0 0 0.101667 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_35_567"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_35_567"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_35_567"
              x="55.124"
              y="2"
              width="64"
              height="64"
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
                radius="1"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_35_567"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="3.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.101667 0 0 0 0 0.101667 0 0 0 0 0.101667 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_35_567"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_35_567"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_35_567"
              x="0.125488"
              y="3.07458"
              width="62.0005"
              height="62"
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
                radius="1"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_35_567"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="3.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.101667 0 0 0 0 0.101667 0 0 0 0 0.101667 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_35_567"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_35_567"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_d_35_567"
              x="15.1255"
              y="1.97131"
              width="64"
              height="64"
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
                radius="1"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_35_567"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="3.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.101667 0 0 0 0 0.101667 0 0 0 0 0.101667 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_35_567"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_35_567"
                result="shape"
              />
            </filter>
            <filter
              id="filter4_d_35_567"
              x="33.124"
              y="0"
              width="68"
              height="68"
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
                radius="1"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_35_567"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="3.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.101667 0 0 0 0 0.101667 0 0 0 0 0.101667 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_35_567"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_35_567"
                result="shape"
              />
            </filter>
          </defs>
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
          <ProfileSection />
        </aside>
        <div className="sm:ml-[32%] mt-5 lg:ml-[20%]">
          <div className=" flex flex-row flex-wrap ">
            <AddProject />
            {Data.map((element, index) => (
              <div className="">
                <Project key={index} data={element} />
              </div>
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Chome;
