import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import '../src/vendors/bootstrap/css/bootstrap.min.css';
import '../src/vendors/bootstrap/bootstrap.min-6.css';
import Profile from "./Profile/Profile";
import SearchScreen from "./Search/SearchScreen";
import './App.css';
import DetailsScreen from "./Search/DetailsScreen";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<SearchScreen/>}/>
              <Route path="/details/:id" element={<DetailsScreen/>}/>
        </Routes>

       </BrowserRouter>
  );
}

export default App;
