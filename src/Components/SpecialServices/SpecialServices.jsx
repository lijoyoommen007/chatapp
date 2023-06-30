import React from 'react';
import jsonData from './specialsData.json';

function SpecialsSection() {
  return (
    <section id="specials" className="specials">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Specials</h2>
          <p>Check Our Specials</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              {jsonData.map((item) => (
                <li className="nav-item" key={item.id}>
                  <a className={`nav-link ${item.id === 'tab-1' ? 'active show' : ''}`} data-bs-toggle="tab" href={`#${item.id}`}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              {jsonData.map((item) => (
                <div className={`tab-pane ${item.id === 'tab-1' ? 'active show' : ''}`} id={item.id} key={item.id}>
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>{item.title}</h3>
                      <p className="fst-italic">{item.description}</p>
                      <p>{item.additionalInfo}</p>
                      <div className="circle_black long">
                        <a href="/veener-door.html">See More</a>
                      </div>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={item.image} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialsSection;
