import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import axios from "axios";
import backgroundImage from "../public/initial_bg.jpg";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function App() {
  const [photo, setPhoto] = useState("");
  const [clientID, setClientID] = useState(
    "04RXO8uHdsa2-qLy3ydVG6NuzDGq-T_rsmM4OcXFCME"
  );

  const [result, setResult] = useState([]);

  const styles = {
    container: {
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh"
    }
  };

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
    <div className="App" style={styles}>
      <h1 class="custom">Unsplash Photo Search</h1>
      <h4>
        After the results are displayed click any image to use it as the
        website's background
      </h4>
      <TextField
        onChange={handleChange}
        name="photo"
        type="text"
        placeholder="Enter keywords"
      />
      <Button onClick={handleSubmit} type="submit">
        Search
      </Button>
      <br />

      {result.map(photo => (
        <img src={photo.urls.small} id="{photo.id}" onClick={changeBG} />
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
