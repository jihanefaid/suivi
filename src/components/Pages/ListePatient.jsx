import React from "react";
import Navbarsuivi from "../Navbarsuivi";
import { Button, Container, Table} from "react-bootstrap";
import {Routes, Route, useNavigate} from 'react-router-dom';
class ListePatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      patientSelectionne: null
    };
  }

  componentDidMount() {
    fetch("https://api-ecf.sarahkatz.fr/patients")
      .then((response) => response.json())
      .then((data) => {
        console.log("Données récupérées :", data);
        this.setState({ patients: data });
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
  }

  supprimerPatientParId = async (patientId) => {
    console.log(patientId)
    try {
      const response = await fetch(`https://api-ecf.sarahkatz.fr/patients/${patientId}`, {
        method: "DELETE"
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Mettre à jour l'état pour supprimer le patient supprimé
      this.setState((prevState) => ({
        patients: prevState.patients.filter((patient) => patient.id !== patientId),
        patientSelectionne: null // Réinitialiser le patient sélectionné après la suppression
      }));
      
      console.log("Patient supprimé avec succès :", patientId);
    } catch (error) {
      console.error("Erreur lors de la suppression du patient :", error);
    }
  };

  modifierPatientParId = (patientId) => {
    // Redirigez l'utilisateur vers la page ModifierPatient en utilisant le router
    this.props.history.push(`/modifier/${patientId}`);
  };
  

  handleSupprimerPatient = () => {
    const { patientSelectionne } = this.state;
    if (patientSelectionne) {
      console.log("Patient à supprimer :", patientSelectionne);
      this.supprimerPatientParId(patientSelectionne.id); // Appeler la fonction pour supprimer le patient par son ID
    }
  };

  handleModifierPatient = () => {
    if (this.state.patientSelectionne) {
      console.log("Patient à modifier :", this.state.patientSelectionne);
    }
   };


   const navigate = useNavigate();

   const navigateToModifierPatient = () => {
     navigate('/modifier');
   };
   
  render() {
    console.log("État initial des patients :", this.state.patients);
    return (
      <>
        <Navbarsuivi />
        <Container>
          <h2 className="Liste">Liste des patients</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Date de naissance</th>
                <th>Numéro de sécurité sociale</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.patients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.firstName}</td>
                  <td>{patient.lastName}</td>
                  <td>{patient.birthdate}</td>
                  <td>{patient.socialSecurityNumber}</td>
                  <td>
                    <Button variant="danger" onClick={() => this.supprimerPatientParId(patient.idPatient)}>
                      Supprimer
                    </Button>
                   
                    <button onClick={navigateToModifierPatient={}}>Modifier</button>
      <Routes>
      <Route path="/modifier" element={<modifier/>} />
      </Routes>           
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
}

export default ListePatient;
