import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageAccueil from './components/Pages/PageAccueil';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<PageAccueil/>} />
          <Route path="/patients" element={<patients />} />



          {/* Ajoutez d'autres routes ici si nécessaire */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
