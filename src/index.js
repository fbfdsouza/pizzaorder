import React from "react";
import ReactDOM from "react-dom";
import FoodCard from "./components/FoordCard/";
import images from "./images";

const App = () => {
  return (
    <div>
      <FoodCard image={images[0].src} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
