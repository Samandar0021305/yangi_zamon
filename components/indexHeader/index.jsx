import Image from 'next/image'
import React from 'react'
import logo from "../../styles/img/section-img.png"
import { WhyChooseList } from '../../utils/Constants'

const index = React.memo(() => {
    return (
        <>
            <section className="Feautes index2 section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Biz sizga va oilangizga yordam berishga doim tayyormiz</h2>
                                <Image src={logo} alt="#" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <div className="single-features wow fadeIn" data-wow-delay="0.4s" data-wow-duration="1s">
                                <div className="signle-icon">
                                    <i className="icofont icofont-ambulance-cross"></i>
                                </div>
                                <h3>Favqulodda yordam</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="single-features wow fadeIn" data-wow-delay="0.6s" data-wow-duration="1s">
                                <div className="signle-icon">
                                    <i className="icofont icofont-medical-sign-alt"></i>
                                </div>
                                <h3>Boyitilgan dorixona</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="single-features last wow fadeIn" data-wow-delay="0.6s" data-wow-duration="1s">
                                <div className="signle-icon">
                                    <i className="icofont icofont-stethoscope"></i>
                                </div>
                                <h3>Tibbiy davolash</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <div id="fun-facts" className="fun-facts section overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-fun wow fadeIn" data-wow-delay="1s" data-wow-duration="0.5s">
                                <i className="icofont icofont-home"></i>
                                <div className="content">
                                    <span className="counter">100</span>
                                    <p>Kasalxona xonalari</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-fun wow fadeIn" data-wow-delay="0.8s" data-wow-duration="0.5s">
                                <i className="icofont icofont-user-alt-3"></i>
                                <div className="content">
                                    <span className="counter">50</span>
                                    <p>Ixtisoslashgan shifokorlar</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-fun wow fadeIn" data-wow-delay="0.6s" data-wow-duration="0.5s">
                                <i className="icofont-simple-smile"></i>
                                <div className="content">
                                    <span className="counter">400</span>
                                    <p>Baxtli bemorlar</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-fun wow fadeIn" data-wow-delay="0.4s" data-wow-duration="0.5s">
                                <i className="icofont icofont-table"></i>
                                <div className="content">
                                    <span className="counter">10</span>
                                    <p>Yillik Tajriba</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* section */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Biz sizning sog'lig'ingizni yaxshilash uchun turli xizmatlarni taklif qilamiz</h2>
                                <Image src={logo} alt="#" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="choose-left">
                                <h3>Biz kimmiz</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo. </p>
                                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="list">
                                            {WhyChooseList.map(val => <li key={val.id}><i className={val.img}></i>{val.text}</li>)}
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="list">
                                            {WhyChooseList.map(val => <li key={val.id}><i className={val.img}></i>{val.text}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="choose-right">
                                <div className="video-image">
                                    <div className="promo-video">
                                        <div className="waves-block">
                                            <div className="waves wave-1"></div>
                                            <div className="waves wave-2"></div>
                                            <div className="waves wave-3"></div>
                                        </div>
                                    </div>
                                    <a href="https://youtu.be/MKqjKA9X3ZY?list=RDMKqjKA9X3ZY" className="video video-popup mfp-iframe"><i className="fa fa-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
})

export default index