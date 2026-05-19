import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

// Importa aquí tus componentes de perfil reales cuando los tengas listos
// import PerfilLeandro from './pages/PerfilLeandro';
// import PerfilCarolina from './pages/PerfilCarolina';
// import PerfilManuel from './pages/PerfilManuel';
import PerfilGabriela from './pages/PerfilGabriela';
// import PerfilLeonardo from './pages/PerfilLeonardo';

function App() {
  return (
    <Router>
      <Routes>
        {/* RUTA RAÍZ */}
        <Route 
          path="/" 
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          } 
        />
{/* ruta Perfiles */}

       { /* Perfiles <Route path="/leandro" element={<PerfilLeandro />} />  */}
       { /* Perfiles <Route path="/carolina" element={<PerfilCarolina />} />  */}
       { /* Perfiles <Route path="/manuel" element={<PerfilManuel />} />  */}
        <Route path="/gabriela" element={<PerfilGabriela />} />
        { /* Perfiles <Route path="/leonardo" element={<PerfilLeomardo />} />  */}
        
        
      </Routes>
    </Router>
  );
}

export default App;
