import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Curso = ({ id, image, title, profesor, price }) => {
  return (
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <Link to={`/cursos/${id}`}>
          <img src={image} alt="Curse" />
        </Link>
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">{title}</h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img
                  src="https://ux.ed.team/img/profesor.jpg"
                  alt="Intructor"
                />
              </div>
            </div>
            <span className="small">{profesor}</span>
          </div>
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="#comprar">
            {`$ ${price} USD`}
          </a>
        </div>
      </div>
    </article>
  );
};

Curso.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  profesor: PropTypes.string.isRequired,
};

Curso.defaultProps = {
  title: "No se encontro titulo",
  image:
    "https://edteam-media.s3.amazonaws.com/courses/medium/e7fbb7f9-773c-426a-bbb5-14276a37af33.png",
  price: 0,
  profesor: "",
};

export default Curso;
