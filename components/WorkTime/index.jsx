import React from "react";
import logo from "../../styles/img/section-img.png";
import Image from "next/image";
import BreadCrumb from "../reuseable/BreadCrumb";
import HeaderText from "../reuseable/HeaderText";
import Newsletter from "../reuseable/Newsletter";
import { tableData } from "../../utils/Constants";

const WorkTime = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <BreadCrumb title="Ish vaqti" />
      {/* Calendar */}
      <section className="doctor-calendar-area section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <HeaderText
                title="Keladigan sanani aniqlang"
                desc="Lorem ipsum dolor sit amet consectetur adipiscing elit
                  praesent aliquet. pretiumts"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="doctor-calendar-table table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Vaqt</th>
                      <th>Dushanba</th>
                      <th>Seshanba</th>
                      <th>Chorshanba</th>
                      <th>Payshanba</th>
                      <th>Juma</th>
                      <th>Shanba</th>
                    </tr>
                  </thead>

                  <tbody>
                    {tableData.map((item, index) => (
                      <tr key={index}>
                        {item.map(({ time, id, name, prof, nobody }) => (
                          <td key={id}>
                            {time ? <span className="time">{time}</span> : null}
                            {name ? (
                              <>
                                <h3>{name}</h3> <span>{prof}</span>
                              </>
                            ) : null}
                            {nobody ? "" : null}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default WorkTime;
