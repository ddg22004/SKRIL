import React from 'react';
import image from '../../assets/Dashboard look.png';
import '../../index.css'; // Make sure this includes your gradient-text class

const HeroSection = () => {
    return (
            <section className="bg-black py-32 px-4 md:px-12 lg:px-32 text-primary-text relative overflow-hidden text-center">
            {/* 🔮 Radial Glows */}
            <>
                {/* Blue Circles */}
                <div className="circle-effect" style={{ top: '10vh', left: '5vw', width: '400px', height: '400px', background: '#60A9C1' }} />
                <div className="circle-effect" style={{ top: '50vh', left: '70vw', width: '300px', height: '300px', background: '#60A9C1' }} />
                <div className="circle-effect" style={{ top: '80vh', left: '30vw', width: '250px', height: '250px', background: '#60A9C1' }} />

                {/* Purple Circles */}
                <div className="circle-effect" style={{ top: '20vh', left: '60vw', width: '300px', height: '300px', background: '#7264BB' }} />
                <div className="circle-effect" style={{ top: '70vh', left: '10vw', width: '250px', height: '250px', background: '#7264BB' }} />
                <div className="circle-effect" style={{ top: '90vh', left: '80vw', width: '350px', height: '350px', background: '#7264BB' }} />

                {/* Soft Pink Circles */}
                <div className="circle-effect" style={{ top: '15vh', left: '40vw', width: '450px', height: '450px', background: '#E8E2EC' }} />
                <div className="circle-effect" style={{ top: '60vh', left: '50vw', width: '300px', height: '300px', background: '#E8E2EC' }} />
                <div className="circle-effect" style={{ top: '100vh', left: '25vw', width: '250px', height: '250px', background: '#E8E2EC' }} />
            </>

            <div className="container mx-auto text-center relative z-10">
                {/* 🏷️ SKRIL & Subtitle */}
                <div className="relative inline-block">
                    <h1 className="md:text-[300px], sm:text-[120px] font-extrabold font-montserrat big-gradient-text break-words leading-[0.9] z-20">
                        SKRIL
                    </h1>
                    <p className="text-2xl md:text-4xl lg:text-5xl text-white mt-2">Your Creative Command Center</p>
                </div>

                {/* 📄 Description */}
                <p className="text-secondary-text mt-16 mb-8 lg:text-4xl lg:mx-5">
                    Streamline your video creation journey - collaborate, review and grow your YouTube channel from one powerful dashboard.
                </p>

                <div className="flex justify-center">
                    <p className="text-white mb-8 lg:text-4xl lg:mx-10 font-light">
                        “Paving the way for limitless innovation and growth.”
                    </p>
                </div>

                <div className="flex justify-center">
                    <p className="text-xl text-secondary-text max-w-4xl">
                        With SKRIL, managing scripts, edits and feedback becomes effortless, 
                        so you can focus on creating content that captivates and converts.
                    </p>
                </div>

                {/* 📸 Image at Bottom */}
                <div className="flex justify-center mt-20">
                    <img 
                        src={image} 
                        alt="SKRIL Dashboard look" 
                        className="w-full max-w-[1200px] mx-auto"
                        />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
