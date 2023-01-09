import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter section">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6  col-12">
            <div className="subscribe-text ">
              <h6>Yangiliklarni kuzatib borish</h6>
              <p className="">
                Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,
                <br /> homero alterum.
              </p>
            </div>
          </div>
          <div className="col-lg-6  col-12">
            <div className="subscribe-form ">
              <form action="" method="get" className="newsletter-inner">
                <input
                  name="EMAIL"
                  placeholder="Telefon raqamingiz"
                  className="common-input"
                  onFocus="this.placeholder = ''"
                  onBlur="this.placeholder = 'Telefon raqamingiz'"
                  required=""
                  type="email"
                />
                <button className="btn">Azo bolish</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
