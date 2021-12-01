import React from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import '../src/vendors/bootstrap/css/bootstrap.min.css';
import '../src/vendors/bootstrap/bootstrap.min-6.css';
import Profile from "./Profile/Profile";
import './App.css';

function App() {
  return (
      // <Router>
      //     <h1>Test</h1>
      //     <Routes>
      //           <Route exact path="/profile" element={<Profile />}/>
                <Profile/>
       //    </Routes>
       //
       // </Router>
  );
}

export default App;
