import { CardContent } from "@mui/joy";
import Card from "@mui/joy/Card";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import "./styles.css";

function Vehicle({ vehicle }) {
  console.log(vehicle);
  const car = vehicle.vehicle;
  const plan = vehicle.insurancePlan;

  console.log("2" + car);
  return (
    <>
      <Card
        color="primary"
        invertedColors={false}
        orientation="vertical"
        size="sm"
        variant="outlined"
        className="card"
      >
        <div className="inner-card">
          <div className="car-image-container">
            <img className="car-image" src={car.imageLink} />
          </div>
          <div className="vehicle-info-container">
            <div className="vehicle-specs">
              <h3 className="vehicle-title">{`${car.make} ${car.model} ${car.engineSize}`}</h3>
              <h4 className="vehicle-subheading">{`${car.registrationNumber}`}</h4>
            </div>
            <div className="plan-price">
              <p className="plan-price-text">{`R${plan.premium} p/m`}</p>
            </div>
          </div>
          <Divider orientation="horizontal" />
          <Button variant="soft" startDecorator={<ModeEditIcon />}>
            Edit
          </Button>
        </div>
      </Card>
    </>
  );
}

export { Vehicle };
