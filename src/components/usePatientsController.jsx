import React from 'react';
import usePatientsList from './usePatientsList';
import useAddPatient from './UseAddPatient';
import PatientForm from './Pages/PatientForm';

const UsePatientsController = () => {
  const { patients, isLoading: isFetchingPatients, error: patientsError } = usePatientsList();
  const { isLoading: isAddingPatient, error: addPatientError, handleAddPatient } = useAddPatient();

  return (
    <div className="patientsController">
      <h2>Liste des patients</h2>
      {isFetchingPatients ? (
        <div>Chargement...</div>
      ) : patientsError ? (
        <div>Erreur : {patientsError}</div>
      ) : (
        <ul>
          {patients.map((patient, index) => (
            <li key={index}>{patient.name}</li>
          ))}
        </ul>
      )}
      <h2>Ajouter un patient</h2>
      <PatientForm onAddPatient={handleAddPatient} />
      {isAddingPatient && <div>Ajout du patient en cours...</div>}
      {addPatientError && <div>Erreur lors de l'ajout du patient : {addPatientError}</div>}
    </div>
  );
};

export default UsePatientsController;
