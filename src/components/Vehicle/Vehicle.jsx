import { CardContent } from "@mui/joy";
import Card from "@mui/joy/Card";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";

function Vehicle({ vehicle, updateData }) {
  const [deleteModal, setDeleteModal] = useState(false);
  console.log(vehicle);
  const navigate = useNavigate();

  const editVehicleRedirect = (id) => {
    navigate(`/vehicles/${id}/edit`);
  };

  async function deleteVehicle() {
    const API = `https://68871b80071f195ca97f4670.mockapi.io/vehicles/${vehicle.id}`;
    const response = await fetch(API, {
      method: "DELETE",
    });
    const data = await response.json();

    console.log("Deleted", data);

    updateData();

    setDeleteModal(false);
    navigate(`/dashboard`);
  }

  return (
    <>
      <Card
        color="#fcfffeff"
        invertedColors={false}
        orientation="vertical"
        size="sm"
        variant="soft"
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
          <Button
            variant="soft"
            color="danger"
            startDecorator={<DeleteIcon />}
            onClick={() => setDeleteModal(true)}
          >
            Delete
          </Button>
        </div>
      </Card>

      <Modal open={deleteModal} onClose={() => setDeleteModal(false)}>
        <ModalDialog>
          <ModalClose />
          <h1>
            Delete{" "}
            {`${vehicle.year} ${vehicle.make} ${vehicle.model} with registration ${vehicle.registrationNumber}`}
            ?
          </h1>
          {/* <Typography>Modal title</Typography> */}

          <Button
            color="neutral"
            onClick={() => setDeleteModal(false)}
            size="md"
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            color="danger"
            onClick={() => deleteVehicle(vehicle.registrationNumber)}
            size="md"
            variant="outlined"
          >
            Permanently Delete
          </Button>
        </ModalDialog>
      </Modal>
    </>
  );
}

export { Vehicle };
