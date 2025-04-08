import React from 'react';
import image from '../../assets/Screenshot 2025-04-07 204653.png';

const HeroSection = () => {
    return (
        <section className="bg-black py-20 text-primary-text relative overflow-hidden text-center">
            {/* 🔮 Radial Glows */}
            <div className="radial-overlay"></div>
            <div className="absolute top-[10.5vh] left-[1vw] w-[25vw] h-[25vh] lg:top-[5vh] lg:left-[10vw] lg:w-[20vw] lg:h-[20vh] radial-overlay"></div>
            <div className="absolute top-[0vh] left-[71vw] w-[25vw] h-[25vh] lg:top-[2vh] lg:left-[75vw] lg:w-[15vw] lg:h-[15vh] radial-overlay2"></div>
            <div className="absolute top-[50vh] left-[65vw] w-[25vw] h-[25vh] lg:top-[60vh] lg:left-[70vw] lg:w-[20vw] lg:h-[20vh] radial-overlay3"></div>

            <div className="container mx-auto text-center relative z-10">
                {/* 🏷️ Title & Text */}
                <h1 className="text-9xl font-extrabold gradient-text font-montserrat relative z-20 fade-text mb-24 sm:mb-8">
                    SKRIL
                </h1>
                <p className="text-9xl absolute top-[70px] text-center lg:left-[450px] md:text-4xl sm:text-4xl sm:top-[96px] sm:left-[50px]">
                    Your Creative Command Center
                </p>
                <p className="text-secondary-text mb-8 lg:text-4xl lg:mx-5">
                    Streamline your video creation journey - collaborate, review and grow your YouTube channel from one powerful dashboard.
                </p>
                <div className="flex justify-center">
                    <p className="text-white mb-8 lg:text-4xl lg:mx-10 font-light">
                        “Paving the way for limitless innovation and growth.”
                    </p>
                </div>
                <div className="flex justify-center">
                    <p className="text-xl text-secondary-text">
                        With SKRIL, managing scripts, edits and feedback becomes effortless, 
                        so you can focus on creating content that captivates and converts.
                    </p>
                </div>

                {/* 📸 Centered Image at Bottom */}
                <div className="flex justify-center mt-20">
                    <img 
                        src={image} 
                        alt="SKRIL Dashboard Screenshot" 
                        className="max-w-full w-[90%] md:w-[80%] lg:w-[60%] rounded-2xl shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
