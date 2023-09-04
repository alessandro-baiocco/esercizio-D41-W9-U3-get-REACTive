const Main = (pippo) => {
  return (
    <main style={{ backgroundColor: "green" }}>
      <h1>questo è react</h1>
      <p style={{ color: "white" }}>un framework che sfrutta js</p>
      <input type="text" placeholder={pippo.testo} />
    </main>
  );
};

export default Main;
