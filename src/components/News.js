import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({
  country = "us",
  limit = 8,
  industries = "general",
  setProgress,
  language,
  secretKey,
}) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const updateNews = async () => {
    setProgress(10);
    const url = `https://api.marketaux.com/v1/news/all?filter_entities=true&language=${language}&api_token=${secretKey}&industries=${industries}`;
    setLoading(true);
    let data = await fetch(url);
    setProgress(30);
    let parsedData = await data.json();
    setProgress(70);
    setData(parsedData.data);
    setTotal(parsedData.total);
    setLoading(false);
    setProgress(100);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(industries)} - Newsaly`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://api.marketaux.com/v1/news/all?filter_entities=true&language=${language}&api_token=${secretKey}&industries=${industries}`;

    setPage(page + 1);

    try {
      // Fetch data from the API and parse it as JSON
      const response = await fetch(url);
      const parsedData = await response.json();
      console.log(parsedData.data);
      setData(data.concat(parsedData.data));
      setTotal(parsedData.total);

      // Handle any errors that may be thrown
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="p-4 text-center text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
        Newsaly{" "}
        <span className=" underline underline-page-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          latest news from {capitalizeFirstLetter(industries)}
        </span>
      </h1>

      {loading && <Spinner message={"Fetching news for you"} />}
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={data.length !== total}
        loader={<Spinner message={"Fetching news for you"} />}
      >
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 ">
          {!loading &&
            data.map((element, i) => {
              if (element.image_url == null) return null;
              return (
                <div className="w-full lg:max-w-full lg:flex" key={i}>
                  {
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      image_url={
                        !element.url
                          ? "https://media1.faz.net/ppmedia/aktuell/2440766482/1.8477515/facebook_teaser/alles-automatisch-roboter.jpg"
                          : element.image_url
                      }
                      url={element.url}
                      source={element.source}
                      published_at={element.published_at}
                      // author={element.author}
                    />
                  }
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
  limit: PropTypes.number,
  industries: PropTypes.string,
};

export default News;
