import React from "react";
import NewsItem from "./NewsItem";

const News = () => {
  return (
    <div>
      <div name="news" className="w-full md:h-screen bg-violet-200 ">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 text-gray-900 border-rose-900">
              News
            </p>
            <p className="py-6"> Checkout Latest News</p>
          </div>
          {/*  CONTAINER */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* GRID ITEM */}
            <div
              //style={{ backgroundImage: `url(${WorkImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <p>Hi</p>
              {/* HOVER EFFECTS */}
            </div>
            <div
              // style={{ backgroundImage: `url(${})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* HOVER EFFECTS */}
            </div>
          </div>
        </div>
      </div>
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  );
};

export default News;
