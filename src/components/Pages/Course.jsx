const cursos = [
  {
    id: 1,
    title: "React desde cero",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    price: 50,
    profesor: "Jair Tello",
  },
  {
    id: 2,
    title: "Python desde 0",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/medium/85d3d7e4-19db-4cff-a4cb-cbead813b6b5.png",
    price: 40,
    profesor: "Julio Vargas",
  },
  {
    id: 3,
    title: "Fundamentos de AWS",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/medium/608331fa-c0c6-4f7c-9ad7-470903923179.jpg",
    price: 60,
    profesor: "Emanuel Faert",
  },
  {
    id: 4,
    title: "React desde cero",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    price: 50,
    profesor: "Jair Tello",
  },
  {
    id: 5,
    title: "Python desde 0",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/medium/85d3d7e4-19db-4cff-a4cb-cbead813b6b5.png",
    price: 40,
    profesor: "Julio Vargas",
  },
  {
    id: 6,
    title: "Fundamentos de AWS",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/medium/608331fa-c0c6-4f7c-9ad7-470903923179.jpg",
    price: 60,
    profesor: "Emanuel Faert",
  },
];
const Course = ({ match }) => {
  const cursoActual = cursos.filter(
    (c) => c.id === parseInt(match.params.id)
  )[0];

  return (
    <div className="ed-grid m-grid-3">
      {cursoActual ? (
        <>
          <h1 className="m-cols-3">{cursoActual.title}</h1>
          <img
            className="m-cols-1"
            src={cursoActual.image}
            alt="Imagén del curso"
          />
          <p className="m-cols-2">Profesor: {cursoActual.profesor}</p>
        </>
      ) : (
        <h1>El curso no existe</h1>
      )}
    </div>
  );
};

export default Course;
