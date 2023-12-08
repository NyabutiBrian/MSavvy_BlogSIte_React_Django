import Articles from "./pages/Articles";
import Category from "./pages/Category";
import Landing from "./pages/Landing";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from "react";
import ReactGA from 'react-ga';
import { inject } from '@vercel/analytics';
inject();

const GTRACKING_ID = "G-8QP9HWVQWK"; // G Tracking id
ReactGA.initialize('GTRACKING_ID');


function App() {
  return (
    <Router>
      <StrictMode>
        <Routes>
          <Route path="/" element={ <Landing /> } />
          <Route path="/category/:id" element={ <Category /> } />
          <Route path="/article/:id" element={ <Articles /> } />
        </Routes>
      </StrictMode>
    </Router>
  );
}

export default App;
