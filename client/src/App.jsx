import React from "react";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Business from "./components/Business";

function App() {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className="flex justify-center items-start px-6 md:px-16 ">
          <div className="w-full">
            <Navbar />
          </div>
        </div>
        <div className="bg-primary flex justify-center items-start w-full">
            <div className="w-full">
              <Hero />
            </div>
        </div>

        <div className="bg-primary flex justify-center items-center w-full md:px-16 px-6">
            <div className="w-full">
              <Stats />
              <Business />
              Stats
              Stats
              Stats
              Stats
              Stats
              Stats
              Stats
              Stats
            </div>
        </div> 
      </div>
    </>
  );
}

export default App;
