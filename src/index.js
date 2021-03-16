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

  //const [photos, setPhotos] = useState([]);
  //const [choosenImageIndex, setChoosenImageIndex] = useState(null);

  const previewImage = (idx) => {
    setState({ ...state, choosenImageIndex: idx });
    //setChoosenImageIndex(idx)
  };

  const savePhotos = (results) => {
    setState({ photos: results, choosenImageIndex: null });
    //setPhotos(results)
    //setChoosenImageIndex(null)
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "grey" }}>
        Image search engine
      </h1>
      <div className="container">
        <SearchBar save={savePhotos} />
        {state.photos.length && state.choosenImageIndex !== null ? (
          <Preview
            photoUrl={state.photos[state.choosenImageIndex].largeImageURL}
          />
        ) : null}
        <Gallery preview={previewImage} photos={state.photos} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
