const usePatientsController = async (patientData) => {
  try {
      const response = await fetch("http://api-ecf.sarahkatz.fr/patients", {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: patientData
          
      });
console.log(patientData);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);

          console.log("erreur http");
      }
      console.log("PRELECTURE");
      const data = await response.json();
      console.log("lecture data");
      return data;

  } catch (error) {
      console.error("Échec de l'ajout du nouveau patient", error);
      console.log("catch erreur");
      throw error;
  }
};

export default usePatientsController;