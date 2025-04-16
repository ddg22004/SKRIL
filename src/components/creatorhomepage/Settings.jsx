import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const [autoPost, setAutoPost] = useState(true);
  const [connectedPlatforms, setConnectedPlatforms] = useState({
    youtube: true,
    tiktok: false,
    instagram: false,
  });
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const togglePlatform = (platform) => {
    setConnectedPlatforms((prev) => ({
      ...prev,
      [platform]: !prev[platform],
    }));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-black text-white">
      {/* Sidebar (fixed width, full height) */}
      <div className="w-64 bg-zinc-950 h-full md:text-sm sm:text-sm ">
        <Sidebar />
      </div>

      {/* Main Content (flex-1 for remaining width) */}
      <main className="flex-1 overflow-y-auto p-8">
        <h1 className="text-4xl font-bold mb-10">Platform Settings</h1>

        <div className="space-y-10 max-w-4xl">
          {/* Auto-Posting */}
          <div className="bg-zinc-900 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">Auto-Posting</h2>
            <p className="text-zinc-400 mb-4">Automatically post approved videos to selected platforms.</p>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={autoPost}
                onChange={() => setAutoPost(!autoPost)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-zinc-700 peer-checked:bg-zinc-500 rounded-full transition-all"></div>
              <span className="ml-3 text-sm text-zinc-300">{autoPost ? 'Enabled' : 'Disabled'}</span>
            </label>
          </div>

          {/* Platform Connections */}
          <div className="bg-zinc-900 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Connected Platforms</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: 'YouTube', key: 'youtube' },
                { name: 'TikTok', key: 'tiktok' },
                { name: 'Instagram', key: 'instagram' },
              ].map(({ name, key }) => (
                <div key={key} className="bg-zinc-800 p-4 rounded-xl flex flex-col items-center">
                  <p className="mb-2 text-lg font-medium">{name}</p>
                  <button
                    onClick={() => togglePlatform(key)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      connectedPlatforms[key]
                        ? 'bg-zinc-700 hover:bg-zinc-600 text-white'
                        : 'bg-zinc-600 hover:bg-zinc-500 text-white'
                    }`}
                  >
                    {connectedPlatforms[key] ? 'Disconnect' : 'Connect'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* API Credentials */}
          <div className="bg-zinc-900 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">API Credentials</h2>
            <p className="text-zinc-400 mb-4">Update your API tokens for video platform integrations.</p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-1">YouTube API Token</label>
                <input
                  type="text"
                  placeholder="Paste token here"
                  className="w-full p-3 rounded-lg bg-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Instagram Access Token</label>
                <input
                  type="text"
                  placeholder="Paste token here"
                  className="w-full p-3 rounded-lg bg-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
              </div>
              <button
                type="submit"
                className="bg-zinc-700 hover:bg-zinc-600 transition-colors w-full py-3 rounded-lg font-semibold text-white"
              >
                Save Changes
              </button>
            </form>
          </div>

          {/*Logout Button */}
          <div className="bg-zinc-900 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow text-center">
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-500 transition-colors px-6 py-3 rounded-lg font-semibold text-white"
            >
              Logout
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
