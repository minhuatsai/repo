import React,{Component} from 'react';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import staticDataHome from './static/home.json';
import Header from './component/header';
import Footer from './component/footer';
import {routes} from "./router-setting";
class App extends Component{
  render(){
    return(
      <div className="pagecontainer-home">
          <Header staticData={staticDataHome.header}/>
          <div className="maincontent">
            {/* <CarouselContainer />
            <About5xRuby id="about5xRuby" />
            <PopularCourses id="popularCourses" />
            <OnlineCourses id="onlineCourses" />
            <Portfolio id="portfolio" />
            <KnowUs id="knowUs" /> */}
            <BrowserRouter>
              <Switch>
                {
                  routes.map((routeData,i)=>{
                    return(
                      <Route key={`route_${i}`} {...routeData} />
                    )
                  })
                }
              </Switch>
            </BrowserRouter>
          </div>
          <Footer staticData={staticDataHome.footer}/>
      </div>
    )
  }
}

export default App;
