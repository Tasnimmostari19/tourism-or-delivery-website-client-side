
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';

import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import PlaceOrder from './Pages/Home/Plans/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/placeorder/:tripId'>
            <PlaceOrder></PlaceOrder>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
