import Button from "@mui/joy/Button";
import { Vehicles } from "../../pages/Vehicles/Vehicles";

function Dashboard({ vehicleData, updateData }) {
  return <Vehicles vehicleData={vehicleData} updateData={updateData} />;
}

export { Dashboard };
