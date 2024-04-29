import React, { Component} from "react";
import "./Navbarsuivi.css";
// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar, Button } from "react-bootstrap";
import hopiImage from "../asset/hopi.jpg";
import logoImage from "../asset/logo-removebg-preview.png";

export default class Navbarsuivi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Faire quelque chose avec les données du formulaire (par exemple, les envoyer à un serveur)
    console.log(this.state);
    // Réinitialiser le formulaire
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };

  render() {
    return (
      <div>
        <BootstrapNavbar className="custom-bg-color">
          {/* Utilisez la balise img pour afficher votre logo */}
          <BootstrapNavbar.Brand href="#home">
            <img
              src={logoImage}
              width="55"
              height="35"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </BootstrapNavbar.Brand>
          <span
            style={{
              color: "WHITE",
              marginLeft: "auto",
              marginRight: "auto",
              display: "center",
            }}
          >
            CHU
          </span>
        </BootstrapNavbar>
        <div style={{ position: "relative" }}>
          <img
            src={hopiImage}
            alt="Centre Hospitalier Universitaire de Lille"
            style={{ width: "100%", height: "210px" }}
          />
          <div
            style={{
              position: "absolute",
              top: "15%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "#4C1ADA",
              fontSize: "15px",
            }}
          >
            <p> Centre Hospitalier Universitaire de Lille </p>
          </div>
        </div>

       
      </div>
    );
  }
}