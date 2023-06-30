import React from 'react';
import "./doorStyles.css";

function Doors({ data }) {
  return (
    <>
      <section style={{ width: "100vw", padding: "0px 0", position: "relative" }}>
        <div style={{ position: "relative" }}>
          <img src={data.headingData.bgImg} style={{ width: "100%" }} alt="" />
          <h1 style={{ position: "absolute", top: "40%", left: 0, width: "100%", textAlign: "center", color: "#ffa50a", backgroundColor: "rgba(0, 0, 0, 0.7)", padding: "10px", fontFamily: "fantasy" }}>{data.headingData.heading}</h1>
        </div>
      </section>

      <section id="cta" className="cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-left text-lg-left">
              <h3>{data.headingData.desc}</h3>
              <ul>
                <li>
                  <p style={{ marginTop: "1rem" }}>{data.headingData.point1}</p>
                </li>
                <li>
                  <p style={{ marginTop: "1rem" }}>{data.headingData.point2}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {data.data.map((product, index) => (
        <section key={index} className="container">
          <div>
            <h1 className="hover-underline-animation">{product.title}</h1>
          </div>
          <div className="team-grid">
            <div className="container">
              <div style={{ flexWrap: 'wrap' }} className="people d-flex justify-content-around">
                {product.products.map((items, index) => {
                  return (
                    <div className="item" key={index}>
                      <div className="box" style={{ backgroundImage: `url(${items.bgImg})` }}>
                        <div className="cover">
                          <h3 className="name">{items.title}</h3>
                          <p className="title">{items.desc}</p>
                          <div className="social">
                            <a href="#"><i className="fa fa-facebook-official"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default Doors;
