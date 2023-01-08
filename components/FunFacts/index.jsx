import React from 'react'

const index = () => {
  return (
    <div id="fun-facts" className="fun-facts section overlay">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6 col-12">
						<div classNameName="single-fun wow fadeIn" data-wow-delay="1s" data-wow-duration="0.5s">
							<i className="icofont icofont-home"></i>
							<div className="content">
								<span className="counter">100</span>
								<p>Kasalxona xonalari</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-12">
						<div className="single-fun wow fadeIn" data-wow-delay="0.8s" data-wow-duration="0.5s">
							<i className="icofont icofont-user-alt-3"></i>
							<div className="content">
								<span className="counter">50</span>
								<p>Ixtisoslashgan shifokorlar</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-12">
						<div className="single-fun wow fadeIn" data-wow-delay="0.6s" data-wow-duration="0.5s">
							<i className="icofont-simple-smile"></i>
							<div className="content">
								<span className="counter">400</span>
								<p>Baxtli bemorlar</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-12">
						<div className="single-fun wow fadeIn" data-wow-delay="0.4s" data-wow-duration="0.5s">
							<i className="icofont icofont-table"></i>
							<div className="content">
								<span className="counter">10</span>
								<p>Yillik Tajriba</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default React.memo(index)