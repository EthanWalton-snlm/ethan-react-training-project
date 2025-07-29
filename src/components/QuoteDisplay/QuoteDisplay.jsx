import { QuoteCard } from "../QuoteCard/QuoteCard";
import "./styles.css";

function QuoteDisplay({ premium }) {
  // TODO: pass plan as prop
  return (
    <>
      <div className="quotes">
        <QuoteCard
          color={"#ff74023b"}
          name="bronze"
          price={`R${parseFloat(premium).toFixed(2)}`}
          content="blah"
        />
        <QuoteCard
          color={"#006eff69"}
          name="diamond"
          price={`R${(premium * 2).toFixed(2)}`}
          content="blah"
        />
        <QuoteCard
          color={"#adadad3b"}
          name="silver"
          price={`R${(premium * 1.5).toFixed(2)}`}
          content="blah"
        />
      </div>
    </>
  );
}

export { QuoteDisplay };
