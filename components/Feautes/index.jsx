import React from 'react'
import Image from 'next/image'
import logo from "../../styles/img/section-img.png"

const index = React.memo(() => {
  return (
          <section className="Feautes index2 section">
			<div classNameName="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title">
							<h2>Biz sizga va oilangizga yordam berishga doim tayyormiz</h2>
							<Image src={logo} alt="#" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-12">
						<div className="single-features wow fadeIn" data-wow-delay="0.4s" data-wow-duration="1s">
							<div className="signle-icon">
								<i className="icofont icofont-ambulance-cross"></i>
							</div>
							<h3>Favqulodda yordam</h3>
						</div>
					</div>
					<div className="col-lg-4 col-12">
						<div className="single-features wow fadeIn" data-wow-delay="0.6s" data-wow-duration="1s">
							<div className="signle-icon">
								<i className="icofont icofont-medical-sign-alt"></i>
							</div>
							<h3>Boyitilgan dorixona</h3>
						</div>
					</div>
					<div className="col-lg-4 col-12">
						<div className="single-features last wow fadeIn" data-wow-delay="0.6s" data-wow-duration="1s">
							<div className="signle-icon">
								<i className="icofont icofont-stethoscope"></i>
							</div>
							<h3>Tibbiy davolash</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
  )
})

export default index