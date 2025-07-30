import Button from "@mui/joy/Button";
import { Vehicles } from "../../pages/Vehicles/Vehicles";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import "./styles.css";
import { useLocation } from "react-router-dom";
import Alert from "@mui/joy/Alert";
import IconButton from "@mui/joy/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import RefreshIcon from "@mui/icons-material/Refresh";
import Input from "@mui/joy/Input";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Autocomplete from "@mui/joy/Autocomplete";
import { VEHICLE_INFO } from "../../constants";
import { useColorScheme } from "@mui/joy/styles";

function Dashboard({ vehicleData, updateData }) {
  const location = useLocation();
  const status = location.state?.status;
  const { mode } = useColorScheme();
  const [alert, setAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [filterColor, setFilterColor] = useState("");
  const [filterPlanType, setFilterPlanType] = useState("");
  const [filterMake, setFilterMake] = useState("");
  const [filterModel, setFilterModel] = useState("");
  const [filterModal, setFilterModal] = useState(false);

  useEffect(() => {
    ["created", "updated", "deleted"].includes(status)
      ? setAlert(true)
      : setAlert(false);
  }, [status]);

  const getIcon = (status) => {
    return status === "deleted" ? (
      <DeleteIcon />
    ) : status === "updated" ? (
      <FactCheckIcon />
    ) : (
      <CheckCircleIcon />
    );
  };

  const searchVehicles = (event) => {
    event.preventDefault();
    updateData(searchTerm);
  };

  const filterVehicles = (event) => {
    event.preventDefault();

    const filters = {
      color: filterColor,
      planType: filterPlanType,
      make: filterMake,
      model: filterModel,
    };

    updateData("", filters);
    setFilterModal(false);
  };

  return (
    <>
      {alert ? (
        <div className="alert">
          <Alert
            variant="soft"
            color="success"
            startDecorator={getIcon(status)}
            endDecorator={
              <IconButton
                variant="soft"
                size="sm"
                color="success"
                onClick={() => setAlert(false)}
              >
                <CloseRoundedIcon />
              </IconButton>
            }
            sx="border-radius: 12px"
          >
            Vehicle {status} successfully.
          </Alert>
        </div>
      ) : (
        <></>
      )}
      <div className="dashboard-container">
        <div>
          <div className="heading-container">
            <Typography
              level="h1"
              variant="plain"
              sx={{ color: mode === "dark" ? "neutral.0" : "neutral.900" }}
            >
              Dashboard
            </Typography>
            <IconButton
              variant="soft"
              size="sm"
              color="neutral"
              onClick={() => setFilterModal(true)}
            >
              <FilterAltIcon />
            </IconButton>
            <IconButton
              variant="soft"
              size="sm"
              color="neutral"
              onClick={() => updateData()}
            >
              <RefreshIcon />
            </IconButton>
          </div>
          <form onSubmit={searchVehicles} className="search-form-container">
            <Input
              onChange={(event) => setSearchTerm(event.target.value)}
              label="Search"
              variant="outlined"
              fullWidth
              startDecorator={<SearchIcon />}
            />
          </form>
          <Divider orientation="horizontal" />
        </div>
        <Vehicles vehicleData={vehicleData} updateData={updateData} />
      </div>

      <Modal open={filterModal}>
        <ModalDialog>
          <Typography
            level="h2"
            variant="plain"
            sx={{ color: mode === "dark" ? "neutral.0" : "neutral.900" }}
          >
            Filter Vehicles
          </Typography>
          <Autocomplete
            placeholder="Select a make"
            options={VEHICLE_INFO.map((car) => car.brand)}
            value={filterMake}
            onChange={(_, value) => setFilterMake(value)}
            color="primary"
          />

          {filterMake ? (
            <Autocomplete
              placeholder="Select a model"
              options={
                VEHICLE_INFO.find((car) => car.brand === filterMake)?.models ||
                []
              }
              value={filterModel}
              onChange={(_, value) => setFilterModel(value)}
              color="primary"
            />
          ) : (
            <></>
          )}

          <Autocomplete
            placeholder="Select a plan type"
            options={["Bronze", "Silver", "Diamond"]}
            value={filterPlanType}
            onChange={(_, value) => setFilterPlanType(value)}
            color="primary"
          />

          <Autocomplete
            placeholder="Select a color"
            options={[
              "Red",
              "Black",
              "Blue",
              "Green",
              "Purple",
              "Yellow",
              "Orange",
              "White",
              "Silver",
              "Pink",
            ]}
            value={filterColor}
            onChange={(_, value) => setFilterColor(value)}
            color="primary"
          />

          <div className="filter-buttons">
            <Button
              variant="soft"
              color="primary"
              startDecorator={<FilterAltIcon />}
              onClick={filterVehicles}
              sx="width: 50%"
            >
              Filter
            </Button>
            <Button
              variant="outlined"
              color="primary"
              startDecorator={<CloseIcon />}
              onClick={() => setFilterModal(false)}
              sx="width: 50%"
            >
              Cancel
            </Button>
          </div>
        </ModalDialog>
      </Modal>
    </>
  );
}

export { Dashboard };
