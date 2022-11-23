import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Pagination from "./Pagination";

const NewsItem = ({
  title,
  description,
  imageUrl,
  newsUrl,
  source,
  date,
  author,
}) => {
  const newDate = new Date(date);
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const realDate = newDate.toLocaleString("en-US", options);
  return (
    <div className="my-20">
      <div className="max-w-sm rounded shadow-lg">
        <img className="w-full h-[250px]" src={imageUrl} alt="News item" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <a
            className="w-[170px] bg-blue-900 text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600"
            href={newsUrl}
          >
            Read more
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </a>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {author ? author : ""}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {source.name ? source.name : ""}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {realDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
