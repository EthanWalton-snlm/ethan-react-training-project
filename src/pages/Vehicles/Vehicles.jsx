import "./styles.css";
import { Vehicle } from "../../components/Vehicle/Vehicle";

function Vehicles({ vehicleData, updateData }) {
  return (
    <div className="outer-vehicles-container">
      <div className="vehicles-container">
        {vehicleData.map((vehicle) => (
          <Vehicle key={vehicle.id} vehicle={vehicle} updateData={updateData} />
        ))}
      </div>
    </div>
  );
}

export { Vehicles };
