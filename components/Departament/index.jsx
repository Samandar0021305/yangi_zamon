import React from 'react'
import Image from 'next/image'
import logo from "../../styles/img/section-img.png"
import department from "../../styles/img/department.jpg"

const index = React.memo(() => {
	return (
		<>
			<section className="departments section">
				<div className="container">
					<div className="row">
						<div classNameName="col-lg-12">
							<div className="section-title">
								<h2>Biz sizning kasalliklaringizga tashxis qo'yish uchun turli bo'limlarni taklif qilamiz</h2>
								<Image src={logo} alt="#" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="department-tab">
								<ul className="nav nav-tabs" id="myTab" role="tablist" style={{ display: "flex", justifyContent: "space-between !important", }}>
									<li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#t-tab1" role="tab"><i className="icofont-heart-beat"></i><span className="first">Kardiologiya</span><span className="second"></span></a></li>
									<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#t-tab2" role="tab"><i className="icofont-brain-alt"></i><span className="first">Neurology</span><span className="second"></span></a></li>
									<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#t-tab3" role="tab"><i className="icofont-tooth"></i><span className="first">Stomatologiya</span><span className="second"></span></a></li>
									<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#t-tab4" role="tab"><i className="icofont-heart-beat"></i><span className="first">Yurak Jarrohligi</span><span className="second"></span></a></li>
									<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#t-tab5" role="tab"><i className="icofont-bone"></i><span className="first">Ortopediya</span><span className="second"></span></a></li>
								</ul>
								<div className="tab-content" id="myTabContent">
									<div className="tab-pane fade show active" id="t-tab1" role="tabpanel">
										<div className="row">
											<div className="col-lg-6">
												<div className="department-left">
													<h3>Kardiologiya klinikasi</h3>
													<p className="p1">“Vivamus ut tellus sed tellus finibus egestas. Mauris adipiscing aliquet et nisl nec eleifend adipiscing elit.”</p>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ante vel est lobortis, a commodo magna rhoncus. In quis nisi non quam pharetra commodo. </p>
													<ul className="list">
														<li><i className="fa fa-check"></i>Maecenas vitae luctus nibh. Curabitur pharetra luctus est, sit amet aliquam ex posuere id. </li>
														<li><i className="fa fa-check"></i> Maecenas pharetra ante vel est lobortis</li>
														<li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur.</li>
													</ul>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="department-right">
													<Image src={department} alt="#" />
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="t-tab2" role="tabpanel">
										<div className="row">
											<div className="col-lg-6">
												<div className="department-left">
													<h3>Nevrologiya</h3>
													<p className="p1">“Vivamus ut tellus sed tellus finibus egestas. Mauris adipiscing aliquet et nisl nec eleifend adipiscing elit.”</p>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ante vel est lobortis, a commodo magna rhoncus. In quis nisi non quam pharetra commodo. </p>
													<ul className="list">
														<li><i className="fa fa-check"></i>Maecenas vitae luctus nibh. Curabitur pharetra luctus est, sit amet aliquam ex posuere id. </li>
														<li><i className="fa fa-check"></i> Maecenas pharetra ante vel est lobortis</li>
														<li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur.</li>
													</ul>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="department-right">
													<Image src={department} alt="#" />
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="t-tab3" role="tabpanel">
										<div className="row">
											<div className="col-lg-6">
												<div className="department-left">
													<h3>Stomatologiya</h3>
													<p className="p1">“Vivamus ut tellus sed tellus finibus egestas. Mauris adipiscing aliquet et nisl nec eleifend adipiscing elit.”</p>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ante vel est lobortis, a commodo magna rhoncus. In quis nisi non quam pharetra commodo. </p>
													<ul className="list">
														<li><i className="fa fa-check"></i>Maecenas vitae luctus nibh. Curabitur pharetra luctus est, sit amet aliquam ex posuere id. </li>
														<li><i className="fa fa-check"></i> Maecenas pharetra ante vel est lobortis</li>
														<li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur.</li>
													</ul>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="department-right">
													<Image src={department} alt="#" />
												</div>
											</div>
										</div>
									</div>

									<div className="tab-pane fade" id="t-tab4" role="tabpanel">
										<div className="row">
											<div className="col-lg-6">
												<div className="department-left">
													<h3>Gastroenterologiya</h3>
													<p className="p1">“Vivamus ut tellus sed tellus finibus egestas. Mauris adipiscing aliquet et nisl nec eleifend adipiscing elit.”</p>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ante vel est lobortis, a commodo magna rhoncus. In quis nisi non quam pharetra commodo. </p>
													<ul className="list">
														<li><i className="fa fa-check"></i>Maecenas vitae luctus nibh. Curabitur pharetra luctus est, sit amet aliquam ex posuere id. </li>
														<li><i className="fa fa-check"></i> Maecenas pharetra ante vel est lobortis</li>
														<li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur.</li>
													</ul>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="department-right">
													<Image src={department} alt="#" />
												</div>
											</div>
										</div>
									</div>

									<div className="tab-pane fade" id="t-tab5" role="tabpanel">
										<div className="row">
											<div className="col-lg-6">
												<div className="department-left">
													<h3>Ortopediya</h3>
													<p className="p1">“Vivamus ut tellus sed tellus finibus egestas. Mauris adipiscing aliquet et nisl nec eleifend adipiscing elit.”</p>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra ante vel est lobortis, a commodo magna rhoncus. In quis nisi non quam pharetra commodo. </p>
													<ul className="list">
														<li><i className="fa fa-check"></i>Maecenas vitae luctus nibh. Curabitur pharetra luctus est, sit amet aliquam ex posuere id. </li>
														<li><i className="fa fa-check"></i> Maecenas pharetra ante vel est lobortis</li>
														<li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur.</li>
													</ul>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="department-right">
													<Image src={department} alt="#" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
})

export default index