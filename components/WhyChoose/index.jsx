import React from 'react'
import Image from 'next/image'
import logo from "../../styles/img/section-img.png"
import { WhyChooseList } from '../../utils/Constants'

const index = React.memo(() => {
    return (
        <section className="why-choose section mb-[90px]" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Biz sizning sog'lig'ingizni yaxshilash uchun turli xizmatlarni taklif qilamiz</h2>
                            <Image src={logo} alt="logo png" />
                        </div>
                    </div>
                </div>
                <div classNameName="row">
                    <div className="col-lg-6 col-12">
                        <div className="choose-left">
                            <h3>Biz kimmiz</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo. </p>
                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className="list">{WhyChooseList.map(val => <li key={val.id}><i className={val.img}></i>{val.text}</li>)}</ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="list">{WhyChooseList.map(val => <li key={val.id}><i className={val.img}></i>{val.text}</li>)}</ul>
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

    )
})

export default index