import './App.css';
import { Route, Routes } from 'react-router-dom';
import Contact from './routes/Contact';
import Doctor from './routes/Doctor';
import Patient from './routes/Patient';
import Home from './routes/Home';
import Nav from './components/Nav';
import PatientDetail from './components/PatientDetail';

function App() {
  return (
    <div className="App">
      <Nav/>
        
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/doctor" element={<Doctor/>}/>
            <Route path="/patient" element={<Patient/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path = "/patient/:id" element={<PatientDetail/>}/>
          </Routes>
       
    </div>
  );
}

export default App;
