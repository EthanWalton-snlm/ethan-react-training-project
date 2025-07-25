import "./styles.css";

function Header({ dashboard, vehicles, quotes }) {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>{dashboard}</li>
          <li>{vehicles}</li>
          <li>{quotes}</li>
        </ul>
      </nav>
    </div>
  );
}

export { Header };
