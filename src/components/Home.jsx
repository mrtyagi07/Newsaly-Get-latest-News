import Sidebar from "./Sidebar";
import React, { useState } from "react";

const Home = () => {
  const [toggleSideBar, setToggleSidebar] = useState(false);
  return (
    <div>
      <div className="hidden h-screen flex-initial md:flex">
        <Sidebar closeToggl={setToggleSidebar} />
      </div>
    </div>
  );
};

export default Home;
