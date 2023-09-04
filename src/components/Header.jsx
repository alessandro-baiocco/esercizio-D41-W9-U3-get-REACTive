const Header = (props) => {
  return (
    <header className="App-header">
      <img
        src={
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdestiny.fandom.com%2Fwiki%2FEuropa&psig=AOvVaw04QzKf_ZyiTkmTYH08XBYi&ust=1693908726711000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJCq8PHbkIEDFQAAAAAdAAAAABAE"
        }
        className="App-logo"
        alt="logo"
      />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link" href={props.image} target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
  );
};

export default Header;
