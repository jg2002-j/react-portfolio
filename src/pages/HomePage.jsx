import React from "react";
import Header from "../components/Header";
import bgImage from "../assets/xebelion-15.jpg";
import FeaturedProject from "../components/FeaturedProject";
import Skills from "../components/Skills";
import CurrentTime from "../components/CurrentTime";


//// This should be a welcome landing page that contains:
//// Your Name
//// A headshot of you (or an avatar)
//// Your brand statement
//// Some indication that this is your portfolio site



function HomePage() {
   return (
      <>
         <div className="h-dvh rounded-b-3xl" id="home">
            <img className="homepage-img -z-10" src={bgImage} alt="bg art" />
            <Header />
            <div className="flex justify-center items-center h-1/2">
               <h1 className="font-title pgtitle text-center tracking-[12px] uppercase mix-blend-difference text-slate-200 mx-8 hover:tracking-[2rem] hover:scale-110 ease-in-out duration-1000 select-none">Jai Gandhi</h1>
            </div>
            <div className="grid 2xl:grid-cols-4 2xl:grid-rows-2 grid-cols-1 grid-rows-1 m-5">
               <div className="hidden h-32 2xl:block border-r-[1px] border-b-[1px] border-gray-400 w-full"></div>
               <div className="h-32 flex 2xl:border-r-[1px] 2xl:border-b-[1px] border-gray-400 w-full justify-evenly items-center px-3">
                  <h2 className="text-slate-200 text-md font-title tracking-[0.25rem] px-4 py-2 ease-in-out duration-700 rounded-lg hover:scale-150 bg-[#722e58] bg-opacity-50 hover:bg-[#3f3c74] cursor-default">LONDON</h2>
                  <h2 className="text-slate-200 text-md font-title tracking-[0.25rem] px-4 py-2 ease-in-out duration-700 rounded-lg hover:scale-150 bg-[#722e58] bg-opacity-50 hover:bg-[#3f3c74] cursor-default">{<CurrentTime/>}</h2>
               </div>
               <div className="hidden h-32 2xl:block border-r-[1px] border-b-[1px] border-gray-400 w-full"></div>
               <div className="hidden h-32 2xl:block border-b-[1px] border-gray-400 w-full"></div>
               <div className="hidden h-32 2xl:block border-r-[1px] border-gray-400 w-full"></div>
               <div className="hidden h-32 2xl:block border-r-[1px] border-gray-400 w-full"></div>
               <div className="hidden h-32 2xl:block border-r-[1px] border-gray-400 w-full"></div>
               <div className="hidden h-32 2xl:block w-full"></div>
            </div>
         </div>
         <div className="2xl:mx-60 mt-60 m-10 flex flex-col justify-start items-center" id="experience">
            <h1 className="font-title text-center tracking-[0.7rem] text-6xl bg-gradient-to-r from-red-600 via-indigo-400 to-cyan-700 text-transparent bg-clip-text inline-block">What can I do?</h1>
         </div>
         <div className="2xl:mx-60 m-20 max-w-full flex-col justify-center" id="aboutme">
            <Skills />
         </div>
         <FeaturedProject />
      </>
   )
};

export default HomePage;