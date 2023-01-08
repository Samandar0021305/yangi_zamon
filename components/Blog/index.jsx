import React from 'react'
import Image from 'next/image'
import logo from "../../styles/img/section-img.png"
import { BlogList } from '../../utils/Constants'

const index = React.memo(() => {
    return (
        <>
            <section class="blog section" id="blog">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <h2>Bizning eng so'nggi tibbiy yangiliklarimizdan xabardor bo'ling.</h2>
                                <Image src={logo} alt="#" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {
                            BlogList.map((val, id) => {
                                return (
                                    <div key={id} class="col-lg-4 col-md-6 col-12">
                                        <div class="single-news wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                                            <div class="news-head">
                                                <Image src={val.img} alt="#" />
                                            </div>
                                            <div class="news-body">
                                                <div class="news-content">
                                                    <div class="date">3 aprel, 2022 yil</div>
                                                    <h2><a href="#">{val.text}</a></h2>
                                                    <p class="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
                                                </div>
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