import Curso from "./Curso";
import "./styles/styles.scss";

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

function App() {
  return (
    <>
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
      <div className="ed-grid m-grid-3">
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
    </>
  );
}

export default App;
