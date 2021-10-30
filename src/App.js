
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';

import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import PlaceOrder from './Pages/Home/Plans/PlaceOrder/PlaceOrder';
import AuthProvider from './contexts/AuthProvider';
import NotFound from './Pages/NotFound/NotFound';
import SignIn from './SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/signin'>
              <SignIn></SignIn>
            </Route>
            <Route path='/placeorder/:tripId'>
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
