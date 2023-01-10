import React from 'react'
import Image from 'next/image'
import logo from "../../styles/img/section-img.png"
import { portfolioList, service } from '../../utils/Constants'
import CustomSlider from "../custumSlider"
import CaruselCustom from "../CaruselCustom"

const index = React.memo(() => {
    return (
        <>
            <section className="call-action overlay mt-[20px]" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="content">
                                <h2>Shoshilinch tibbiy yordam kerakmi? +998992312433 raqamiga qo'ng'iroq qiling</h2>
                                <div className="button">
                                    <a href="#" className="btn">Hozir murojaat qiling</a>
                                    <a href="#" className="btn second">Batafsil ma'lumot<i className="fa fa-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <CustomSlider />


            <section className="services section">
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
                        {
                            service.map((val, id) => {
                                return (
                                    <div key={id} className="col-lg-4 col-md-6 col-12">
                                        <div className="single-service wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                                            <i className={val.img}></i>
                                            <h4><a href="#">{val.text}</a></h4>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
         
         <CaruselCustom />
         
        </>
    )
})

export default index



