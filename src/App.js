import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");
  const handleClick = async () => {
    const response = await axios.post("/helloworld");
    // const response = await axios.post("https://8906093291.for-seoul.synctreengine.com/helloworld");
    setMsg(response.data.result);
    console.log("response", response.data.result);
  };
  const handleClickReset = () => setMsg("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button className="hello" onClick={handleClick}>
          Hello World
        </button>

        <button className="error" onClick={handleClickReset}>
          Reset
        </button>
        {msg.length > 0 && <p>{msg}</p>}
      </header>
    </div>
  );
}

export default App;
