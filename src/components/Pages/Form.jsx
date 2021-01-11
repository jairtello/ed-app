import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mail: "",
      fecha: new Date().toLocaleTimeString(),
    };

    this.changeName = this.changeName.bind(this);
    this.changeMail = this.changeMail.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  changeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  changeMail(e) {
    this.setState({
      mail: e.target.value,
    });
  }

  changeDate() {
    this.setState({
      fecha: new Date().toLocaleTimeString(),
    });
  }

  render() {
    return (
      <div className="ed-grid l-section">
        <h1>Formulario {this.props.name}</h1>
        <h4>Fecha actual: {this.state.fecha}</h4>
        <form id="form-element">
          <div className="ed-grid m-grid-2">
            <div className="ed-item form__item">
              <label>Nombre completo</label>
              <input type="text" onChange={this.changeName} />
            </div>
            <div className="ed-item form__item">
              <label>Correo electrónico</label>
              <input type="email" onChange={this.changeMail} />
            </div>
          </div>
        </form>
        <div>
          <h2>{`Hola ${this.state.name}`}</h2>
          <span>{`Tu correo es: ${this.state.mail}`}</span>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const element = document.getElementById("form-element");
    console.log(element);
    this.intervaloFecha = setInterval(() => {
      this.changeDate();
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps);
    console.log(prevState);
  }

  componentWillUnmount() {
    clearInterval(this.intervaloFecha);
  }
}

export default Form;
