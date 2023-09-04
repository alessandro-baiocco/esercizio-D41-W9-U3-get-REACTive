import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <ButtonComponent testo="testo generato" />
      <ImageComponent
        alt="europa destiny 2"
        src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
      />
      <Header
        nome="alessandro baiocco"
        src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
      />
      <Main testo="metti qualcosa" />
    </div>
  );
}

export default App;
