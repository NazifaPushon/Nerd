import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import Services from '../Services/Services';
import SignIn from '../SignIn/SignIn';

//All routing set up is here 

//MyRouter Component

function MyRouter() {
    return (  
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
  );
}

export default MyRouter;
