import Link from 'next/link';
import React, {useState} from 'react'
import {HeaderList, navContact, NavList} from "../../utils/Constants"

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
                  {NavList.map(val=>{return (<li key={val.id}><Link href={val.href}>{val.text}</Link></li>) })}
                </ul>
              </div>
              <div className="col-lg-6 col-md-7 col-12">
                <ul className="top-contact">
                 {navContact.map(val=><li key={val.id}><i className={val.img}></i><a href={val.href}>{val.text}</a></li>)}
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
              <div className="row ">
                <div className="col-12 flex justify-between items-center">
                  <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu">
                        {HeaderList.map(val=><li key={val.id}><Link href={val.href}>{val.text}</Link></li>)}
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