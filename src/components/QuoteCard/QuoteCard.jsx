import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import "./styles.css";

function QuoteCard({ price, name, content }) {
  return (
    <>
      <Card variant="soft" color="primary">
        <CardContent orientation="vertical">
          <div className="quote-card-container">
            <div>
              <Typography level="h4">{name} Plan</Typography>

              <Divider orientation="horizontal" sx={{ margin: "0.5rem 0" }} />
              <ul>
                <Typography>{content}</Typography>
              </ul>
              <Divider orientation="horizontal" sx={{ margin: "0.5rem 0" }} />
            </div>
            <div className="price">
              <Typography level="h3">{price}</Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export { QuoteCard };
