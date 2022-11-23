import React from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import "./input.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <News pageSize={5} />
    </div>
  );
};

export default App;
