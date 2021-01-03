import Banner from "./Banner";
import CourseGrid from "./CourseGrid";
import Formulario from "./Formulario";
import "./styles/styles.scss";

function App() {
  return (
    <>
      <Banner />
      <Formulario name="Contacto"/>
      <CourseGrid />
    </>
  );
}

export default App;
