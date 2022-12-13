import Link from "react-scroll/modules/components/Link";
import React, { useState } from "react";

import { IoMdSearch } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="mt-5 flex w-full gap-2 md:gap-5">
      <div className="flex w-full items-center justify-start rounded-md border-none bg-white px-2 outline-none focus-within:shadow-sm">
        <IoMdSearch fontSize={21} className="ml-1" />
        <input
          type="text"
          // onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          //value={searchTerm}
          // onFocus={() => navigate("/search")}
          className="w-full bg-gray-200 p-2 outline-none"
        />
      </div>
      <div className="flex gap-3"></div>
    </div>
  );
};

export default NavBar;
