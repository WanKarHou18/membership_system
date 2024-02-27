import React from "react";
import '../LandingPage.css';
import '../public/fonts/font-awesome/css/font-awesome.css';
import '../public/css/bootstrap.css';

import loyaltyBackground from '../img/loyalty-card-background.jpg';
import adminPanel from '../img/admin-panel.jpg';
import loyaltyCard from '../img/loyalty-card.jpg';

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row" style={{paddingTop:'10vh'}}>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src={loyaltyBackground} className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6"style={{paddingTop:'10vh'}}>
            <div className="about-text">
              <h2>Virtual Customer Loyalty Card</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>
        </div>

        <div className="row" style={{paddingTop:'10vh'}}>
          <div className="col-xs-12 col-md-6" style={{paddingTop:'20vh'}}>
            <div className="about-text">
              <h2>What Can Frenz Do for You?</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src={loyaltyCard} className="img-responsive" alt="" />{" "}
          </div>
        </div>

        <div className="row" style={{paddingTop:'10vh'}}>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src={adminPanel} className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6"style={{paddingTop:'10vh'}}>
            <div className="about-text">
              <h2>Virtual Customer Loyalty Card</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
{/* <ul sty>
<li ><img src={adminPanel} className="img-responsive" alt=""/></li>
</ul> */}