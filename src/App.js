import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Shipping from './Pages/Shipping/Shipping';
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
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
