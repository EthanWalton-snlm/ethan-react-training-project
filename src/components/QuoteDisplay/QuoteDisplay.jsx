import { QuoteCard } from "../QuoteCard/QuoteCard";
import "./styles.css";

function QuoteDisplay({ vehicle }) {
  return (
    <>
      <div className="quotes">
        <QuoteCard
          color={"#ff74023b"}
          name="bronze"
          price={`R${vehicle?.premium}`}
          content="blah"
        />
        <QuoteCard
          color={"#006eff69"}
          name="diamond"
          price={`R${vehicle?.premium * 2}`}
          content="blah"
        />
        <QuoteCard
          color={"#adadad3b"}
          name="silver"
          price={`R${vehicle?.premium * 1.5}`}
          content="blah"
        />
      </div>
    </>
  );
}

export { QuoteDisplay };
