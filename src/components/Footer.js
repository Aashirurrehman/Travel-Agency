import React from "react";
import "../CSS/footer.css";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 ">
            <div class="logo-wrapper">
              <a href="#">
                <img src={require("../images/logo2.png")} alt="logo2" className="img-responsive footer-image" />
              </a>
            </div>
            <p>
              Nam liber tempor cum soluta nobis option congue nihil imperdiet
              doming id quod mazim. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna.
            </p>
            <p className="readMore">
              <span><a href="#" className="readMore-link">Read More <i className='fa fa-caret-right'></i></a></span>
            </p>
          
          </div>
          <div className="col-md-3 ">
            <div className="footer-title">Travel Specialists</div>
            <ul className="footer-ul">
              <li><a href="#">First Class Flights <i className='fa fa-caret-right'></i></a></li>
              <li><a href="#">Acessible Travels <i className='fa fa-caret-right'></i></a></li>
              <li><a href="#">Amazing Cruises <i className='fa fa-caret-right'></i></a></li>
            </ul>

            <div className="footer-social-wrapper">
              <ul className="footer-social d-block m-0 p-0">
                <li className="nav1"><a href="#"></a></li>
                <li className="nav2"><a href="#"></a></li>
                <li className="nav3"><a href="#"></a></li>
                <li className="nav4"><a href="#"></a></li>
                <li className="nav5"><a href="#"></a></li>
                <li className="nav6"><a href="#"></a></li>
              </ul>
            </div>
          </div>


          <div className=" col-md-3 ">
            <div className="footer-title"> Our Twitter </div>
              <div className="twits-wrapper">
                <div className="twit">
                  <a href="#">@travel</a>Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                  <div className="twit-date">5 minutes ago</div>
                </div>
                
                <div className="twit">
                  <a href="#">@leo</a>Nam liber tempor cum soluta nobis option congue nihil imperdiet doming id quod mazim.
                  
                </div>
                
              </div>
          </div>


          <div className="col-md-3 ">
            <div className="footer-title">Newsletter</div>
              <div className="newsltter-block">
                <div className="text1">Inspiration, ideas, news and your feedback.</div>
                <div className="newsletter-wrapper clearfix">
                  <form>
                    <input type='email' placeholder='Email adress'/>
                    <a href="#" className="news-letter-button"> SUBMIT</a>
                  </form>
                </div>
              </div>
              <div className="phone-number">1-917-338-6831</div>
              <div className="support-1"><a href="#">support@templates-support.com</a></div>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
