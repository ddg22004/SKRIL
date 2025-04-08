import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const FeatureCard = ({ title, description, showExplore }) => {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow">
      <div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-zinc-400 text-sm">{description}</p>
      </div>
      {showExplore && (
        <div className="mt-4 flex items-center gap-1 text-sm text-zinc-300 hover:text-white cursor-pointer">
          Explore More <ArrowUpRight className="w-4 h-4" />
        </div>
      )}
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="bg-black py-16 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Diverse Features</h2>
        <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
          Explore the powerful tools SKRIL offers to streamline your content collaboration and video production process.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            title="Smart Project Management"
            description="Easily create and manage content projects with a streamlined interface. Assign roles to creators, writers, and editors, set deadlines, and track progress—all from a centralized dashboard. Enhance organization with clearly structured project tiles and visual indicators for quick status updates."
            
          />
          <FeatureCard
            title="Seamless Collaboration Hub"
            description="Enable real-time collaboration across your team. Invite team members using email, assign tasks, and allow them to upload and access files directly within the project. This fosters transparency, accountability, and efficient content development from concept to completion."
          />
          <FeatureCard
            title="Content Lifecycle Visibility"
            description="Track every stage of a content project—from idea submission to final delivery. With clear timestamps, team roles, and visual project boards, SKRIL makes it easy to monitor content progress, streamline revisions, and meet deadlines with confidence."
            showExplore
          />
          <FeatureCard
            title="Centralized Media Upload & Review"
            description="Upload raw video files directly to the platform, making them instantly accessible to editors. Revised videos can be streamed directly within the platform for quick reviews and feedback. Keep all assets and progress in one place for a smooth workflow."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
