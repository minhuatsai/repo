import React,{Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import staticDataHome from './static/home.json';
import Header from './component/header';
import Footer from './component/footer';
import {routes} from "./router-setting";

class App extends Component{
  render(){
    return(
      <div className="pagecontainer-home">
          <div className="maincontent">
            <BrowserRouter>
              <Header staticData={staticDataHome.header}/>
              <Switch>
                {
                  routes.map((routeData,i)=>{
                    return(
                      <Route key={`route_${i}`} {...routeData} />
                    )
                  })
                }
              </Switch>
              <Footer staticData={staticDataHome.footer}/>
            </BrowserRouter>
          </div>
      </div>
    )
  }
}

export default App;
