import React from 'react'
import carouselData from "./imageCarosalJson.json"

function ImageCarosal() {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    {carouselData.map((item, index) => (
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to={index}
        className={index === 0 ? "active" : ""}
        aria-current={index === 0 ? "true" : "false"}
        aria-label={`Slide ${index + 1}`}
        key={index}
      ></button>
    ))}
  </div>
  <div className="carousel-inner">
    {carouselData.map((item, index) => (
      <div
        className={`carousel-item ${index === 0 ? "active" : ""}`}
        data-bs-interval="10000"
        key={index}
      >
        <img src={item.imageSrc} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5 className="caroselH5">{item.caption}</h5>
          <p className="carosalPtag">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  )
}

export default ImageCarosal