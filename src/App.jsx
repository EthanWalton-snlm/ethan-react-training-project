import "./App.css";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import { Routes, Route, Link } from "react-router";
import { useState } from "react";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Vehicles } from "./pages/Vehicles/Vehicles";
import { INITIAL_VEHICLES_DATA } from "./constants";

function App() {
  const INITIAL_VEHICLES_DATA = [{}]; // todo: get from other source
  const [vehicleData, setVehicleData] = useState(INITIAL_VEHICLES_DATA);

  return (
    <>
      <div class="app">
        <Header
          dashboard={<Link to="/dashboard">Dashboard</Link>}
          vehicles={<Link to="/vehicles/new">New Vehicle</Link>}
          quotes={<Link to="/quotes">Quotes</Link>}
        />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vehicles/new" element={<></>} />
        <Route
          path="/vehicles/:id/edit"
          element={
            <Vehicles
              vehicleData={vehicleData}
              setVehicleData={setVehicleData}
            />
          }
        />
        <Route path="/quotes/:vehicleId" element={<></>} />
        <Route path="/confirm" element={<></>} />
      </Routes>
    </>
  );
}

export default App;
