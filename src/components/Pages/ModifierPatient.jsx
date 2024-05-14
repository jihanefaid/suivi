import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import usePatientsController from '../usePatientsController';
import Navbarsuivi from '../Navbarsuivi';

const PageAccueil = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [socialSecurityNumber, setSocialSecurityNumber] = useState("");
  const [createdAt, setDateCreation] = useState("");
  const [modifiedAt, setDateModification] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      const newPatient = {
        lastName,
        firstName,
        birthdate,
        socialSecurityNumber,
        createdAt,
        modifiedAt
      };
      // Appel à une fonction pour traiter les nouveaux patients
      // Remplacez `usePatientsController` par la fonction que vous utilisez

      // eslint-disable-next-line react-hooks/rules-of-hooks
      await usePatientsController(newPatient);

      // Réinitialisation des champs du formulaire après soumission réussie
      setLastName("");
      setFirstName("");
      setBirthdate("");
      setSocialSecurityNumber("");
      setDateCreation("");
      setDateModification("");
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

<br />
  return (
    
    <form onSubmit={handleSubmit}>
      <Navbarsuivi />
      <h2 className="Liste">Modifier un patient</h2>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Nom :</label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          placeholder="Entrez votre nom"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <br />
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">Prénom :</label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          placeholder="Entrez votre Prénom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <br />
      <div className="mb-3">
        <label htmlFor="birthdate" className="form-label">Date de naissance :</label>
        <input
          type="date"
          className="form-control"
          id="birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </div>
      <br />
      <div className="mb-3">
        <label htmlFor="socialSecurityNumber" className="form-label">Numéro de sécurité :</label>
        <input
          type="text"
          className="form-control"
          id="socialSecurityNumber"
          placeholder="Entrez votre numéro de sécurité"
          value={socialSecurityNumber}
          onChange={(e) => setSocialSecurityNumber(e.target.value)}
        />
      </div>
      <br />
      <div className="mb-3">
        <label htmlFor="dateCreation" className="form-label">Date de création :</label>
        <input
          type="date"
          className="form-control"
          id="dateCreation"
          value={createdAt}
          onChange={(e) => setDateCreation(e.target.value)}
        />
      </div>
      <br />
      <div className="mb-3">
        <label htmlFor="dateModification" className="form-label">Date de modification :</label>
        <input
          type="date"
          className="form-control"
          id="dateModification"
          value={modifiedAt}
          onChange={(e) => setDateModification(e.target.value)}
        />
      </div>
      <br />
      {/* Ajoutez d'autres champs de formulaire ici */}
      <button type="submit" className="btn btn-primary">Enregistrer</button>
      
    </form>
  );
};

export default PageAccueil;
