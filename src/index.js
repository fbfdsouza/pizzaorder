import React from "react";
import ReactDOM from "react-dom";
import FoodCard from "./components/FoordCard";
import images from "./images";
import "./styles/styles.css";

const App = () => {
  return (
    <div>
      <FoodCard image={images[0]} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
