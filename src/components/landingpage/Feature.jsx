import React from "react";
import FeaturesSection from "./Featuresection";
import Navbar from "./Navbar";
const FeaturesPage = () => {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="pt-24 pb-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Explore SKRIL's Features</h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            SKRIL combines cutting-edge tech and intuitive design to streamline
            every step of your content process—from start to finish.
          </p>
        </div>
        <div className="mt-16">
          <FeaturesSection />
        </div>
      </div>
    </main>
  );
};

export default FeaturesPage;
