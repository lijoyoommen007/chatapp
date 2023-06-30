import React from 'react';

function WhyUsSection() {
  const jsonData = [
    {
      id: 1,
      title: '10 Years Warranty',
      description: 'Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat'
    },
    {
      id: 2,
      title: 'Professional Team',
      description: 'Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para'
    },
    {
      id: 3,
      title: 'Guaranteed Works',
      description: 'Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis'
    },
    {
      id: 4,
      title: 'Customization',
      description: 'Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis'
    }
  ];

  return (
    <section id="why-us" className="why-us">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Why Us</h2>
          <p>Why Choose KASTHA</p>
        </div>

        <div className="row">
          {jsonData.map((item) => (
            <div className="col-lg-3 mt-3 mt-lg-0" key={item.id}>
              <div className="box" data-aos="zoom-in" data-aos-delay="100">
                <span>{item.id.toString().padStart(2, '0')}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;
