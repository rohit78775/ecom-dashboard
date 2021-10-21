import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import $ from 'jquery';
// import Popper from 'popper.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/home/home";
import Login from "./component/login/login";
import Register from "./component/register/register";
import Header from "./component/header/header";
function App() {
  return (
    <Router>
     <Header />
      <Switch>
        <Route exact path="/">
         <Home/>
        </Route>
        <Route exact path="/login">
         <Login/>
        </Route>
        <Route exact path="/register">
   <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
