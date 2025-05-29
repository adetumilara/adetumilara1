import React from "react";

import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";

const App = () => {
  return (
    <>
      <div className="bg-stone-900 flex  py-4  w-[100%]">
        <NavBar />
      </div>
      <MainSection />
    </>
  );
};

export default App;
