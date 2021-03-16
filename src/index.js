import React, { useState } from "react";
import ReactDOM from "react-dom";
import Gallery from "./components/Gallery";
import Preview from "./components/Preview";
import SearchBar from "./components/SearchBar";

const App = () => {
  const initState = {
    photos: [],
    choosenImageIndex: null,
  };
  const [state, setState] = useState(initState);

  //   const [photos, setPhotos] = useState([]);
  //   const [choosenIndex, setChoosenIndex] = useState(null);

  previewImage = (idx) => {
    setState({ ...state, choosenImageIndex: idx });
  };

  savePhotos = (results) => {
    setState({ photos: results, choosenImageIndex: null });
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "grey" }}>
        Image search engine
      </h1>
      <div className="container">
        <SearchBar save={savePhotos} />
        {photos.length && choosenIndex !== null ? (
          <Preview photoUrl={photos[choosenImageIndex].largeImageURL} />
        ) : null}
        <Gallery preview={previewImage} photos={photos} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
