import React from "react";

const Banner = () => {
  return (
    <div
      className="main-banner img-container diagonal l-section"
      id="main-banner"
    >
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img
            className="main-banner__img"
            src="https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
            alt="Bckground Banner"
          />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">TVJair</p>
            <p>Comienza tu futuro desde hoy</p>
            <a href="#hola" className="button">
              Tomar clases
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
