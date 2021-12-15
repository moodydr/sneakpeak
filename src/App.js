import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import '../src/vendors/bootstrap/css/bootstrap.min.css';
import '../src/vendors/bootstrap/bootstrap.min-6.css';
import './vendors/fontawesome/css/all.min.css';
import SearchScreen from "./Search/SearchScreen";
import './App.css';
import ProfileScreen from "./Profile";
import HomeScreen from "./Home";
import WatchlistScreen from "./WatchLists";
import LandingScreen from "./Landing/LandingScreen";
import LoginScreen from "./Login";
import DetailsScreen from "./Search/DetailsScreen";
import Register from "./Login/Register";
import Login from "./Login/Login";
import Profile from "./Profile/Profile";
import PrivacyPolicy from "./PrivacyPolicy";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<LandingScreen/>}/>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/register" element={<Register/>}/>
              <Route path="/register/privacy" element={<PrivacyPolicy/>}/>
              <Route path="/profile/" element={<Profile/>}/>
              <Route path="/profile/:id" element={<Profile/>}/>
              <Route exact path="/home" element={<HomeScreen/>}/>
              <Route exact path="/watchlist/:id" element={<WatchlistScreen/>}/>
              <Route path="/search" element={<SearchScreen/>}/>
              <Route path="/search/:searchTerm" element={<SearchScreen/>}/>
              <Route path="/search/details/:id" element={<DetailsScreen/>}/>
          </Routes>
       </BrowserRouter>
  );
}

export default App;
