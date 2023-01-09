import React from "react";
import BreadCrumb from "../reuseable/BreadCrumb";
import { newsData, postsData } from "../../utils/Constants";
import Image from "next/image";
import Pagination from "../reuseable/Pagination";
import SearchForm from "../reuseable/SearchForm";
import GenderFilter from "../reuseable/GenderFilter";
import Post from "../reuseable/Post";
import Tags from "../reuseable/Tags";

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
                {newsData.map((item, index) => (
                  <div key={index} className="col-lg-6 col-md-6 col-12">
                    <div className="single-news">
                      <div className="news-head">
                        <Image src={item.img} alt="cart image" />
                      </div>
                      <div className="news-body">
                        <div className="news-content">
                          <div className="date">23 Aug, 2022</div>
                          <h2>
                            <a href="disease-single.html">{item.text}</a>
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
                  <Pagination />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="main-sidebar">
                <SearchForm />
                <GenderFilter />
                <div className="single-widget recent-post">
                  <h3 className="title">Oxirgi post</h3>
                  {postsData.map((post) => (
                    <Post key={post.id} post={post} />
                  ))}
                </div>
                <Tags />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
