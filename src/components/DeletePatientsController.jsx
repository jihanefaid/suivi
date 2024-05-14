
const fetchPatientById = async (patientId) => {
    try {
      const response = await fetch(`http://api-ecf.sarahkatz.fr/patients/${patientId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const patientData = await response.json();
      return patientData;
    } catch (error) {
      console.error("Erreur lors de la récupération du patient :", error);
      throw error;
    }
  };
  
export default fetchPatientById;