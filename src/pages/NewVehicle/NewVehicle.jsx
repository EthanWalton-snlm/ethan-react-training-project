import { VehicleInput } from "../../components/VehicleInput/VehicleInput";
import Button from "@mui/joy/Button";
import { newVehicleTemplate } from "../../constants";

function NewVehicle({ editMode = false, vehicleData = newVehicleTemplate }) {
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
    "make",
    "model",
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

  async function handleSubmit() {
    console.log(vehicleData);

    const API = "https://68871b80071f195ca97f4670.mockapi.io/vehicles";
    const response = await fetch(API, {
      method: "POST",
      body: JSON.stringify(vehicleData),
    });
    const data = await response.json();

    console.log(data);
  }

  const disableField = (key) => editMode && !editableFields.includes(key);

  return (
    <>
      <h1>Vehicle Information</h1>
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

      <h1>Owner Information</h1>
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
      <h1>Policy Information</h1>
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

      <Button
        variant="soft"
        startDecorator={"1"}
        onClick={() => handleSubmit()}
      >
        Submit
      </Button>
    </>
  );
}

export { NewVehicle };
