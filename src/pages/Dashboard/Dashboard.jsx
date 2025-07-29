import Button from "@mui/joy/Button";
import { Vehicles } from "../../pages/Vehicles/Vehicles";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import "./styles.css";

function Dashboard({ vehicleData, updateData }) {
  return (
    <div className="dashboard-container">
      <div>
        <Typography level="h1" variant="plain" sx={{ color: "primary.800" }}>
          Dashboard
        </Typography>
        <Divider orientation="horizontal" />
      </div>
      <Vehicles vehicleData={vehicleData} updateData={updateData} />
    </div>
  );
}

export { Dashboard };
