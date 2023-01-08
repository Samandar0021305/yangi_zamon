import React from "react";
import Script from 'next/script'
const Swiper = () => {
  return (
      <div>
          <section className="slider index2">
              <div className="hero-slider">
                  <div className="single-slider">
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-7">
                                  <div className="text">

                                      <h1>Biz sizga ishonishingiz mumkin bo'lgan <span>tibbiy</span> xizmatlarni
                                          taqdim <span>etamiz!</span></h1>
                                      <div className="button">
                                          <a href="uchrashuv.html" className="btn">Uchrashuvni olish</a>
                                          <a href="#" className="btn primary">Batafsil ma'lumot</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* <div className="single-slider" style={{backgroundImage:"url('img/slider.jpg')"}}>
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-7">
                                  <div className="text">
                                      <h1>Biz sizga ishonishingiz mumkin bo'lgan <span>tibbiy</span> xizmatlarni
                                          taqdim <span>etamiz!</span></h1>
                                      <div className="button">
                                          <a href="uchrashuv.html" className="btn">Uchrashuvni olish</a>
                                          <a href="#" className="btn primary">Batafsil ma'lumot</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div> */}
                  {/* <div className="single-slider" style={{backgroundImage:"url('img/slider3.jpg')"}}>
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-7">
                                  <div className="text">
                                      <h1>Biz sizga ishonishingiz mumkin bo'lgan <span>tibbiy</span> xizmatlarni
                                          taqdim <span>etamiz!</span></h1>
                                      <div className="button">
                                          <a href="uchrashuv.html" className="btn">Uchrashuvni olish</a>
                                          <a href="#" className="btn primary">Batafsil ma'lumot</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div> */}
              </div>
          </section>
          <Script src="../../styles/js/owl-carousel.js" defer={true}/>
      </div>
  )
};
export default Swiper;