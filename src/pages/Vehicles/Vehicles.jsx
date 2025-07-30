import "./styles.css";
import { Vehicle } from "../../components/Vehicle/Vehicle";
import Typography from "@mui/joy/Typography";

function Vehicles({ vehicleData, updateData }) {
  console.log("!!!", vehicleData);
  return (
    <div className="outer-vehicles-container">
      <div className="vehicles-container">
        {vehicleData !== "Not found" ? (
          vehicleData.map((vehicle) => (
            <Vehicle
              key={vehicle.id}
              vehicle={vehicle}
              updateData={updateData}
            />
          ))
        ) : (
          <Typography>No vehicles found</Typography>
        )}
      </div>
    </div>
  );
}

export { Vehicles };
