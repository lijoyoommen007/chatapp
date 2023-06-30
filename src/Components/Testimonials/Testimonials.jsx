import React, { useEffect } from 'react';
import jsonData from "./testimonailsData.json";
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import SwiperCore, { Pagination,Autoplay  } from "swiper/core";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay";

function TestimonialsSection() {
  useEffect(() => {
    // Initialize Swiper here
  }, []);

  SwiperCore.use([Pagination,Autoplay]);

  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>What they're saying about us</p>
        </div>

        <Swiper
          className="testimonials-slider swiper"
          autoplay={{
            delay: 3000, // Delay between slides in milliseconds
          }}
          slidesPerView={1}
          initialSlide={1}
          centeredSlides={true}
          pagination={{
            clickable: true
          }}
          breakpoints={{
            // When window width is >= 768px
            768: {
              slidesPerView: 1,
            },
            // When window width is >= 992px
            992: {
              slidesPerView: 3,
            },
          }}
        >
          {jsonData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  {testimonial.quote}
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={testimonial.image} className="testimonial-img" alt="" />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.designation}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialsSection;
