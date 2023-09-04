const Header = (props) => {
  return (
    <header
      className="App-header"
      style={{ backgroundColor: "blue", padding: "2rem", minHeight: "50px", maxHeight: "100px" }}
    >
      <img src={props.src} className="App-logo" alt="logo" style={{ maxHeight: "50px" }} />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link" href="https://www.google.it/?hl=it" target="_blank" rel="noopener noreferrer">
        ehi tu, {props.nome} Learn React
      </a>
    </header>
  );
};

export default Header;
