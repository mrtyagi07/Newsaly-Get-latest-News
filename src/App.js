import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Dropdown from "./components/Dropdown";
import NavBar from "./components/NavBar";
import News from "./components/News";
import "./input.css";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const limit = 5,
    languages = "en";
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
                country="in"
                categories="general"
                languages={languages}
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
                country="in"
                categories="sports"
                languages={languages}
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
                country="in"
                categories="business"
                languages={languages}
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
                country="in"
                categories="entertainment"
                languages={languages}
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
                country="in"
                categories="health"
                languages={languages}
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
                country="in"
                categories="science"
                languages={languages}
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
                country="in"
                categories="technology"
                languages={languages}
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
