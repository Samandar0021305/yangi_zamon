import React from 'react'
import Image from 'next/image'
import logo from "../../styles/img/section-img.png"
import { service } from '../../utils/Constants'

const index = React.memo(() => {
  return (
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
        {service.map((val,id)=>{
            return(
                <div key={id} className={val.classList}>
                <div className={val.classList2} data-wow-delay="0.4s" data-wow-duration="1s">
                    <i className={val.img}></i>
                    <h4><a href="#">{val.text}</a></h4>
                </div>
            </div>
            )
        })}
       
    </div>
</div>
</section>
  )
})

export default index