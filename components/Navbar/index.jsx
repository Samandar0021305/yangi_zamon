import Link from "next/link";
import React, { useState } from "react";
import { HeaderList, navContact, NavList } from "../../utils/Constants";
import { useRouter } from "next/router";

const index = React.memo(() => {
  const router = useRouter();
  const [searchIcon, setSearchIcon] = useState(false);
  const openInClose = () => {
    setSearchIcon((old) => !old);
  };
  return (
    <div>
      <header className="header style2">
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5 col-12">
                <ul className="top-link">
                  {NavList.map((val) => {
                    return (
                      <li key={val.id}>
                        <Link href={val.href}>{val.text}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-lg-6 col-md-7 col-12">
                <ul className="top-contact">
                  {navContact.map((val) => (
                    <li key={val.id}>
                      <i className={val.img}></i>
                      <a href={val.href}>{val.text}</a>
                    </li>
                  ))}
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
                  <h3 className="text-[20px] lg:text-[25px] xl:text-[35px] font-medium">
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
                      <a href="uchrashuv.html" className="btn">
                        Uchrashuv
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-inner sticky top-0">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-12 flex justify-between ">
                  <div className="main-menu ">
                    <nav className="navigation">
                      <ul className="nav menu">
                        {HeaderList.map((val) => (
                          <li
                            className={
                              val.href == router.route
                                ? `border-[#1A76D1] mb-[3px] border-b-4`
                                : null
                            }
                            key={val.id}
                          >
                            <Link href={val.href}>
                              <span
                                className={
                                  val.href == router.route
                                    ? `text-[#1A76D1]`
                                    : null
                                }
                              >
                                {val.text}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                  <div className="right-bar ml-auto">
                    <div className={`search-top ${searchIcon ? "active" : ""}`}>
                      <div className="search">
                        <a onClick={openInClose}>
                          <i className="icofont-search-1"></i>
                        </a>
                      </div>
                      <form className="search-form">
                        <input
                          type="text"
                          placeholder="Qidirish"
                          name="search"
                        />
                        <button
                          value="search"
                          className="ml-auto"
                          type="submit"
                        >
                          <i className="icofont-search-1 "></i>
                        </button>
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
  );
});

export default index;
