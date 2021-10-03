import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import DetailedService from './components/DetailedService/DetailedService';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route  path="/home">
              <Home/>
          </Route>
          <Route  path="/services">
              <Services/>
          </Route>
          <Route  path="/aboutUs">
             <AboutUs/>
          </Route>
          <Route  path="/signIn">
             <SignIn/>
          </Route>
          <Route  path="*">
             <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
