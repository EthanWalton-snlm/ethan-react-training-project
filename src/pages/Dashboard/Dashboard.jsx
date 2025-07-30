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

function Dashboard({ vehicleData, updateData }) {
  const location = useLocation();
  const status = location.state?.status;
  const [alert, setAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
              sx={{ color: "primary.800" }}
            >
              Dashboard
            </Typography>
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
    </>
  );
}

export { Dashboard };
