import React from "react";
import Navbarsuivi from "../Navbarsuivi"; // Assurez-vous que le chemin vers Navbarsuivi est correct
import { Button, Table } from "react-bootstrap";

class ListePatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [], // Initialiser le state avec un tableau vide pour stocker les données récupérées
      patientSelectionne: null // Initialiser le patient sélectionné à null
    };
  }

  componentDidMount() {
    fetch("https://api-ecf.sarahkatz.fr/patients")
      .then((response) => response.json())
      .then((data) => {
        console.log("Données récupérées :", data); // Afficher les données récupérées dans la console
        this.setState({ patients: data }); // Mettre à jour le state avec les données récupérées
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
  }

  handleSupprimerPatient = () => {
    // Implémentez la logique pour supprimer le patient sélectionné
    if (this.state.patientSelectionne) {
      console.log("Patient à supprimer :", this.state.patientSelectionne);
      // Mettez en œuvre la logique pour supprimer le patient
    }
  };

  handleModifierPatient = () => {
    // Implémentez la logique pour modifier le patient sélectionné
    if (this.state.patientSelectionne) {
      console.log("Patient à modifier :", this.state.patientSelectionne);
      // Mettez en œuvre la logique pour modifier le patient
    }
  };

  render() {
    console.log("État initial des patients :", this.state.patients); // Vérifier l'état initial des patients
    return (
      <>
        <Navbarsuivi />
        <div>
          <h2 className="Liste">Liste des patients</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Date de naissance</th>
                <th>Numéro de sécurité sociale</th>
              </tr>
            </thead>
            <tbody>
              {this.state.patients.map((patient) => (
                <tr
                  key={patient.id}
                  onClick={() => this.setState({ patientSelectionne: patient })}
                >
                  <td>{patient.firstName}</td>
                  <td>{patient.lastName}</td>
                  <td>{patient.birthdate}</td>
                  <td>{patient.socialSecurityNumber}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <br />
        </div>
        <div className="formButton">
          <Button variant="danger" onClick={this.handleSupprimerPatient}>
            Supprimer
          </Button>
        </div>

        <br />

        <div className="formButton2">
          <Button variant="primary" onClick={this.handleModifierPatient}>
            Modifier
          </Button>
        </div>
      </>
    );
  }
}

export default ListePatient;
