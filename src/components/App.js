import CourseGrid from "./Organisms/CourseGrid";
import Home from "./Pages/Home";
import Form from "./Pages/Form";
import MainMenu from "./Organisms/MainMenu";
import History from "./Pages/History";
import "../styles/styles.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Course from "./Pages/Course";
import Users from "./Pages/Users";

function App() {
  return (
    <Router>
      <MainMenu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cursos/:id" component={Course} />
        <Route path="/cursos" component={CourseGrid} />
        <Route path="/historial/:valor" component={History} />
        <Route path="/historial" component={History} />
        <Route
          path="/formulario"
          component={() => <Form name="Página de contacto" />}
        />
        <Route path="/usuarios" component={Users} />
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
