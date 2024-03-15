import React from 'react';

function Carousel({ mascotas }) {
  return (
    <div className="container mt-4 mb-4">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              {mascotas.map((mascota, index) => (
                <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
              ))}
            </ol>
            <div className="carousel-inner">
              {mascotas.map((mascota, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <img className="d-block w-100" src={mascota.src} alt={`Slide ${index}`} />
                  <div className="glamorphims carousel-caption d-none d-md-block">
                    <h5>{mascota.name}</h5>
                    <p>{mascota.gender} - {mascota.age}</p>
                    <p>{mascota.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
