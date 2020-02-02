import React from 'react';
import './header.scss';

const Header = (props)=>{
    const {staticData} = props;

    return(
      <div className="componentcontainer-header">
        <div className="imgcontainer-logo">
          <img src={staticData.imgcontainer.src} />
        </div>
        <ul className="navbar">
            {
                staticData.navbar.map((list,i)=>{
                    return(
                      <li key={`navbar${i}`}>
                        <a href={list.url}>
                          {
                            list.fontIcon && 
                            <i className={list.fontIcon} />
                          }  
                          {list.title}
                          {
                            list.remind &&
                            <span className="animate-sharp-red">{list.remind}</span>
                          }
                        </a>
                      </li>
                    )
                })
            }
        </ul>
      </div>
    )
}

export default Header;