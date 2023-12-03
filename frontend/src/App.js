import Articles from "./pages/Articles";
import Category from "./pages/Category";
import Landing from "./pages/Landing";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from "react";


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
