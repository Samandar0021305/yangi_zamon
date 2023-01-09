import React from "react";
import BreadCrumb from "../reuseable/BreadCrumb";
import HeaderText from "../reuseable/HeaderText";
import Newsletter from "../reuseable/Newsletter";

const PricingPage = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <BreadCrumb title="Bizning narxlar" />

      {/* pricing table */}
      <section className="pricing-table section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <HeaderText
                title="Biz sizga maqbul narxda eng yaxshi davolanishni taqdim etamiz"
                desc=" Lorem ipsum dolor sit amet consectetur adipiscing elit
                  praesent aliquet. pretiumts"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div
                className="single-table wow fadeInUp"
                data-wow-delay="0.4s"
                data-wow-duration="1s"
              >
                <div className="table-head">
                  <div className="icon">
                    <i className="icofont icofont-ui-cut"></i>
                  </div>
                  <h4 className="title">Plastik jarrohlik</h4>
                  <div className="price">
                    <p className="amount">
                      $20<span>/ Tashrif uchun</span>
                    </p>
                  </div>
                </div>
                <ul className="table-list">
                  <li>
                    <i className="icofont icofont-ui-check"></i>Lorem ipsum
                    dolor sit
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Cubitur
                    sollicitudin fentum
                  </li>
                  <li className="cross">
                    <i className="icofont icofont-ui-close"></i>Nullam interdum
                    enim
                  </li>
                  <li className="cross">
                    <i className="icofont icofont-ui-close"></i>Donec ultricies
                    metus
                  </li>
                  <li className="cross">
                    <i className="icofont icofont-ui-close"></i>Pellentesque
                    eget nibh
                  </li>
                </ul>
                <div className="table-bottom">
                  <a className="btn" href="#">
                    Hozir band qiling
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div
                className="single-table wow fadeInUp"
                data-wow-delay="0.6s"
                data-wow-duration="1s"
              >
                <div className="table-head">
                  <div className="icon">
                    <i className="icofont icofont-tooth"></i>
                  </div>
                  <h4 className="title">Tishlarni oqartirish</h4>
                  <div className="price">
                    <p className="amount">
                      $20<span>/ Tashrif uchun</span>
                    </p>
                  </div>
                </div>
                <ul className="table-list">
                  <li>
                    <i className="icofont icofont-ui-check"></i>Lorem ipsum
                    dolor sit
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Cubitur
                    sollicitudin fentum
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Nullam interdum
                    enim
                  </li>
                  <li className="cross">
                    <i className="icofont icofont-ui-close"></i>Donec ultricies
                    metus
                  </li>
                  <li className="cross">
                    <i className="icofont icofont-ui-close"></i>Pellentesque
                    eget nibh
                  </li>
                </ul>
                <div className="table-bottom">
                  <a className="btn" href="#">
                    Hozir band qiling
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div
                className="single-table wow fadeInUp"
                data-wow-delay="0.8s"
                data-wow-duration="1s"
              >
                <div className="table-head">
                  <div className="icon">
                    <i className="icofont-heart-beat"></i>
                  </div>
                  <h4 className="title">Yurak jarrohligi</h4>
                  <div className="price">
                    <p className="amount">
                      $50<span>/ Tashrif uchun</span>
                    </p>
                  </div>
                </div>
                <ul className="table-list">
                  <li>
                    <i className="icofont icofont-ui-check"></i>Lorem ipsum
                    dolor sit
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Cubitur
                    sollicitudin fentum
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Nullam interdum
                    enim
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Donec ultricies
                    metus
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Pellentesque
                    eget nibh
                  </li>
                </ul>
                <div className="table-bottom">
                  <a className="btn" href="#">
                    Hozir band qiling
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* newsletter */}
      <Newsletter />
    </div>
  );
};

export default PricingPage;
