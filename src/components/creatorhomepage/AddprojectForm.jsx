import React from 'react'

const AddprojectForm = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-black to-zinc-900 flex justify-center items-center bg-fixed max-h-screen ">
          <div className="bg-black bg-opacity-60  rounded-lg shadow-lg w-96">
            <div className="text-center mb-6 p-4">
             
              <h1 className="text-3xl mt-3 text-gray-200 font-light">SKRIL</h1>
            </div>
            <div className="absolute top-1/2 left-[55vw] h-[35vh] w-[35vh] bg-[radial-gradient(circle,_rgb(70,25,125)_1.2%,_rgba(0,0,0,0)_70%,_rgba(0,0,0,0)_100%)] z-10 rounded-full"></div>
            <div className="absolute top-0 left-[71vw] h-[35vh] w-[35vh] bg-[radial-gradient(circle,_rgb(5,88,20)_10%,_rgba(0,0,0,0)_70%,_rgba(0,0,0,0)_100%)] z-10 rounded-full"></div>
            <div className="absolute top-[10.5vh] left-[1vw] h-[35vh] w-[35vh] bg-[radial-gradient(circle,_rgb(54,54,54)_25%,_rgba(0,0,0,0)_70%,_rgba(0,0,0,0)_100%)] z-10 rounded-full"></div>

            <form>
              <div className="mb-4">
                <label className="block text-gray-400 text-sm mb-2" htmlFor="projectName">Project Name</label>
                <input
                  type="text"
                  id="projectName"
                  placeholder="Project Name"
                  className="w-full p-2 rounded bg-zinc-800 border text-gray-200 focus:outline-none focus:ring focus:ring-gray-600"
                />
              </div>

              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-2">Persons Associated</p>
                <label className="block text-gray-400 text-sm mb-2" htmlFor="creatorEmail">Creators</label>
                <input
                  type="email"
                  id="creatorEmail"
                  placeholder="E-Mail Address: Creator"
                  className="w-full p-2 rounded bg-zinc-800 border text-gray-200 focus:outline-none focus:ring focus:ring-gray-600"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-400 text-sm mb-2" htmlFor="contentWriterEmail">Content Writers</label>
                <input
                  type="email"
                  id="contentWriterEmail"
                  placeholder="E-Mail Address: Content Writer"
                  className="w-full p-2 rounded bg-zinc-800 border text-gray-200 focus:outline-none focus:ring focus:ring-gray-600"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-400 text-sm mb-2" htmlFor="editorEmail">Editors</label>
                <input
                  type="email"
                  id="editorEmail"
                  placeholder="E-Mail Address:  Editor"
                  className="w-full p-2 rounded bg-zinc-800 border text-gray-200 focus:outline-none focus:ring focus:ring-gray-600"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-400 text-sm mb-2" htmlFor="uploadingDate">Uploading Date</label>
                <input
                  type="date"
                  id="uploadingDate"
                  className="w-full p-2 rounded bg-zinc-800 border text-gray-200 focus:outline-none focus:ring focus:ring-gray-600"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-400 text-sm mb-2" htmlFor="rawVideos">Raw Videos</label>
                <input
                  type="file"
                  id="rawVideos"
                  className="w-full p-2 rounded bg-zinc-800 border text-gray-200 focus:outline-none focus:ring focus:ring-gray-600"
                />
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  
                  className="px-4 py-2 rounded bg-zinc-800 border text-white hover:bg-white hover:text-black transition duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-white text-black hover:bg-zinc-600 transition duration-200"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default AddprojectForm