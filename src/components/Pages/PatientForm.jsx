import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const PatientForm = ({ onAddPatient }) => {
  const [formData, setFormData] = useState({
    name: '',
    // Ajoutez d'autres champs de formulaire ici
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPatient(formData);
    // Réinitialisez les champs du formulaire après soumission
    setFormData({
      name: '',
      // Réinitialisez les autres champs du formulaire ici
    });
  };

  return (
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
      {/* Ajoutez d'autres champs de formulaire ici */}
      <Button variant="primary" type="submit">
        Ajouter
      </Button>
    </Form>
  );
};

export default PatientForm;
