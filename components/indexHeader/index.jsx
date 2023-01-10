import Image from 'next/image'
import React from 'react'
import logo from "../../styles/img/section-img.png"
import { funFacts, funFactslist, singleFeatures, WhyChooseList } from '../../utils/Constants'

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
                        {singleFeatures.map((val) => {
                            return (
                                <div key={val.id} className="col-lg-4 col-12">
                                    <div className={val.id === 3 ? "single-features last wow fadeIn" : "single-features wow fadeIn"} data-wow-delay="0.4s" data-wow-duration="1s">
                                        <div className="signle-icon">
                                            <i className={val.img}></i>
                                        </div>
                                        <h3>{val.text}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>



            <div id="fun-facts" className="fun-facts section overlay">
                <div className="container">
                    <div className="row">
                        {funFacts.map((val) => {
                            return (
                                <div key={val.id} className="col-lg-3 col-md-6 col-12">
                                    <div className="single-fun wow fadeIn" data-wow-delay="1s" data-wow-duration="0.5s">
                                        <i className={val.img}></i>
                                        <div className="content">
                                            <span className="counter">{val.num}</span>
                                            <p>{val.text}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
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
                                            {WhyChooseList.map(val => {
                                                return (
                                                    <li key={val.id}><i className={val.img}></i>{val.text}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="list">
                                            {WhyChooseList.map(val => {
                                                return (
                                                    <li key={val.id}><i className={val.img}></i>{val.text}</li>
                                                )
                                            })}

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
                                            {funFactslist.map((val, id) => <div key={id} className={val.list}></div>)}
                                        </div>
                                    </div>
                                    <iframe className='w-[70%] h-[200px] video video-popup mfp-iframe' src="https://www.youtube.com/embed/8LZJz7GtJA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    {/* <a href="https://youtu.be/MKqjKA9X3ZY?list=RDMKqjKA9X3ZY" className="video video-popup mfp-iframe"><i className="fa fa-play"></i></a> */}
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