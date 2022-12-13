import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import News from "./components/News";
import "./input.css";
import LoadingBar from "react-top-loading-bar";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

const App = () => {
  const limit = 5,
    language = "en",
    country = "us";
  const secretKey = process.env.REACT_APP_NEWS_API_TOKEN;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <NavBar />

        {/* <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                secretKey={secretKey}
                key="home"
                limit={limit}
                country={country}
                industries="Technology"
                language={language}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                secretKey={secretKey}
                key="sports"
                limit={limit}
                country={country}
                industries="sports"
                language={language}
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                secretKey={secretKey}
                key="business"
                limit={limit}
                country={country}
                industries="business"
                language={language}
              />
            }
          />

          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                secretKey={secretKey}
                key="entertainment"
                limit={limit}
                country={country}
                industries="entertainment"
                language={language}
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                secretKey={secretKey}
                key="health"
                limit={limit}
                country={country}
                industries="health"
                language={language}
              />
            }
          />

          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                secretKey={secretKey}
                key="science"
                limit={limit}
                country={country}
                industries="science"
                language={language}
              />
            }
          />

          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                secretKey={secretKey}
                key="technology"
                limit={limit}
                country={country}
                industries="technology"
                language={language}
              />
            }
          />
          <Route path="/about" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </Router>
    </div>
  );
};

export default App;
