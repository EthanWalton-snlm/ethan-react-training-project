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
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import { sentenceCase } from "../../utils/sentenceCase";
import Typography from "@mui/joy/Typography";
import Chip from "@mui/joy/Chip";

function Vehicle({ vehicle, updateData }) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const navigate = useNavigate();
  const hiddenKeys = ["imageLink", "id"];
  const vehicleName = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;

  const editVehicleRedirect = (id) => {
    navigate(`/vehicles/${id}/edit`);
  };

  async function deleteVehicle() {
    const API = `https://68871b80071f195ca97f4670.mockapi.io/vehicles/${vehicle.id}`;
    await fetch(API, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    updateData();

    setDeleteModal(false);
    navigate("/dashboard", { state: { status: "deleted" } });
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
          <div className="clickable-card" onClick={() => setDetailsModal(true)}>
            <img className="car-image" src={vehicle.imageLink} />
            <div className="vehicle-info-container">
              <div className="vehicle-specs">
                <h3
                  className="vehicle-title"
                  aria-hidden={
                    vehicleName.length > 20
                      ? vehicleName.slice(0, 20) + "..."
                      : vehicleName
                  }
                >
                  {vehicleName.length > 20
                    ? vehicleName.slice(0, 20) + "..."
                    : vehicleName}
                </h3>
                <p className="plan-price-text">{`R${vehicle.premium} p/m`}</p>
              </div>
              <div className="plan-price">
                <Chip color="warning" size="md" variant="outlined">
                  {vehicle.registrationNumber}
                </Chip>
              </div>
            </div>
          </div>
          <Divider orientation="horizontal" />

          <div className="edit-delete-modal-buttons">
            <Button
              variant="soft"
              startDecorator={<ModeEditIcon />}
              onClick={() => editVehicleRedirect(vehicle.registrationNumber)}
              sx="width: 100%"
            >
              Edit
            </Button>
            <Button
              variant="soft"
              color="danger"
              startDecorator={<DeleteIcon />}
              onClick={() => setDeleteModal(true)}
              sx="width: 100%"
            >
              Delete
            </Button>
          </div>
        </div>
      </Card>

      <Modal open={deleteModal} onClose={() => setDeleteModal(false)}>
        <ModalDialog>
          <ModalClose />
          <Typography level="h3">
            Delete{" "}
            {`${vehicle.year} ${vehicle.make} ${vehicle.model} with registration ${vehicle.registrationNumber}`}
            ?
          </Typography>

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

      <Modal open={detailsModal} onClose={() => setDetailsModal(false)}>
        <ModalDialog>
          <ModalClose />

          <Typography level="h2" variant="plain">
            {vehicleName}
          </Typography>
          <Divider orientation="horizontal" />
          <img src={vehicle.imageLink} className="car-image-show-details" />

          <Sheet sx="overflow: auto; height: 15rem;">
            <Table variant="soft" className="modal-table">
              <tbody>
                {Object.keys(vehicle)
                  .filter((key) => !hiddenKeys.includes(key))
                  .map((key) => (
                    <tr key={key}>
                      <td>
                        <span className="table-key">{sentenceCase(key)}</span>
                      </td>
                      <td>{vehicle[key]}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Sheet>
          <div className="edit-delete-modal-buttons">
            <Button
              variant="soft"
              startDecorator={<ModeEditIcon />}
              onClick={() => editVehicleRedirect(vehicle.registrationNumber)}
              sx="width: 100%"
            >
              Edit
            </Button>
            <Button
              variant="soft"
              color="danger"
              startDecorator={<DeleteIcon />}
              onClick={() => setDeleteModal(true)}
              sx="width: 100%"
            >
              Delete
            </Button>
          </div>
        </ModalDialog>
      </Modal>
    </>
  );
}

export { Vehicle };
