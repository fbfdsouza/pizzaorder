import React from "react";

const BackGroundImage = ({ src }) => {
  return (
    <div
      style={{
        position: "absolute",
        height: "50vh",
        overflow: "hidden",
        top: "25vh",
        opacity: "0.15",
        width: "95%",
      }}
    >
      <img src={src} />
    </div>
  );
};

export default BackGroundImage;
