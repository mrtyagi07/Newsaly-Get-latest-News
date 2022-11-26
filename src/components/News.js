import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({
  country = "in",
  pageSize = 8,
  category = "general",
  setProgress,
}) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  const updateNews = async () => {
    setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=655d9812aa8d4aba80ac395b4063b6ca&page=1&pageSize=${pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    setProgress(30);
    let parsedData = await data.json();
    setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setProgress(100);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(category)} - Newsaly`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  // React.useEffect(() => {
  //   setProgress(0);
  //   setLoading(true);
  //   fetch(
  //     `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=655d9812aa8d4aba80ac395b4063b6ca&page=1&pageSize=${pageSize}`
  //   )
  //     .then((results) => results.json())
  //     .then((data) => {
  //       console.log(data);
  //       setArticles(data.articles);
  //       setTotalResults(data.totalResults);
  //       setLoading(false);
  //       setProgress(100);
  //     });
  // }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=655d9812aa8d4aba80ac395b4063b6ca&page=1&pageSize=${pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div>
      <h1 className="p-4 text-center text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
        Newsaly{" "}
        <span className=" underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          latest news from {capitalizeFirstLetter(category)}
        </span>
      </h1>

      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        News
      >
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 ">
          {!loading &&
            articles.map((element, i) => {
              return (
                <div
                  className="w-full lg:max-w-full lg:flex  "
                  key={element.url}
                >
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
          ;{/* </InfiniteScroll> */}
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
