import { sentenceCase } from "../../utils/sentenceCase";
import { useParams, useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import Button from "@mui/joy/Button";
import Table from "@mui/joy/Table";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import "./styles.css";

function ConfirmationPage({ vehicleData }) {
  const hiddenKeys = ["imageLink", "id", "key", "label"];
  const { registrationNumber } = useParams();
  const location = useLocation();
  const redirectStatus = location.state?.status;
  console.log(redirectStatus);

  const vehicle = vehicleData.find(
    (vehicle) => vehicle.registrationNumber === registrationNumber
  );

  const navigate = useNavigate();

  return (
    <div className="confirmation-page">
      <Typography level="h2" variant="plain">
        {`${vehicle.year} ${vehicle.make} ${vehicle.model} Confirmation`}
      </Typography>
      <Divider orientation="horizontal" />
      <div className="info-container">
        <img src={vehicle.imageLink} className="car-image" />

        <div className="modal-table">
          <Table
            variant="soft"
            sx={{ borderRadius: "12px", padding: "0 0.5rem" }}
          >
            <tbody>
              {Object.keys(vehicle).map((key) =>
                !hiddenKeys.includes(key) ? (
                  <tr key={key}>
                    <td>
                      <span className="table-key">{sentenceCase(key)}</span>
                    </td>
                    <td>{vehicle[key]}</td>
                  </tr>
                ) : (
                  <></>
                )
              )}
            </tbody>
          </Table>
        </div>
      </div>
      <Button
        variant="soft"
        startDecorator={<DoneAllIcon />}
        onClick={() =>
          navigate("/dashboard", { state: { status: redirectStatus } })
        }
        className="submit-button"
      >
        Continue
      </Button>
    </div>
  );
}

export { ConfirmationPage };
