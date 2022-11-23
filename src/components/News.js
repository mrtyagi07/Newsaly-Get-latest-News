import React, { useState, useEffect } from "react";
import { getAnimationType } from "react-scroll/modules/mixins/animate-scroll";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

const News = (props) => {
  const [article, setArticle] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState();
  const [loading, setLoading] = useState(false);

  console.log(page);

  const hadlerPrevNext = (count) => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=655d9812aa8d4aba80ac395b4063b6ca&page=${
        page + count
      }&pageSize=${props.pageSize}`
    )
      .then((results) => results.json())
      .then((data) => {
        console.log(data);
        setArticle(data.articles);
      });
    setPage(page + count);
  };

  const handleClickPrev = () => {
    setLoading(true);
    hadlerPrevNext(-1);
    setLoading(false);
  };

  const handleClickNext = () => {
    if (!(page + 1 > Math.ceil(totalResults / props.pageSize))) {
      setLoading(true);
      hadlerPrevNext(1);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=655d9812aa8d4aba80ac395b4063b6ca&page=1&pageSize=${props.pageSize}`
    )
      .then((results) => results.json())
      .then((data) => {
        console.log(data);
        setArticle(data.articles);
        setTotalResults(data.totalResults);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <Spinner />}
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 bg-purple-100 ">
        {!loading &&
          article.map((element, i) => {
            return (
              <div className="w-full lg:max-w-full lg:flex  " key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={
                    !element.urlToImage
                      ? "https://media1.faz.net/ppmedia/aktuell/2440766482/1.8477515/facebook_teaser/alles-automatisch-roboter.jpg"
                      : element.urlToImage
                  }
                  newsUrl={element.url}
                  source={element.source}
                  date={element.publishedAt}
                  author={element.author}
                />
              </div>
            );
          })}
        ;
      </div>
      <div className="flex justify-between p-4">
        <button
          onClick={handleClickPrev}
          className="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white  focus:outline-none disabled:opacity-75"
          disabled={page <= 1}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Previous
        </button>
        <button
          onClick={handleClickNext}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
        >
          Next
          <svg
            aria-hidden="true"
            className="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default News;
