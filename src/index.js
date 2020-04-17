import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Unsplash Photo Search</h1>
      <h2>
        Apfter the results are displayed click any image to use it as the
        website's background
      </h2>
      <input name="photo" type="text" placeholder="Search for photos" />
      <button type="submit">Search</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
