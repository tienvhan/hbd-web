import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import axios from "axios";

function App() {
  const [photo, setPhoto] = useState("");
  const [clientID, setClientID] = useState(
    "04RXO8uHdsa2-qLy3ydVG6NuzDGq-T_rsmM4OcXFCME"
  );

  const [result, setResult] = useState([]);

  function handleChange(event) {
    setPhoto(event.target.value);
  }

  function handleSubmit(event) {
    console.log(photo);

    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      photo +
      "&client_id=" +
      clientID;

    axios.get(url).then(response => {
      console.log(response);
      setResult(response.data.results);
    });
  }

  function changeBG(event) {
    console.log(event.target.value);
    document.body.style.backgroundImage = "url('" + event.target.src + "')";
  }

  return (
    <div className="App">
      <h1>Unsplash Photo Search</h1>
      <h4>
        Apfter the results are displayed click any image to use it as the
        website's background
      </h4>
      <input
        onChange={handleChange}
        name="photo"
        type="text"
        placeholder="Search for photos"
      />
      <button onClick={handleSubmit} type="submit">
        Search
      </button>
      <br />

      {result.map(photo => (
        <img src={photo.urls.regular} id="{photo.id}" onClick={changeBG} />
      ))}
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
