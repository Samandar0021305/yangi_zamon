import React from 'react'

import Image from 'next/image'
import img1 from "../../styles/img/testi1.png"
import img2 from "../../styles/img/testi2.png"
import img3 from "../../styles/img/testi3.png"
import logo from "../../styles/img/section-img2.png"

const index = React.memo(() => {
  return (
    <section classNameName="section testimonials overlay" data-stellar-background-ratio="0.5">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title">
                    <h2>Bemorlarimiz tibbiy muolajalarimiz haqida nima deyishadi</h2>
                    <img src={logo} alt="#" />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 col-12">
                <div className="owl-carousel testimonial-slider">
                    <div className="single-testimonial">
                        <Image src={img1} alt="#" />
                        <p>Lorem ipsum dolor sit amet consectetur eliet adipiscing. Aliquam nec suscipit turpis, vel pretium eros. </p>
                        <h4 className="name">Ruhfayed Sakib</h4>
                    </div>
                    <div className="single-testimonial">
                        <Image src={img2} alt="#" />
                        <p>Lorem ipsum dolor sit amet consectetur eliet adipiscing. Aliquam nec suscipit turpis, vel pretium eros. </p>
                        <h4 className="name">Shakil Hossain</h4>
                    </div>
                    <div className="single-testimonial">
                        <Image src={img3} alt="#" />
                        <p>Lorem ipsum dolor sit amet consectetur eliet adipiscing. Aliquam nec suscipit turpis, vel pretium eros. </p>
                        <h4 className="name">Naimur Rahman</h4>
                    </div>
                    <div className="single-testimonial">
                        <Image src={img1} alt="#" />
                        <p>Lorem ipsum dolor sit amet consectetur eliet adipiscing. Aliquam nec suscipit turpis, vel pretium eros. </p>
                        <h4 className="name">Ruhfayed Sakib</h4>
                    </div>
                    <div className="single-testimonial">
                        <Image src={img2} alt="#" />
                        <p>Lorem ipsum dolor sit amet consectetur eliet adipiscing. Aliquam nec suscipit turpis, vel pretium eros. </p>
                        <h4 className="name">Shakil Hossain</h4>
                    </div>
                    <div className="single-testimonial">
                        <Image src={img3} alt="#" />
                        <p>Lorem ipsum dolor sit amet consectetur eliet adipiscing. Aliquam nec suscipit turpis, vel pretium eros. </p>
                        <h4 className="name">Naimur Rahman</h4>
                    </div>
                    <div className="single-testimonial">
                        <Image src={img1} alt="#" />
                        <p>Lorem ipsum dolor sit amet consectetur eliet adipiscing. Aliquam nec suscipit turpis, vel pretium eros. </p>
                        <h4 className="name">Ruhfayed Sakib</h4>
                    </div>
                    <div className="single-testimonial">
                        <Image src={img2} alt="#" />
                        <p>Lorem ipsum dolor sit amet consectetur eliet adipiscing. Aliquam nec suscipit turpis, vel pretium eros. </p>
                        <h4 className="name">Naimur Rahman</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>  
  )
})

export default index