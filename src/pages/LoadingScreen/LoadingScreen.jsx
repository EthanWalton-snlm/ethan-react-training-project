import CircularProgress from "@mui/joy/CircularProgress";
import "./styles.css";

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <CircularProgress variant="soft" />
    </div>
  );
}

export { LoadingScreen };
