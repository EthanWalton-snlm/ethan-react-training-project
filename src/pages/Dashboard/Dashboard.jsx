import Button from "@mui/joy/Button";
import { Vehicles } from "../../pages/Vehicles/Vehicles";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import "./styles.css";
import { useParams } from "react-router-dom";
import Alert from "@mui/joy/Alert";
import IconButton from "@mui/joy/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";

function Dashboard({ vehicleData, updateData }) {
  const { status } = useParams();
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    status === "deleted" ? setAlert(true) : setAlert(false);
  }, [status]);

  return (
    <>
      {alert ? (
        <div className="alert">
          <Alert
            variant="soft"
            color="success"
            startDecorator={<DeleteIcon />}
            endDecorator={
              <IconButton
                variant="plain"
                size="sm"
                color="neutral"
                onClick={() => setAlert(false)}
              >
                <CloseRoundedIcon />
              </IconButton>
            }
            sx="border-radius: 12px"
          >
            Vehicle deleted successfully.
          </Alert>
        </div>
      ) : (
        <></>
      )}
      <div className="dashboard-container">
        <div>
          <Typography level="h1" variant="plain" sx={{ color: "primary.800" }}>
            Dashboard
          </Typography>
          <Divider orientation="horizontal" />
        </div>
        <Vehicles vehicleData={vehicleData} updateData={updateData} />
      </div>
    </>
  );
}

export { Dashboard };
