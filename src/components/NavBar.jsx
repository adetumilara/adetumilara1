import React from "react";

const NavBar = () => {
  return (
    <div className="text-white flex gap-[50px] w-[100%]">
      <div>
        <h2>Adetumilara Adetayo</h2>
      </div>
      <div className="w-[50%]">
        <ul className="w-[100%] flex justify-between">
          <li>About Me</li>
          <li>Resume</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Extra</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
