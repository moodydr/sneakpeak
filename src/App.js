import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import '../src/vendors/bootstrap/css/bootstrap.min.css';
import '../src/vendors/bootstrap/bootstrap.min-6.css';
import SearchScreen from "./Search/SearchScreen";
import './App.css';
import ProfileScreen from "./Profile";
import ExploreScreen from "./Explore";
import HomeScreen from "./Home";
import WatchListScreen from "./WatchLists";
import LandingScreen from "./Landing/LandingScreen";
import LoginScreen from "./Login";
import DetailsScreen from "./Search/DetailsScreen";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<LandingScreen/>}/>
              <Route exact path="/sneakpeak/login" element={<LoginScreen/>}/>
              <Route exact path="/sneakpeak/profile" element={<ProfileScreen/>}/>
              <Route exact path="/sneakpeak/explore" element={<ExploreScreen/>}/>
              <Route exact path="/sneakpeak/home" element={<HomeScreen/>}/>
              <Route exact path="/sneakpeak/watchlists" element={<WatchListScreen/>}/>
              <Route path="/sneakpeak/search" element={<SearchScreen/>}/>
              <Route path="/sneakpeak/search/details/:id" element={<DetailsScreen/>}/>
          </Routes>
       </BrowserRouter>
  );
}

export default App;
