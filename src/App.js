import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import staticDataHome from './static/home.json';
import Header from './component/header';
import Footer from './component/footer';
import ScrollButton from './component/scrollbutton';
import { routes } from './router-setting';

const App = () => (
  <div className="pagecontainer-home">
    <div className="maincontent">
      <BrowserRouter>
        <Header staticData={staticDataHome.header} />
        <Switch>
          {
            routes.map((routeData) => (
              <Route key={`route_${routeData}`} {...routeData} />
            ))
          }
        </Switch>
        <Footer staticData={staticDataHome.footer} />
        <ScrollButton />
      </BrowserRouter>
    </div>
  </div>
);


export default App;
