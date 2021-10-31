
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';

import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import PlaceOrder from './Pages/Home/Plans/PlaceOrder/PlaceOrder';
import AuthProvider from './contexts/AuthProvider';
import NotFound from './Pages/NotFound/NotFound';
import SignIn from './SignIn/SignIn';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AddTrip from './Pages/AddTrip/AddTrip';
import MyTrips from './Pages/MyTrips/MyTrips/MyTrips';

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
            <Route path='/login'>
              <SignIn></SignIn>
            </Route>
            <PrivateRoute path='/placeorder/:tripId'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path='/addtrip'>
              <AddTrip></AddTrip>
            </PrivateRoute>
            <Route path='/mytrips'>
              <MyTrips></MyTrips>
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
