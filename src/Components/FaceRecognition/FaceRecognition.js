import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center ma">
      <div className="absoljute mt2">
        <img alt="" src={imageUrl} />
      </div>
    </div>
  );
};

export default FaceRecognition;
