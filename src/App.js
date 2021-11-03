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
import Admin from './Admin/Admin';
import Footer from './Pages/Shared/Footer/Footer';
import AddProducts from './AddProducts/AddProducts';
import Orders from './Orders/Orders';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login';
import AuthProvider from './COntext/AuthProvider';
function App() {
  return (
    <div className="App">
       <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <PrivateRoute path="/shipping">
             <Shipping></Shipping>
          </PrivateRoute>
          <Route path="/orders">
             <Orders></Orders>
          </Route>
          <Route path="/details/:productsId">
             <Details></Details>
          </Route>
          <Route path="/owner">
            <Admin></Admin>
          </Route>
          <Route path="/add">
            <AddProducts></AddProducts>
          </Route>
         
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
