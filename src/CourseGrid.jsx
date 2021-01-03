import React from "react";
import Curso from "./Curso";

const cursos = [
  {
    title: "React desde cero",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    price: 50,
    profesor: "Jair Tello",
  },
  {
    title: "Python desde 0",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/medium/85d3d7e4-19db-4cff-a4cb-cbead813b6b5.png",
    price: 40,
    profesor: "Julio Vargas",
  },
  {
    title: "Fundamentos de AWS",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/medium/608331fa-c0c6-4f7c-9ad7-470903923179.jpg",
    price: 60,
    profesor: "Emanuel Faert",
  },
  {
    title: "React desde cero",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    price: 50,
    profesor: "Jair Tello",
  },
  {
    title: "Python desde 0",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/medium/85d3d7e4-19db-4cff-a4cb-cbead813b6b5.png",
    price: 40,
    profesor: "Julio Vargas",
  },
  {
    title: "Fundamentos de AWS",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/medium/608331fa-c0c6-4f7c-9ad7-470903923179.jpg",
    price: 60,
    profesor: "Emanuel Faert",
  },
];

const CourseGrid = () => {
  return (
    <div className="ed-grid m-grid-4">
      {cursos.map((curso, index) => (
        <Curso
          key={index}
          image={curso.image}
          title={curso.title}
          profesor={curso.profesor}
          price={curso.price}
        />
      ))}
    </div>
  );
};

export default CourseGrid;
