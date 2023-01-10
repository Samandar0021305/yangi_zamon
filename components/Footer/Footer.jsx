import React from "react";
import {
  footerList,
  singleFooter,
  singleFooter2,
  social,
} from "../../utils/Constants";

const Footer = React.memo(() => {
  return (
    <div>
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Biz haqimizda</h2>
                  <ul className="social">
                    {social.map((val) => (
                      <li key={val.id}>
                        <a href="">
                          <i className={val.img}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h2>Tez havolalar</h2>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <ul>
                        {singleFooter.map((val) => (
                          <li key={val.id}>
                            <a href="#">
                              <i className={val.img} aria-hidden="true"></i>
                              {val.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <ul>
                        {singleFooter2.map((val) => (
                          <li key={val.id}>
                            <a href="#">
                              <i className={val.img} aria-hidden="true"></i>
                              {val.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Ochiq vaqtlar</h2>
                  <ul className="time-sidual">
                    {footerList.map((val) => (
                      <li key={val.id} className="day">
                        {val.day}
                        <span>{val.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Yangiliklar</h2>
                  <p>
                    Barcha yangiliklarni pochta qutingizga olish uchun bizning
                    axborot byulletenimizga obuna bo'ling.
                  </p>
                  <form action="" method="get" className="newsletter-inner">
                    <input
                      name="email"
                      placeholder="E-pochta manzili"
                      className="common-input"
                      onFocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'Your email address'"
                      required=""
                      type="email"
                    />
                    <button className="button">
                      <i className="icofont icofont-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="copyright-content">
                  <p>
                    Developed by
                    <a
                      href="https://timetech.uz/"
                      rel="nofollow"
                      target="_blank"
                    >
                      TimeTech
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
});

export default Footer;
