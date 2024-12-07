import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./container/HomePage";
import SignIn from "./container/SignIn";
import SignUp from "./container/SignUP";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={HomePage}></Route>
          <Route path="/SignIn" Component={SignIn}></Route>
          <Route path="/SignUp" Component={SignUp}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
