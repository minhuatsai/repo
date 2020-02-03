import React,{Component} from 'react';
import Breadcrumb from "../component/breadcrumb";
import ReCAPTCHA from "react-google-recaptcha";
import "./contacts.scss";

class Contacts extends Component{
    constructor(props){
        super(props);
    }
    onChangeRecaptcha(value){
        console.log("Captcha value:", value);
    }
    render(){
        return(
            <div className="pagcontainer" id="page-contacts">
                <Breadcrumb routerData={this.props} />
                <div className="page-content">
                    <div className="contacts-info-container">
                        <div className="company-address">
                            <h2>五倍紅寶石股份有限公司</h2>
                            <p>10046 台北市中正區衡陽路 7 號 5 樓</p>
                        </div>
                        <ul className="contacts-info">
                            <li>Tel：02-2331-5247</li>
                            <li>Fax：02-2331-8717</li>
                            <li>Mobile：0928-617-687</li>
                            <li>統編：24536806</li>
                            <li>E-mail：<a className="sharp-red"> hi@5xruby.tw</a></li>
                        </ul>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14459.01429731859!2d121.5137072!3d25.0424356!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa8402e622aa7b148!2z5LqU5YCN57SF5a-255-zIC0g57ay6aCB6Kit6KiI5pWZ5a2456iL5byP6Kit6KiI5pWZ6IKy5qmf5qeL!5e0!3m2!1szh-TW!2stw!4v1580739457856!5m2!1szh-TW!2stw" width="100%" height="450" frameBorder="0" style={{"border":"0"}} allowFullScreen=""></iframe>
                    </div>
                    <div className="contacts-form">
                        <p>任何問題都歡迎您透過以下表單詢問，我們會盡快回覆您！</p>
                        <form>
                            <input placeholder="名字" required/>
                            <input type="email" placeholder="信箱" required/>
                            <input placeholder="電話" required/>
                            <select required>
                                <option value="">請選擇主題</option>
                                <option value="專案開發">專案開發</option>
                                <option value="技術諮詢">技術諮詢</option>
                                <option value="企業內訓">企業內訓</option>
                                <option value="課程詢問">課程詢問</option>
                                <option value="其他">其他</option>
                            </select>
                            <textarea placeholder="留下你的訊息" rows="5" required>
                            </textarea>
                            <div className="reCAPTCHA-container">
                                <ReCAPTCHA
                                    sitekey="6Lc4VtUUAAAAAHIcTo7HU9KQQSDM-5yDRlYFrooZ"
                                    onChange={this.onChangeRecaptcha}
                                />
                            </div>
                            <input type="submit" value="送出"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacts;