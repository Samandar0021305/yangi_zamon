import React from 'react'
import Image from 'next/image'
import logo from "../../styles/img/section-img.png"
import { portfolioList, service } from '../../utils/Constants'

const index = React.memo(() => {
    return (
        <>
            <section class="call-action overlay mt-[20px]" data-stellar-background-ratio="0.5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-12">
                            <div class="content">
                                <h2>Shoshilinch tibbiy yordam kerakmi? +998992312433 raqamiga qo'ng'iroq qiling</h2>
                                <div class="button">
                                    <a href="#" class="btn">Hozir murojaat qiling</a>
                                    <a href="#" class="btn second">Batafsil ma'lumot<i class="fa fa-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="portfolio section" >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <h2>Kasalxonamiz ichida tozalik qoidalariga rioya qilamiz</h2>
                                <Image src={logo} alt="#" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12 col-12">
                            <div class="owl-carousel portfolio-slider">
                                {
                                    portfolioList.map((val, id) => {
                                        return (
                                            <div key={id} class="single-pf wow fadeIn" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                                <Image src={val.img} alt="#" />
                                                <a href="#" class="btn">Tafsilotlarni ko'rish</a>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="services section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <h2>Biz sizning sog'lig'ingizni yaxshilash uchun turli xizmatlarni taklif qilamiz</h2>
                                <Image src={logo} alt="#" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {
                            service.map((val, id) => {
                                return (
                                    <div key={id} class="col-lg-4 col-md-6 col-12">
                                        <div class="single-service wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                                            <i class={val.img}></i>
                                            <h4><a href="#">{val.text}</a></h4>
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



