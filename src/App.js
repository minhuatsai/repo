import React,{Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import staticDataHome from './static/home.json';
import Header from './component/header';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.scss';

const OnlineCourses = (props) =>{
  const {id} = props;
  const sectionParameter = staticDataHome.maincontent.section;
  const {title,listData} = sectionParameter[id];
  return(
    <div className="section-container">
      <h3><span>{title}</span></h3>
      <div className="section-content-container">
        <Carousel
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
        >
          {
            listData.map((list,i) => {
              console.log(list.feedback)
              return(
                <div key={`section-content-list_${i}`} className="section-content-list list-style-carousel">
                  <div className="imgcontainer-sectionlist"><img src={list.imgSrc} /></div>
                  <div className="carousel-introduction-container">
                    <p>{list.feedback}</p>
                    <span className="author">{list.author}</span>
                    <span>{list.profession}</span>
                  </div>
                </div>
              )
            })
          }
        </Carousel>
      </div>
    </div>
  ) 
}

const PopularCourses = (props) =>{
  const {id} = props;
  const sectionParameter = staticDataHome.maincontent.section;
  const {title,listData,linkButton} = sectionParameter[id];
  return(
    <div className="section-container">
      <h3><span>{title}</span></h3>
      <div className="section-content-container">
        {
          listData.map((list,i) => {
            return(
              <div key={`section-content-list_${i}`} className="section-content-list list-style-card">
                <div className="imgcontainer-sectionlist"><img src={list.imgSrc} /></div>
                <h4>{list.mainTitle}</h4>
                <div className="course-date">
                  {
                    list.remind && <span className="remind">{list.remind}</span>
                  }
                  <span>{list.date}</span>
                </div>
                <p>
                  {list.description}
                </p>
                <p className="note">
                  {list.note}
                </p>
              </div>
            )
          })
        }
        <div className="btngroup">
          {
            linkButton.map((list,i) => {
              return(
                <a key={`btngroup_${i}`} href={list.url}>
                  <button type="button">{list.value}</button>
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  ) 
}

const About5xRuby = (props) =>{
  const {id} = props;
  const sectionParameter = staticDataHome.maincontent.section;
  const {title,listData} = sectionParameter[id];
  return(
    <div className="section-container">
      <h3><span>{title}</span></h3>
      <div className="section-content-container">
        {
          listData.map((list,i) => {
            return(
              <div key={`section-content-list_${i}`} className="section-content-list">
                <div className="imgcontainer-sectionlist"><img src={list.imgSrc} /></div>
                <h3>{list.mainTitle}</h3>
                <h3>{list.secondaryTitle}</h3>
                <p>{list.description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  ) 
}
const CarouselContainer = ()=>{
  return(
    <Carousel
      showStatus={false}
      showArrows={false}
      showThumbs={false}
    >
      {
        staticDataHome.maincontent.carousel.map((imgList,i)=>{
          return(
            <div key={`carousel${i}`}>
              <img src={imgList} />
            </div>
          )
        })
      }
    </Carousel>
  )
}
class App extends Component{
  render(){
    return(
      <div className="pagecontainer-home">
          <Header staticData={staticDataHome.header}/>
          <div className="maincontent">
            <CarouselContainer />
            <About5xRuby id="about5xRuby" />
            <PopularCourses id="popularCourses" />
            <OnlineCourses id="onlineCourses" />
          </div>
      </div>
    )
  }
}

export default App;
