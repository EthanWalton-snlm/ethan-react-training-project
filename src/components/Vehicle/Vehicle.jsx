import { CardContent } from "@mui/joy";
import Card from "@mui/joy/Card";
import Button from "@mui/joy/Button";
import "./styles.css";

function Vehicle() {
  return (
    <>
      <Card
        color="primary"
        invertedColors={false}
        orientation="vertical"
        size="sm"
        variant="outlined"
        className="card"
      >
        <div className="inner-card">
          <img src="https://mediacloud.carbuyer.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1579617188/carbuyer/1-ford-fiesta-hatchback-2013-front-tracking-blue_1.jpg"></img>
          <Button variant="soft">Edit</Button>
        </div>
      </Card>
    </>
  );
}

export { Vehicle };
