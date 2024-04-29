import React from "react";
// eslint-disable-next-line no-unused-vars
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
    const { patientSelectionne, patients } = this.state;
    if (patientSelectionne) {
      console.log("Patient à supprimer :", patientSelectionne);
      // Mettez en œuvre la logique pour supprimer le patient
      const nouveauxPatients = patients.filter(patient => patient.id !== patientSelectionne.id);
      this.setState({ patients: nouveauxPatients, patientSelectionne: null });
    }
  };
  
  handleModifierPatient = () => {
    const { patientSelectionne } = this.state;
    if (patientSelectionne) {
      console.log("Patient à modifier :", patientSelectionne);
      // Mettez en œuvre la logique pour modifier le patient
    }
  };
  
  render() {
    // Afficher les boutons de suppression et de modification avec la gestion des événements de clic
    return (
      <>
        ...
        <div className="formButton">
          <Button
            variant="danger"
            onClick={this.handleSupprimerPatient}
            disabled={!this.state.patientSelectionne}
          >
            Supprimer
          </Button>
        </div>
        <br />
        <div className="formButton2">
          <Button
            variant="primary"
            onClick={this.handleModifierPatient}
            disabled={!this.state.patientSelectionne}
          >
            Modifier
          </Button>
        </div>
        ...
      </>
    );
  }
  
}

export default ListePatient;
