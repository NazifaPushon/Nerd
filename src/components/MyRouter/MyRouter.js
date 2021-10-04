import { createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import DetailedService from '../DetailedService/DetailedService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import useServices from '../Hooks/useServices';
import NotFound from '../NotFound/NotFound';
import Services from '../Services/Services';
import SignIn from '../SignIn/SignIn';

export const ServiceContext = createContext()
function MyRouter() {
    const [services] = useServices()
    console.log(services);
    return (
      <ServiceContext.Provider value={services}>
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
            <Route  path="/service/:id">
                  <DetailedService/>
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
      </ServiceContext.Provider>
  );
}

export default MyRouter;
