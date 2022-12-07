import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Dropdown from "./components/Dropdown";
import NavBar from "./components/NavBar";
import News from "./components/News";
import "./input.css";
import LoadingBar from "react-top-loading-bar";
import NavResponsive from "./components/NavResponsive";

const App = () => {
  const limit = 5,
    language = "en";
  const secretKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                secretKey={secretKey}
                key="home"
                limit={limit}
                locale="in"
                categories="general"
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
                locale="in"
                categories="sports"
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
                locale="in"
                categories="business"
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
                locale="in"
                categories="entertainment"
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
                locale="in"
                categories="health"
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
                locale="in"
                categories="science"
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
                locale="in"
                categories="technology"
                language={language}
              />
            }
          />
          <Route path="/about" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
