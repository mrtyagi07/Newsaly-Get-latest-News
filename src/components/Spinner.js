import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div className="flex justify-center  p-2">
      <img src={loading} alt="loading" className="" />
    </div>
  );
};

export default Spinner;
