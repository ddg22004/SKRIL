import React from 'react';


const HeroSection = () => {
    return (
        <section className="bg-black py-20 text-primary-text relative overflow-hidden text-center">
            <div className="radial-overlay"></div>
            <div className="absolute top-[10.5vh] left-[1vw] w-[25vw] h-[25vh] lg:top-[5vh] lg:left-[10vw] lg:w-[20vw] lg:h-[20vh] radial-overlay"></div>
            <div className="absolute top-[0vh] left-[71vw] w-[25vw] h-[25vh] lg:top-[2vh] lg:left-[75vw] lg:w-[15vw] lg:h-[15vh] radial-overlay2"></div>
            <div className="absolute top-[50vh] left-[65vw] w-[25vw] h-[25vh] lg:top-[60vh] lg:left-[70vw] lg:w-[20vw] lg:h-[20vh] radial-overlay3"></div>
            <div className="absolute top-[50vh] left-[65vw] w-[25vw] h-[25vh] lg:top-[60vh] lg:left-[70vw] lg:w-[20vw] lg:h-[20vh] radial-overlay3"></div>
            <div className="container mx-auto text-center relative z-10">
                <h1 className="text-9xl font-extrabold gradient-text font-montserrat relative z-20 fade-text mb-24 ">SKRIL</h1>
                <p className="text-7xl absolute top-[70px] text-center lg:left-[190px]">Catchy line Modern analytics</p>
                <p className="text-secondary-text mb-8">Short description goes here.</p>
                <div className="flex justify-center">
                    <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Play Video
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
