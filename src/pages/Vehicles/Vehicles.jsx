import "./styles.css";
import { Vehicle } from "../../components/Vehicle/Vehicle";

function Vehicles({ vehicleData, updateData }) {
  // console.log(vehicleData);
  return (
    <div className="outer-vehicles-container">
      {/* <Vehicle vehicle={vehicleData[0]} /> */}
      <div className="vehicles-container">
        {vehicleData.map((vehicle) => (
          <Vehicle key={vehicle.id} vehicle={vehicle} updateData={updateData} />
        ))}
      </div>
    </div>
  );
}

export { Vehicles };
