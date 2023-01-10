
import React from "react";
import Image from "next/image";
import logo from "../../styles/img/section-img.png";
import { BlogList } from "../../utils/Constants";

const index = React.memo(() => {
  return (
    <>
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>
                  Bizning eng so'nggi tibbiy yangiliklarimizdan xabardor
                  bo'ling.
                </h2>
                <Image src={logo} alt="#" />
              </div>
            </div>
          </div>
          <div className="row">
            {BlogList.map((val, id) => {
              return (
                  <div key={id} className="col-lg-4 col-md-6 col-12">
                    <div
                        className="single-news wow fadeInUp"
                        data-wow-delay="0.4s"
                        data-wow-duration="1s"
                    >
                      <div className="news-head">
                        <Image src={val.img} alt="#"/>
                      </div>
                      <div className="news-body">
                        <div className="news-content">
                          <div className="date">3 aprel, 2022 yil</div>
                          <h2>
                            <a href="#">{val.text}</a>
                          </h2>
                          <p className="text">
                            Lorem ipsum dolor a sit ameti, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt sed do
                            incididunt sed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>)
            })}
          </div>
        </div>
        </section>

</>) })
export default index;