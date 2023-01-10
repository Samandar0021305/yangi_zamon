import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";
import logo from "../../styles/img/section-img.png";
import department from "../../styles/img/department.jpg";
import { departmentList, departnav } from "../../utils/Constants";


const index = React.memo(() => {
  const [classlist, setClasslist] = useState(false)
  const [valueId, setValueId] = useState(1)

  const onCLickHandler = useCallback((current) => {
    setValueId(current)
    console.log(valueId);
    setClasslist(p => !p)
  }, [valueId, classlist])


  return (
    <>
      <section className="departments section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>
                  Biz sizning kasalliklaringizga tashxis qo'yish uchun turli
                  bo'limlarni taklif qilamiz
                </h2>
                <Image src={logo} alt="#" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="department-tab">
                <ul className="nav nav-tabs flex justify-between items-center">
                  {departnav.map(val => {
                    let dis = val.id
                    return (
                      <li onClick={() => onCLickHandler(dis)} key={dis} className="cursor-pointer nav-item">
                        <a className={dis == valueId ? 'nav-link active' : 'nav-link'} data-toggle="tab">
                          <i className={val.img}></i>
                          <span className="first">{val.title}</span>
                          <span className="second"></span>
                        </a>
                      </li>)
                  })}
                </ul>
                <div className="tab-content" id="myTabContent">
                  {departmentList.map(val => {
                    if (val.id === valueId)
                      return (
                        <div data-aos="fade-up-right" key={val.id} className="tab-pane fade show active">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="department-left">
                                <h3>{val.title}</h3>
                                <p className="p1">{val.viaves}</p>
                                <p>{val.clic}</p>
                                <ul className="list">
                                  {val.list.map((el, id) => {
                                    return (
                                      <li key={id}><i className="fa fa-check"></i>{el.text}</li>)
                                  })}
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
                      )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default index;
