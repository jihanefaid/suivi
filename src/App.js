import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  ListePatient from './components/Pages/ListePatient';
import PageAccueil from './components/Pages/PageAccueil';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<PageAccueil/>} />
          <Route path="/patients" element={<ListePatient />} />

          {/* Ajoutez d'autres routes ici si nécessaire */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
