import { QuoteCard } from "../QuoteCard/QuoteCard";
import { Carousel } from "react-responsive-3d-carousel";
import "react-responsive-3d-carousel/dist/styles.css";
import "./styles.css";

function QuoteDisplay({ premium }) {
  const slides = [
    <QuoteCard
      color={"#743e1fff"}
      name="bronze"
      price={`R${parseFloat(premium).toFixed(2)}`}
      content="blah"
    />,
    <QuoteCard
      color={"#00b7ffff"}
      name="diamond"
      price={`R${(premium * 2).toFixed(2)}`}
      content="blah"
    />,
    <QuoteCard
      color={"#bebebeff"}
      name="silver"
      price={`R${(premium * 1.5).toFixed(2)}`}
      content="blah"
    />,
  ];
  return (
    <>
      <Carousel items={slides} startIndex={0} />
    </>
  );
}

export { QuoteDisplay };
