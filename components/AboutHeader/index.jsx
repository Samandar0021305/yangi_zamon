import React from 'react'
import { AboutHeaderList } from '../../utils/Constants'

const index = React.memo(() => {
  return (
    <>

<div className="breadcrumbs overlay">
			<div className="container">
				<div className="bread-inner">
					<div className="row">
						<div className="col-12">
							<h2>Biz haqimizda</h2>
							<ul className="bread-list">
								<li><a href="index-2.html">Bosh sahifa</a></li>
								<li><i className="icofont-simple-right"></i></li>
								<li className="active">BIz haqimizda</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

    <section className="about-area section">
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="about-image">
                            
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="about-content">
                            <span>Biz haqimizda</span>
                            <h2>1999 yildan beri Yangi-zamon klinikasi haqida qisqacha hikoya</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <ul>
                                {
                                    AboutHeaderList.map((val,item)=>{
                                        return (
                                            <li key={item}><i className={val.img}></i>{val.text}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
        <section className="our-vision-area ptb-100 pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="single-vision-box">
                            <div className="icon">
                                <i className="icofont-tick-mark"></i>
                            </div>
                            <h3>Bizning missiyamiz</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="single-vision-box">
                            <div className="icon">
                                <i className="icofont-tick-mark"></i>
                            </div>
                            <h3>Bizning rajalarimiz</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="single-vision-box">
                            <div className="icon">
                                <i className="icofont-tick-mark"></i>
                            </div>
                            <h3>Bizning korinishimiz</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section className="our-mission-area ptb-100 pt-0">
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="our-mission-content">
                            <span className="sub-title">Missiyamiz va Korinishimiz</span>
                            <h2>Yaxshiroq ma'lumot, yaxshi sog'liq</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <ul>
                                <li>
                                    <div className="icon">
                                        <i className="icofont-doctor"></i>
                                    </div>
                                    <span>Professional xodimlar</span>

                                    Lorem ipsum dolor sit amet sit, consectetur adipiscing elit.
                                </li>
                                <li>
                                    <div className="icon">
                                       <i className="icofont-kid"></i>
                                    </div>
                                    <span>Yangi tug'ilgan chaqaloqlarni parvarish qilish</span>

                                    Lorem ipsum dolor sit amet sit, consectetur adipiscing elit.
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="icofont-laboratory"></i>
                                    </div>
                                    <span>Etarlicha laboratoriya testlari</span>

                                    Lorem ipsum dolor sit amet sit, consectetur adipiscing elit.
                                </li>
                                <li>
                                    <div className="icon">
                                       <i className="icofont-tooth"></i>
                                    </div>
                                    <span>Tish chiqarish</span>

                                    Lorem ipsum dolor sit amet sit, consectetur adipiscing elit.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="our-mission-image">
                            
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
								<input name="EMAIL" placeholder="Telefon raqamingiz" className="common-input"  required="" type="email" />
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