// PageAccueil.jsx
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Navbarsuivi from "../Navbarsuivi";

const PageAccueil = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lasttName: "",
    birthdate: "",
    socialSecurityNumber: "",
    createdAt: "",
    modifiedAt: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.firstName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://api-ecf.sarahkatz.fr/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
        console.log(FormData);
      if (!response.ok) {
        throw new Error("Erreur HTTP");
      }

      console.log("Données envoyées avec succès !");
      
      
    } catch (error) {
      console.error("Erreur lors de l'envoi des données :", error.message);
    }
  };
  return (
    <div>
      <Navbarsuivi />
      <h1> Page d'accueil </h1>
      <h2>Ajouter un nouveau patient</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nom :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrez votre nom"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formPrenom">
          <Form.Label>Prénom :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrez votre Prénom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formBirthdate">
          <Form.Label>Date de naissance :</Form.Label>
          <Form.Control
            type="date"
            placeholder="Entrez votre date de naissance"
            name="datedenaissance"
            value={formData.datedenaissance}
            onChange={handleChange}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formSocialSecurity">
          <Form.Label>Numéro de sécurité :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrez votre numéro de sécurité"
            name="SocialSecurity"
            value={formData.numerodesécurité}
            onChange={handleChange}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formDateCreation">
          <Form.Label>Date de création : </Form.Label>
          <Form.Control
            type="date"
            placeholder="Entrez votre date de création"
            name="datedecreation"
            value={formData.datedecreation}
            onChange={handleChange}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formDateModification">
          <Form.Label>Date de modification : </Form.Label>
          <Form.Control
            type="date"
            placeholder="Entrez votre date de modification"
            name="datedemodification"
            value={formData.datedemodification}
            onChange={handleChange}
          />
        </Form.Group>
        <br />
        {/* Ajoutez d'autres champs de formulaire ici */}
        <Button variant="primary" type="submit">
          Ajouter
        </Button>
      </Form>
    </div>
  );
};

export default PageAccueil;
