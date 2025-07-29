import { VehicleInput } from "../../components/VehicleInput/VehicleInput";
import Button from "@mui/joy/Button";
import { newVehicleTemplate } from "../../constants";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { VEHICLE_INFO } from "../../constants";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Autocomplete from "@mui/joy/Autocomplete";
import { useState } from "react";

function NewVehicle({
  editMode = false,
  vehicleData = newVehicleTemplate,
  updateData,
}) {
  const [vehicleMake, setVehicleMake] = useState("");
  const editableFields = [
    "imageLink",
    "registrationNumber",
    "fullName",
    "street",
    "city",
    "province",
    "postalCode",
    "country",
  ];

  function sentenceCase(key) {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  }

  const vehicleFieldKeys = [
    "imageLink",
    "year",
    "color",
    "registrationNumber",
    "mileage",
  ];

  const ownerFieldKeys = ["fullName", "idNumber"];

  const addressFieldKeys = [
    "street",
    "city",
    "province",
    "postalCode",
    "country",
  ];

  const policyFieldKeys = [
    "policyNumber",
    "planType",
    "premium",
    "startDate",
    "endDate",
    "excess",
    "insuredValue",
    "paymentMethod",
    "status",
  ];

  const makeFields = (keys) =>
    keys.map((key) => ({
      key,
      placeholder: sentenceCase(key),
    }));

  const vehicleFields = makeFields(vehicleFieldKeys);
  const ownerFields = makeFields(ownerFieldKeys);
  const addressFields = makeFields(addressFieldKeys);
  const policyFields = makeFields(policyFieldKeys);
  const navigate = useNavigate();

  async function handleSubmit() {
    console.log(vehicleData);

    const API = "https://68871b80071f195ca97f4670.mockapi.io/vehicles";
    const response = await fetch(API, {
      method: "POST",
      body: JSON.stringify(vehicleData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();

    console.log(data);

    navigate(`/dashboard`);

    updateData();
  }

  async function handleEditSubmit() {
    const API = `https://68871b80071f195ca97f4670.mockapi.io/vehicles/${vehicleData.id}`;
    const response = await fetch(API, {
      method: "PUT",
      body: JSON.stringify(vehicleData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();

    console.log("Updated", data);

    navigate(`/dashboard`);

    updateData();
  }

  const disableField = (key) => editMode && !editableFields.includes(key);

  return (
    <div className="new-vehicle">
      <div className="form-section-container">
        <div>
          <Typography level="h2" variant="plain" sx={{ color: "primary.800" }}>
            Vehicle Information
          </Typography>
          <Divider orientation="horizontal" />
        </div>
        <div className="form-section">
          {vehicleFields.map(({ key, placeholder }) => (
            <VehicleInput
              key={key}
              onChange={(event) => {
                vehicleData[key] = event.target.value;
              }}
              placeholder={placeholder}
              disabled={disableField(key)}
              value={vehicleData[key]}
            />
          ))}
          <Autocomplete
            placeholder="Select a make"
            options={VEHICLE_INFO.map((car) => car.brand)}
            disableClearable
            onChange={(event, value) => {
              setVehicleMake(value);
              vehicleData.make = value;
            }}
            value={editMode ? vehicleData.make : ""}
            color="primary"
            size="md"
            variant="outlined"
          />
          <Autocomplete
            placeholder="Select a model"
            options={VEHICLE_INFO.filter(
              (car) => car.brand === vehicleMake
            ).flatMap((make) => make.models)}
            disableClearable
            onChange={(event, value) => {
              vehicleData.model = value;
            }}
            value={editMode ? vehicleData.model : null}
            color="primary"
            size="md"
            variant="outlined"
          />
        </div>
      </div>

      <div className="form-section-container">
        <div>
          <Typography level="h2" variant="plain" sx={{ color: "primary.800" }}>
            Owner Information
          </Typography>
          <Divider orientation="horizontal" />
        </div>
        <div className="form-section">
          {ownerFields.map(({ key, placeholder }) => (
            <VehicleInput
              key={key}
              onChange={(event) => {
                vehicleData[key] = event.target.value;
              }}
              placeholder={placeholder}
              disabled={disableField(key)}
              value={vehicleData[key]}
            />
          ))}

          {addressFields.map(({ key, placeholder }) => (
            <VehicleInput
              key={key}
              onChange={(event) => {
                vehicleData[key] = event.target.value;
              }}
              placeholder={placeholder}
              disabled={disableField(key)}
              value={vehicleData[key]}
            />
          ))}
        </div>
      </div>
      <div className="form-section-container">
        <div>
          <Typography level="h2" variant="plain" sx={{ color: "primary.800" }}>
            Policy Information
          </Typography>
          <Divider orientation="horizontal" />
        </div>
        <div className="form-section">
          {policyFields.map(({ key, placeholder }) => (
            <VehicleInput
              key={key}
              onChange={(event) => {
                vehicleData[key] = event.target.value;
              }}
              placeholder={placeholder}
              disabled={disableField(key)}
              value={vehicleData[key]}
            />
          ))}
        </div>
      </div>

      {editMode ? (
        <Button
          variant="soft"
          startDecorator={<FileUploadIcon />}
          onClick={() => handleEditSubmit()}
          className="submit-button"
        >
          Submit Changes
        </Button>
      ) : (
        <Button
          variant="soft"
          startDecorator={<DoneAllIcon />}
          onClick={() => handleSubmit()}
          className="submit-button"
        >
          Submit Vehicle
        </Button>
      )}
    </div>
  );
}

export { NewVehicle };
