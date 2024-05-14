const usePatientsController = async (patientData) => {
    try {
      const response = await fetch("http://api-ecf.sarahkatz.fr/patients", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(patientData) // Convertir l'objet en JSON
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Échec de l'ajout du nouveau patient", error);
      throw error;
    }
  };
  
  export default usePatientsController;
  