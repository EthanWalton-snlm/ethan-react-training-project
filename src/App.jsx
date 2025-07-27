import "./App.css";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import { Routes, Route, Link, Navigate } from "react-router";
import { useState } from "react";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Vehicles } from "./pages/Vehicles/Vehicles";
import { NewVehicle } from "./pages/NewVehicle/NewVehicle";
import { EditVehicle } from "./pages/EditVehicle/EditVehicle";
import { ConfirmationPage } from "./pages/ConfirmationPage/ConfirmationPage";
import { VehicleQuotes } from "./pages/VehicleQuotes/VehicleQuotes";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { INITIAL_VEHICLES_DATA } from "./constants";

function App() {
  const [vehicleData, setVehicleData] = useState(INITIAL_VEHICLES_DATA);

  return (
    <>
      <div className="app">
        <Header
          dashboard={<Link to="/dashboard">Dashboard</Link>}
          vehicles={<Link to="/vehicles/new">New Vehicle</Link>}
          quotes={<Link to="/quotes">Quotes</Link>}
        />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={<Dashboard vehicleData={vehicleData} />}
        />
        <Route path="/vehicles/new" element={<NewVehicle />} />
        <Route
          path="/vehicles/:id/edit"
          element={<EditVehicle vehicleData={vehicleData} />}
        />
        <Route path="/quotes/:vehicleId" element={<VehicleQuotes />} />
        <Route path="/confirm" element={<ConfirmationPage />} />
        <Route path="/notfound" element={<PageNotFound />} />

        <Route
          path="/vehicles"
          element={<Navigate to="/dashboard" replace />}
        />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
    </>
  );
}

export default App;
