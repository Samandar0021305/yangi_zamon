import React from 'react'
import { DoctorsList } from '../../utils/Constants'
import Image from 'next/image'
const index = React.memo(() => {
  return (
    <>
     
     <div className="breadcrumbs overlay">
			<div className="container">
				<div className="bread-inner">
					<div className="row">
						<div className="col-12">
							<h2>Malakali shifokorlarimiz bilan tanishing</h2>
							<ul className="bread-list">
								<li><a href="index.html">Bosh sahifa</a></li>
								<li><i className="icofont-simple-right"></i></li>
								<li className="active">Shifokorlar</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>


        <section id="team" className="team section single-page">
			<div className="container">
				<div className="row">
                    {
                      DoctorsList.map((val,id)=>{
                       return (
					<div key={id} className="col-lg-4 col-md-6 col-12">
						<div className="single-team">
							<div className="t-head">
								<Image src={val.img} alt="#" />
								<div className="t-icon">
									<a href="appointment.html" className="btn">{val.link}</a>
								</div>
							</div>
							<div className="t-bottom">
								<p>{val.text}</p>
								<h2><a href="doctor-details.html">{val.title}</a></h2>
							</div>
						</div>
					</div>	
                       )    
                      })
                    }
							
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
								<input name="EMAIL" placeholder="Telefon raqamingiz" className="common-input" onfocus="this.placeholder = ''"
									onBlur="this.placeholder = 'Telefon raqamingiz'" required="" type="email" />
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