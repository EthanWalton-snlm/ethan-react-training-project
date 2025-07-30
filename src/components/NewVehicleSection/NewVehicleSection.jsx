import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import "./styles.css";

function NewVehicleSection({ title, children }) {
  return (
    <div className="form-section-container">
      <Typography level="h2" variant="plain" sx={{ color: "primary.800" }}>
        {title}
      </Typography>
      <Divider />
      <div className="form-section">{children}</div>
    </div>
  );
}

export { NewVehicleSection };
