import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import staticDataHome from './static/home.json';
import Header from './component/header';
import Footer from './component/footer';
import { routes } from './router-setting';

const App = () => (
  <div className="pagecontainer-home">
    <div className="maincontent">
      <BrowserRouter>
        <Header staticData={staticDataHome.header} />
        <Switch>
          {
                  routes.map((routeData) => (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    <Route key={`route_${routeData}`} {...routeData} />
                  ))
                }
        </Switch>
        <Footer staticData={staticDataHome.footer} />
      </BrowserRouter>
    </div>
  </div>
);


export default App;
