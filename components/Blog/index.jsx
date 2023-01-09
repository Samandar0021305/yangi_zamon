import React from 'react'
import Image from 'next/image'
import logo from "../../styles/img/section-img.png"
import {FormGroup, BlogList, clientsList ,FormCurrent} from '../../utils/Constants'
import client from "../../styles/img/contact-img.png"

const index = React.memo(() => {
    return (
        <>
            <section className="blog section" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Bizning eng so'nggi tibbiy yangiliklarimizdan xabardor bo'ling.</h2>
                                <Image src={logo} alt="#" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            BlogList.map((val, id) => {
                                return (
                                    <div key={id} className="col-lg-4 col-md-6 col-12">
                                        <div className="single-news wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                                            <div className="news-head">
                                                <Image src={val.img} alt="#" />
                                            </div>
                                            <div className="news-body">
                                                <div className="news-content">
                                                    <div className="date">3 aprel, 2022 yil</div>
                                                    <h2><a href="#">{val.text}</a></h2>
                                                    <p className="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
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



            <div className="clients overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="owl-carousel clients-slider">
                                {clientsList.map((val, id) => {
                                    return (
                                        <div key={id} className="single-clients">
                                            <Image src={val.img} alt="#" />
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="appointment">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Biz har doim sizga yordam berishga tayyormiz. Uchrashuvni bron qilish</h2>
                                <Image src={logo} alt="#" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <form className="form" action="#">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input name="name" type="text" placeholder="FIO" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input name="email" type="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input name="phone" type="text" placeholder="Telefon" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <div className="nice-select form-control wide" ><span className="current">Bo'lim</span>
                                                <ul className="list">
                                                    {FormGroup.map((val)=><li key={val.id} data-value={`${val.id}`} className={val.id == 1 ? "option selected" : "option "}>{val.text}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <div className="nice-select form-control wide"><span className="current">Doktor</span>
                                                <ul className="list">
                                                    {
                                                        FormCurrent.map((val)=><li key={val.id} data-value={`${val.id}`} className="option selected ">{val.id}</li>)
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input type="text" placeholder="Sana" id="datepicker" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="form-group">
                                            <textarea name="message" placeholder="Xabaringizni shu yerga yozing....."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5 col-md-4 col-12">
                                        <div className="form-group">
                                            <div className="button">
                                                <button type="submit" className="btn">Yuborish</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-8 col-12">
                                        <p>( Biz matnli xabar orqali tasdiqlanamiz )</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 col-md-12 ">
                            <div className="appointment-image">
                                <Image src={client} alt="#" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="newsletter section">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6  col-12">
                            <div className="subscribe-text ">
                                <h6>Yangiliklarni kuzatib borish</h6>
                            </div>
                        </div>
                        <div className="col-lg-6  col-12">
                            <div className="subscribe-form ">
                                <form action="" method="get" className="newsletter-inner">
                                    <input name="EMAIL" placeholder="Telefon raqamingiz" className="common-input" 
                                        required="" type="email" />
                                    <button className="btn">Azo bolish</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
})

export default index