import React, { useState } from "react";
import Modal from "react-modal";
import  "./gallaryStyle.css"
const jsonData = [
    {
      imageUrl: "/img/gallery/gallery-1.jpg",
      altText: "Image 1",
    },
    {
      imageUrl: "/img/gallery/gallery-2.jpg",
      altText: "Image 2",
    },
    {
        imageUrl: "/img/gallery/gallery-3.jpg",
        altText: "Image 2",
      },
      {
        imageUrl: "/img/gallery/gallery-4.jpg",
        altText: "Image 2",
      },
      {
        imageUrl: "/img/gallery/gallery-5.jpg",
        altText: "Image 2",
      },
    // Add more items as needed
  ];
  
  const Gallery = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const openModal = (imageUrl) => {
      setSelectedImage(imageUrl);
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
      setSelectedImage(null);
    };
  
    return (
      <section id="gallery" className="gallery">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>Some photos from Our Restaurant</p>
          </div>
        </div>
  
        <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-0 d-flex justify-content-center">
            {jsonData.map((item, index) => (
              <div className="col-lg-3 col-md-4" key={index}>
                <div className="gallery-item">
                  <button
                    onClick={() => openModal(item.imageUrl)}
                    className="gallery-lightbox"
                    data-gall="gallery-item"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.altText}
                      className="img-fluid"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="image-modal"
          overlayClassName="image-modal-overlay"
        >
          <button className="modal-close" onClick={closeModal}>
            X
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected Image"
              className="img-fluid"
            />
          )}
        </Modal>
      </section>
    );
  };
  
  export default Gallery;
