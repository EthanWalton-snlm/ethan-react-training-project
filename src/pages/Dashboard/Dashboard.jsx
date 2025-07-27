import Button from "@mui/joy/Button";
import { Vehicles } from "../../pages/Vehicles/Vehicles";

function Dashboard({ vehicleData }) {
  return <Vehicles vehicleData={vehicleData} />;
}

export { Dashboard };
