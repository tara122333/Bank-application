import React from "react";

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className="flex justify-center items-center px-6 md:px-16 ">
          <div className="xl:max-w-[1280px] w-full">
            <Navbar />
          </div>
        </div>


        <div className="bg-primary flex justify-center items-start">
            <div className="xl:max-w-[1280px] w-full">
              Hero
            </div>
        </div>
          <h1 className="text-red-500" >This is heading tag</h1>
      </div>
    </>
  );
}

export default App;
