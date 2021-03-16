import React from "react";

const Preview = (props) => {
  return (
    <div className="container">
      <div className="row">
        <img style={{ width: "80vw" }} src={props.photoUrl} alt={props.tags} />
      </div>
    </div>
  );
};

export default Preview;
