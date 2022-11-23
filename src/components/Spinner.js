import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div className="absolute bottom-[293px] left-[45rem]">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Spinner;
