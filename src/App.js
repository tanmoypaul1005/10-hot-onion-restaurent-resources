import { createContext, useState } from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Cart from "./components/Cart/Cart";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Shipment from "./components/Shipment/Shipment";


export const UserContext=createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router> 
      
    <Switch>
    

 

    <Route path="/cart">
    <Cart></Cart>
    </Route>

    <Route path="/login">
    <Login></Login>
    </Route>


    <PrivateRoute path="/shipment">
    <Shipment></Shipment>
    </PrivateRoute>

    <Route path="/">
    <Home />
    </Route>

  


   
    
    <Route path="*/">
    <NotFound></NotFound>
    </Route>

    </Switch>
    </Router>
      
    </UserContext.Provider>
  );
}

export default App;