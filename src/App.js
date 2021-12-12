import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import '../src/vendors/bootstrap/css/bootstrap.min.css';
import '../src/vendors/bootstrap/bootstrap.min-6.css';
import './vendors/fontawesome/css/all.min.css';
import SearchScreen from "./Search/SearchScreen";
import './App.css';
import ProfileScreen from "./Profile";
import HomeScreen from "./Home";
import WatchListScreen from "./WatchLists";
import LandingScreen from "./Landing/LandingScreen";
import LoginScreen from "./Login";
import DetailsScreen from "./Search/DetailsScreen";
import Register from "./Login/Register";
import Login from "./Login/Login";
import Profile from "./Profile/Profile";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/sneakpeak" element={<LandingScreen/>}/>
              <Route exact path="/sneakpeak/login" element={<Login/>}/>
              <Route exact path="/sneakpeak/register" element={<Register/>}/>
              <Route exact path="/sneakpeak/profile/:id" element={<Profile/>}/>
              <Route exact path="/sneakpeak/home" element={<HomeScreen/>}/>
              <Route exact path="/sneakpeak/watchlists" element={<WatchListScreen/>}/>
              <Route path="/sneakpeak/search" element={<SearchScreen/>}/>
              <Route path="/sneakpeak/search/:searchTerm" element={<SearchScreen/>}/>
              <Route path="/sneakpeak/search/details/:id" element={<DetailsScreen/>}/>
          </Routes>
       </BrowserRouter>
  );
}

export default App;
