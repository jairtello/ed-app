import React, { Component } from "react";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      correo: "",
      fecha: (new Date()).toLocaleTimeString(),
    };

    this.cambiarNombre = this.cambiarNombre.bind(this);
    this.cambiarCorreo = this.cambiarCorreo.bind(this);
    this.cambiarFecha = this.cambiarFecha.bind(this);
  }

  cambiarNombre(e) {
    this.setState({
      nombre: e.target.value,
    });
  }

  cambiarCorreo(e) {
    this.setState({
      correo: e.target.value,
    });
  }

  cambiarFecha() {
    this.setState({
      fecha: (new Date()).toLocaleTimeString(),
    });
  }

  render() {
    return (
      <div className="ed-grid l-section">
        <h1>Formulario {this.props.name}</h1>
        <h4>Fecha actual: {this.state.fecha}</h4>
        <form id="elemento">
          <div className="ed-grid m-grid-2">
            <div className="ed-item form__item">
              <label>Nombre completo</label>
              <input type="text" onChange={this.cambiarNombre} />
            </div>
            <div className="ed-item form__item">
              <label>Correo electrónico</label>
              <input type="email" onChange={this.cambiarCorreo} />
            </div>
          </div>
        </form>
        <div>
          <h2>{`Hola ${this.state.nombre}`}</h2>
          <span>{`Tu correo es: ${this.state.correo}`}</span>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const elemento = document.getElementById("elemento");
    console.log(elemento);
    this.intervaloFecha = setInterval(() => { 
      this.cambiarFecha();
    }, 1000);
  }

  componentDidUpdate(prevProps, prepState) {
    // console.log(prevProps);
    console.log(prepState);
  }

  componentWillUnmount() {
    clearInterval(this.intervaloFecha);
  }
}

export default Formulario;
