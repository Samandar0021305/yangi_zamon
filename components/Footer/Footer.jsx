import React from 'react'
const Footer = React.memo(() => {
  return (
    <div>
      <footer id="footer" className="footer ">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Biz haqimizda</h2>
                  <ul className="social">
                    <li><a href="#"><i className="icofont-facebook"></i></a></li>
                    <li><a href="#"><i className="icofont-google-plus"></i></a></li>
                    <li><a href="#"><i className="icofont-twitter"></i></a></li>
                    <li><a href="#"><i className="icofont-vimeo"></i></a></li>
                    <li><a href="#"><i className="icofont-pinterest"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h2>Tez havolalar</h2>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <ul>
                        <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Bosh sahifa</a></li>
                        <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Biz haqimizda</a></li>
                        <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Xizmatlar</a></li>
                        <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>havolalar</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <ul>
                        <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Maslahat</a></li>
                        <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Moliya</a></li>
                        <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Guvohlar</a></li>
                        <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>FAQ</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Ochiq vaqtlar</h2>
                  <ul className="time-sidual">
                    <li className="day">Dushanba - Juma <span>8.00-20.00</span></li>
                    <li className="day">Shanba <span>9.00-18.30</span></li>
                    <li className="day">Dushanba - Shu kun <span>9.00-15.00</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Yangiliklar</h2>
                  <p>Barcha yangiliklarni pochta qutingizga olish uchun bizning axborot byulletenimizga obuna
                    bo'ling.</p>
                  <form action="" method="get" className="newsletter-inner">
                    <input name="email" placeholder="E-pochta manzili" className="common-input"
                           onFocus="this.placeholder = ''"
                           onBlur="this.placeholder = 'Your email address'" required="" type="email"/>
                      <button className="button"><i className="icofont icofont-paper-plane"></i></button>
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
                  <p>Developed by<a href="https://timetech.uz/" rel="nofollow" target="_blank">TimeTech</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
})

export default Footer