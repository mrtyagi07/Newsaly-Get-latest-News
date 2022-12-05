import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({
  country = "in",
  limit = 8,
  categories = "general",
  setProgress,
  languages,
  secretKey,
}) => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const updateNews = async () => {
    setProgress(10);
    const url = `http://api.mediastack.com/v1/news?country=in&categories=${categories}&access_key=${secretKey}&offset=1&limit=${limit}&languages=${languages}`;
    //`https://newsapi.org/v2/top-headlines?country=${country}&categories=${categories}&apiKey=655d9812aa8d4aba80ac395b4063b6ca&offset=1&limit=${limit}`;
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
    document.title = `${capitalizeFirstLetter(categories)} - Newsaly`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `http://api.mediastack.com/v1/news?country=in&categories=${categories}&access_key=${secretKey}&offset=${offset}&limit=${limit}&languages=${languages}`;

    // const url = `https://newsapi.org/v2/top-headlines?country=${country}&categories=${categories}&apiKey=655d9812aa8d4aba80ac395b4063b6ca&offset=1&limit=${limit}`;
    setOffset(offset + 1);

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
        <span className=" underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          latest news from {capitalizeFirstLetter(categories)}
        </span>
      </h1>

      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={data.length !== total}
        loader={<Spinner />}
      >
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 ">
          {!loading &&
            data.map((element, i) => {
              return (
                <div
                  className="w-full lg:max-w-full lg:flex  "
                  key={element.url}
                >
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={
                      !element.image
                        ? "https://media1.faz.net/ppmedia/aktuell/2440766482/1.8477515/facebook_teaser/alles-automatisch-roboter.jpg"
                        : element.image
                    }
                    newsUrl={element.url}
                    source={element.source}
                    date={element.published_at}
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
  limit: PropTypes.number,
  categories: PropTypes.string,
};

export default News;
