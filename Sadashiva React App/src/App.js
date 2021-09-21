import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Posts } from "./pages/Posts";
import { Contactus } from "./pages/Contactus";
import { Shop } from "./pages/Shop";
import { Location } from "./pages/Location";
import { Hq } from "./pages/Hq";
import { Masp } from "./pages/Masp";
import { Usermanu } from "./pages/Usermanu";
import React from "react";
import Buyitem from "./pages/Buyitem";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
   <>
   <Router>
   <Header/>
   <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <Home/>
            </> )
          }}>
          </Route>
          <Route exact path="/posts">
            <> 
            <Posts/>
            </>
          </Route>
          <Route exact path="/contactus">
            <Contactus/>
          </Route>
          <Route exact path="/shop">
            <Shop/>
          </Route>
          <Route exact path="/location">
            <Location/>
          </Route>
          <Route exact path="/masp">
            <Masp/>
          </Route>
          <Route exact path="/usermanu">
            <Usermanu/>
          </Route>
          <Route exact path="/hq">
            <Hq/>
          </Route>
          <Route exact path="/buyitem">
            <Buyitem/>
          </Route>
        </Switch>
   <Footer/>
   </Router>
   
    </>
  );
}

export default App;
