import React from 'react'
import Image from 'next/image'
import logo from "../../styles/img/section-img.png"
import logo2 from "../../styles/img/section-img2.png"
import { PricingList } from '../../utils/Constants'

const index = React.memo(() => {
    return (
        <>
            <section className="pricing-table section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Biz sizga maqbul narxda eng yaxshi davolanishni taqdim etamiz</h2>
                                <Image src={logo} alt="#" />
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-12">
                            <div className="single-table wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                                <div className="table-head">
                                    <div className="icon">
                                        <i className="icofont icofont-ui-cut"></i>
                                    </div>
                                    <h4 className="title">Plastik jarrohlik</h4>
                                    <div className="price">
                                        <p className="amount">$20<span>/ Tashrif uchun</span></p>
                                    </div>
                                </div>
                                <ul className="table-list">
                                    <li><i className="icofont icofont-ui-check"></i>Lorem ipsum dolor sit</li>
                                    <li><i className="icofont icofont-ui-check"></i>Cubitur sollicitudin fentum</li>
                                    <li className="cross"><i className="icofont icofont-ui-close"></i>Nullam interdum enim</li>
                                    <li className="cross"><i className="icofont icofont-ui-close"></i>Donec ultricies metus</li>
                                    <li className="cross"><i className="icofont icofont-ui-close"></i>Pellentesque eget nibh</li>
                                </ul>
                                <div className="table-bottom">
                                    <a className="btn" href="#">Hozir band qiling</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-12">
                            <div className="single-table wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1s">
                                <div className="table-head">
                                    <div className="icon">
                                        <i className="icofont icofont-tooth"></i>
                                    </div>
                                    <h4 className="title">Tishlarni oqartirish</h4>
                                    <div className="price">
                                        <p className="amount">$20<span>/ Tashrif uchun</span></p>
                                    </div>
                                </div>
                                <ul className="table-list">
                                    <li><i className="icofont icofont-ui-check"></i>Lorem ipsum dolor sit</li>
                                    <li><i className="icofont icofont-ui-check"></i>Cubitur sollicitudin fentum</li>
                                    <li><i className="icofont icofont-ui-check"></i>Nullam interdum enim</li>
                                    <li className="cross"><i className="icofont icofont-ui-close"></i>Donec ultricies metus</li>
                                    <li className="cross"><i className="icofont icofont-ui-close"></i>Pellentesque eget nibh</li>
                                </ul>
                                <div className="table-bottom">
                                    <a className="btn" href="#">Hozir band qiling</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-12">
                            <div className="single-table wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="1s">
                                <div className="table-head">
                                    <div className="icon">
                                        <i className="icofont-heart-beat"></i>
                                    </div>
                                    <h4 className="title">Yurak jarrohligi</h4>
                                    <div className="price">
                                        <p className="amount">$50<span>/ Tashrif uchun</span></p>
                                    </div>
                                </div>
                                <ul className="table-list">
                                    <li><i className="icofont icofont-ui-check"></i>Lorem ipsum dolor sit</li>
                                    <li><i className="icofont icofont-ui-check"></i>Cubitur sollicitudin fentum</li>
                                    <li><i className="icofont icofont-ui-check"></i>Nullam interdum enim</li>
                                    <li><i className="icofont icofont-ui-check"></i>Donec ultricies metus</li>
                                    <li><i className="icofont icofont-ui-check"></i>Pellentesque eget nibh</li>
                                </ul>
                                <div className="table-bottom">
                                    <a className="btn" href="#">Hozir band qiling</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section id="team" className="team section overlay" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Muammolaringizni hal qilish uchun bizda mutaxassis shifokorlar bor</h2>
                                <Image src={logo2} alt="#" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            PricingList.map((val, i) => {
                                return (
                                    <div key={i} className="col-lg-3 col-md-6 col-12" data-tilt>
                                        <div className="single-team wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                                            <div className="t-head">
                                                <Image src={val.img} alt="#" />
                                                <div className="t-icon">
                                                    <a href="uchrashuv.html" className="btn">Uchrashuvni olish</a>
                                                </div>
                                            </div>
                                            <div className="t-bottom">
                                                <p>{val.job}</p>
                                                <h2><a href="#">{val.name}</a></h2>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
})

export default index