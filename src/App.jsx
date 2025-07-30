import "./App.css";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import { Routes, Route, Navigate } from "react-router";
import { useState, useEffect } from "react";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { LoadingScreen } from "./pages/LoadingScreen/LoadingScreen";
import { NewVehicle } from "./pages/NewVehicle/NewVehicle";
import { EditVehicle } from "./pages/EditVehicle/EditVehicle";
import { ConfirmationPage } from "./pages/ConfirmationPage/ConfirmationPage";
import { VehicleQuotes } from "./pages/VehicleQuotes/VehicleQuotes";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { QuotePage } from "./pages/QuotePage/QuotePage";
import { CssVarsProvider, useColorScheme, extendTheme } from "@mui/joy/styles";
import Switch from "@mui/joy/Switch";

const theme = extendTheme();

function ModeSwitcher() {
  const { mode, setMode } = useColorScheme();
  const [checked, setChecked] = useState(mode === "dark");

  useEffect(() => {
    setChecked(mode === "dark");
  }, [mode]);

  const changeMode = (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    setMode(isChecked ? "dark" : "light");
  };

  return <Switch checked={checked} onChange={changeMode} />;
}

function App() {
  // TODO: fix quotes
  // TODO: filter on dashboard
  // TODO: make responsive

  // TODO: fix show details modal img styling
  // TODO: handle search if result is null
  // TODO: datepickers for date
  // TODO: separate components
  // TODO: change quotes cards styling

  // Extra:
  // TODO: stats graph

  const [vehicleData, setVehicleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getVehiclesData(searchTerm = "") {
    setIsLoading(true);
    const url = new URL("https://68871b80071f195ca97f4670.mockapi.io/vehicles");

    if (searchTerm) {
      url.searchParams.append("search", searchTerm);
    }

    const response = await fetch(url, {
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
    <CssVarsProvider theme={theme} modeStorageKey="mode-toggle-demo">
      <div className="app-layout">
        <div className="navigation">
          <Header
            options={[
              { label: "Dashboard", link: "/dashboard" },
              { label: "New Vehicle", link: "/vehicles/new" },
              { label: "Quotes", link: "/quotes" },
            ]}
            modeSwitcher={<ModeSwitcher />}
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
                element={
                  <EditVehicle
                    vehicleData={vehicleData}
                    updateData={getVehiclesData}
                  />
                }
              />
              <Route
                path="/quotes"
                element={
                  <QuotePage
                    vehicleData={vehicleData}
                    updateData={getVehiclesData}
                  />
                }
              />
              <Route path="/quotes/:vehicleId" element={<VehicleQuotes />} />
              <Route
                path="/confirm/:registrationNumber"
                element={<ConfirmationPage vehicleData={vehicleData} />}
              />
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
    </CssVarsProvider>
  );
}

export default App;
