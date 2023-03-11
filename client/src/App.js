import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from './components/Footer';
import FlightBoard from './Pages/FlightBoard';
import NavBar from './components/NavBar';
import TravelWarnings from './Pages/TravelWarnings';

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/flightsBoard/Arrivals');
  }, []);

  return null;
}

function App() {
  return (
    <>
    <NavBar />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flightsBoard/Arrivals" element={<FlightBoard />} />
        <Route path="/flightsBoard/Departures" element={<FlightBoard />} />
        <Route path='/travelWarnings' element={<TravelWarnings />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
