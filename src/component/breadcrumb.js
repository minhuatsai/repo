import React from 'react';
import { FacebookProvider, Like } from 'react-facebook';
import "./breadcrumb.scss";

const Breadcrumb = (props)=>{
    return(
        <div className="componentcontainer-breadcrumb">
            <div className="facebook-like-share-container">
                <FacebookProvider appId="511040962329986">
                    <Like 
                    href="https://5xruby.tw/" 
                    colorScheme="dark" 
                    layout={"button_count"}
                    share 
                    size="large"
                    />
                </FacebookProvider>
            </div>
            <div className="route-navigation">
                首頁 > 聯絡我們
            </div>
            <h1 className="breadcrumb-header">
                有任何問題嗎？馬上聯絡我們！
            </h1>
        </div>
    )
}

export default Breadcrumb;