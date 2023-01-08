import React, {useState} from 'react'

const index = React.memo(() => {
  const [searchIcon, setSearchIcon] = useState(false);
  const openInClose = () => {
    setSearchIcon(old => !old)
  }
  return (
    <div>
      <header className="header style2">
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5 col-12">
                <ul className="top-link">
                  <li><a href="about.html">Biz haqimizda</a></li>
                  <li><a href="#">Shifokorlar</a></li>
                  <li><a href="#">Aloqa</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-7 col-12">
                <ul className="top-contact">
                  <li><i className="fa fa-phone"></i>+998 99 231 2433</li>
                  <li><i className="fa fa-envelope"></i><a
                      href="mailto:support@yangi-zamon.uz">support@yangi-zamon.uz</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="middle-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-12">
                <div className="logo">
                  <h3>
                    Yangi zamon
                  </h3>
                </div>
                <div className="mobile-nav"></div>
              </div>
              <div className="col-lg-9 col-md-9 col-12">
                <div className="widget-main">
                  <div className="single-widget">
                    <i className="icofont-ui-call"></i>
                    <p>Telefon nomer</p>
                    <h4>+998 99 231 2433</h4>
                  </div>
                  <div className="single-widget">
                    <i className="icofont-clock-time"></i>
                    <p>Tartib</p>
                    <h4>Dus-Sha: 9.00-18.00</h4>
                  </div>
                  <div className="single-widget button">
                    <div className="get-quote">
                      <a href="uchrashuv.html" className="btn">Uchrashuv</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-inner">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-12">
                  <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu">
                        <li className="active"><a href="index.html">Bosh sahifa</a></li>
                        <li><a href="about.html">Biz haqimizda</a></li>
                        <li><a href="doctors.html">Shifokorlar</a></li>
                        <li><a href="time-table.html">Ish vaqti</a></li>
                        <li><a href="pricing.html">Narxlar</a></li>
                        <li><a href="blog.html">Yangiliklar</a></li>
                        <li><a href="disease.html">Kassalik</a></li>
                      </ul>
                    </nav>
                  </div>
                  <div className="right-bar">
                    <div className={`search-top ${searchIcon ? 'active' : ''}`}>
                      <div className="search"><a onClick={openInClose}><i className="icofont-search-1"></i></a></div>
                      <form className="search-form">
                        <input type="text" placeholder="Qidirish" name="search"/>
                          <button value="search" type="submit"><i className="icofont-search-1"></i></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
})

export default index