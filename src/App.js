import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Shipping from './Pages/Shipping/Shipping';
import Details from './Pages/Details/Details';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/shipping">
             <Shipping></Shipping>
          </Route>
          <Route path="/details/:productsId">
             <Details></Details>
          </Route>
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
