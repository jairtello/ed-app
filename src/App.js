import Banner from "./Banner";
import CourseGrid from "./CourseGrid";
import Formulario from "./Formulario";
import MainMenu from "./MainMenu";
import Historial from "./Historial";
import "./styles/styles.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Course from "./Course";

function App() {
  return (
    <Router>
      <MainMenu />
      <Switch>
        <Route path="/" exact component={Banner} />
        <Route path="/cursos/:id" component={Course} />
        <Route path="/cursos" component={CourseGrid} />
        <Route path="/historial/:valor" component={Historial} />
        <Route path="/historial" component={Historial} />
        <Route
          path="/formulario"
          component={() => <Formulario name="Página de contacto" />}
        />
        <Route
          component={() => (
            <div className="ed-grid">
              <h1>Error 404</h1>
              <span>Página no encontrada</span>
            </div>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
