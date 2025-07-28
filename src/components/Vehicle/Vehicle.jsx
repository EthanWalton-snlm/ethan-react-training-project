import { CardContent } from "@mui/joy";
import Card from "@mui/joy/Card";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import "./styles.css";
import { useNavigate } from "react-router-dom";

function Vehicle({ vehicle }) {
  console.log(vehicle);
  const navigate = useNavigate();

  const editVehicleRedirect = (id) => {
    console.log(`Clicked ${id}`);
    navigate(`/vehicles/${id}/edit`);
  };

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
            <img className="car-image" src={vehicle.imageLink} />
          </div>
          <div className="vehicle-info-container">
            <div className="vehicle-specs">
              <h3 className="vehicle-title">{`${vehicle.year} ${vehicle.make} ${vehicle.model}`}</h3>
              <h4 className="vehicle-subheading">{`${vehicle.registrationNumber}`}</h4>
            </div>
            <div className="plan-price">
              <p className="plan-price-text">{`R${vehicle.premium} p/m`}</p>
            </div>
          </div>
          <Divider orientation="horizontal" />
          <Button
            variant="soft"
            startDecorator={<ModeEditIcon />}
            onClick={() => editVehicleRedirect(vehicle.registrationNumber)}
          >
            Edit
          </Button>
        </div>
      </Card>
    </>
  );
}

export { Vehicle };
