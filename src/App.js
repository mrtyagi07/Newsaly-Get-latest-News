import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";
import "./input.css";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <News key="home" pageSize={5} country="in" category="general" />
            }
          />
          <Route
            path="/general"
            element={
              <News
                key="general"
                pageSize={5}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                key="business"
                pageSize={5}
                country="in"
                category="business"
              />
            }
          />

          <Route
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={5}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News key="health" pageSize={5} country="in" category="health" />
            }
          />

          <Route
            path="/science"
            element={
              <News
                key="science"
                pageSize={5}
                country="in"
                category="science"
              />
            }
          />

          <Route
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={5}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
