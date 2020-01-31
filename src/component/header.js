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
                    return <li key={`navbar${i}`}>{list.title}</li>
                })
            }
        </ul>
      </div>
    )
}

export default Header;