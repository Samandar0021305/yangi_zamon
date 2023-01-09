import React from "react";
import BreadCrumb from "../reuseable/BreadCrumb";
import { newsData } from "../../utils/Constants";
import Image from "next/image";

const NewsPage = () => {
  return (
    <div>
      {" "}
      {/* Breadcrumbs */}
      <BreadCrumb title="Yangiliklar" />
      {/* Single news */}
      <section className="blog grid section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="row">
                {newsData.map((item) => (
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="single-news">
                      <div className="news-head">
                        <Image src={item.img} alt="cart image" />
                      </div>
                      <div className="news-body">
                        <div className="news-content">
                          <div className="date">23 Aug, 2022</div>
                          <h2>
                            <a href="disease-single.html">
                              {item.text}
                            </a>
                          </h2>
                          <p className="text">
                            Lorem ipsum dolor a sit ameti, consectetur
                            adipisicing elit, sed do eiusmod tempor incididunt
                            sed do incididunt sed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-12">
                  <div className="pagination">
                    <ul className="pagination-list">
                      <li>
                        <a href="#">
                          <i className="icofont-rounded-left"></i>
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-rounded-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="main-sidebar">
                <div className="single-widget search">
                  <div className="form">
                    <input type="email" placeholder="Bu yerda qidiring..." />
                    <a className="button" href="#">
                      <i className="fa fa-search"></i>
                    </a>
                  </div>
                </div>
                <div className="single-widget category">
                  <h3 className="title">Blog toifalari</h3>
                  <ul className="categor-list">
                    <li>
                      <a href="#">Erkaklar uchun</a>
                    </li>
                    <li>
                      <a href="#">Ayollar uchun</a>
                    </li>
                  </ul>
                </div>
                <div className="single-widget recent-post">
                  <h3 className="title">Oxirgi post</h3>
                  <div className="single-post">
                    <div className="image">
                      <img src="img/blog-sidebar1.jpg" alt="#" />
                    </div>
                    <div className="content">
                      <h5>
                        <a href="#">Biz yangi mahsulotimizni e'lon qildik.</a>
                      </h5>
                      <ul className="comment">
                        <li>
                          <i className="fa fa-calendar" aria-hidden="true"></i>
                          Jan 11, 2022
                        </li>
                        <li>
                          <i
                            className="fa fa-commenting-o"
                            aria-hidden="true"
                          ></i>
                          35
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="single-post">
                    <div className="image">
                      <img src="img/blog-sidebar1.jpg" alt="#" />
                    </div>
                    <div className="content">
                      <h5>
                        <a href="#">Biz yangi mahsulotimizni e'lon qildik.</a>
                      </h5>
                      <ul className="comment">
                        <li>
                          <i className="fa fa-calendar" aria-hidden="true"></i>
                          Jan 11, 2022
                        </li>
                        <li>
                          <i
                            className="fa fa-commenting-o"
                            aria-hidden="true"
                          ></i>
                          35
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="single-post">
                    <div className="image">
                      <img src="img/blog-sidebar1.jpg" alt="#" />
                    </div>
                    <div className="content">
                      <h5>
                        <a href="#">Biz yangi mahsulotimizni e'lon qildik.</a>
                      </h5>
                      <ul className="comment">
                        <li>
                          <i className="fa fa-calendar" aria-hidden="true"></i>
                          Jan 11, 2022
                        </li>
                        <li>
                          <i
                            className="fa fa-commenting-o"
                            aria-hidden="true"
                          ></i>
                          35
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-widget side-tags">
                  <h3 className="title">Taglar</h3>
                  <ul className="tag">
                    <li>
                      <a href="#">Tish</a>
                    </li>
                    <li>
                      <a href="#">Psiholog</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
