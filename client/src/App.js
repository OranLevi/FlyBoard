import './App.css';
import { Routes, Route } from 'react-router-dom';

import TravelWarnings from './components/TravelWarnings';
import Footer from './components/Footer';
import FlightBoard from './Pages/FlightBoard';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
        <Route path="/" element={<FlightBoard />} />
        <Route path="/flightsBoard/Arrivals" element={<FlightBoard />} />
        <Route path="/flightsBoard/Departures" element={<FlightBoard />} />
        <Route path='/travelWarnings' element={<TravelWarnings />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
