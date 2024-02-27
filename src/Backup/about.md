import React from "react";
import '../LandingPage.css';
import '../public/fonts/font-awesome/css/font-awesome.css'
import '../public/css/bootstrap.css'
import loyaltyBackground from '../img/loyalty-card-background.jpg'
import adminPanel from '../img/admin-panel.jpg'
export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src={loyaltyBackground} className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>What Can Frenz Do for You?</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              {/* <h3>Why Choose Us?</h3> */}
              {/* <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div> */}
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