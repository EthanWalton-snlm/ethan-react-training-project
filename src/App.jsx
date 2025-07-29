import "./App.css";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import { Routes, Route, Link, Navigate } from "react-router";
import { useState, useEffect } from "react";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { LoadingScreen } from "./pages/LoadingScreen/LoadingScreen";
import { NewVehicle } from "./pages/NewVehicle/NewVehicle";
import { EditVehicle } from "./pages/EditVehicle/EditVehicle";
import { ConfirmationPage } from "./pages/ConfirmationPage/ConfirmationPage";
import { VehicleQuotes } from "./pages/VehicleQuotes/VehicleQuotes";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";

function App() {
  // TODO: notification instead of console logging everywhere
  // TODO: make responsive
  // TODO: read mock api docs for filter/sort and for registration searching https://6402db84f61d96ac487212a6.mockapi.io/movies?search=of
  // TODO: datepickers for date
  // TODO: view more modal popup on card click, show all data

  const [vehicleData, setVehicleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getVehiclesData() {
    setIsLoading(true);
    const API = "https://68871b80071f195ca97f4670.mockapi.io/vehicles";
    const response = await fetch(API, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();

    setVehicleData(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getVehiclesData();

    /* return () => {
       console.log("Unmounted")
    } */
  }, [setVehicleData]);

  return (
    <div className="app-layout">
      <div className="navigation">
        {/* <Header
          dashboard={<Link to="/dashboard">Dashboard</Link>}
          vehicles={<Link to="/vehicles/new">New Vehicle</Link>}
          quotes={<Link to="/quotes">Quotes</Link>}
        /> */}
        <Header
          options={[
            { label: "Dashboard", link: "/dashboard" },
            { label: "New Vehicle", link: "/vehicles/new" },
            { label: "Quotes", link: "/quotes" },
          ]}
        />
      </div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  vehicleData={vehicleData}
                  updateData={getVehiclesData}
                />
              }
            />
            <Route
              path="/vehicles/new"
              element={<NewVehicle updateData={getVehiclesData} />}
            />
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
        </div>
      )}
    </div>
  );
}

export default App;
