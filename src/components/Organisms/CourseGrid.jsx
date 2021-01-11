import axios from "axios";
import { Component } from "react";
import CursoCard from "../Molecules/CursoCard";

class CourseGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://my-json-server.typicode.com/jairtello/json-db/cursos")
      .then((response) => this.setState({ courses: response.data }));
  }

  render() {
    const { courses } = this.state;

    return (
      <div className="ed-grid m-grid-4">
        {courses.map((curso, index) => (
          <CursoCard
            key={index}
            id={curso.id}
            image={curso.image}
            title={curso.title}
            professor={curso.professor}
            price={curso.price}
          />
        ))}
      </div>
    );
  }
}

export default CourseGrid;
