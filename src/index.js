import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import BackGroundImage from "./components/BackGround";
import AppContainer from "./containers/AppContainer";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <BackGroundImage src="https://www.freshbrothers.com/wp-content/uploads/2019/12/PIZZA_Hero-1-scaled.jpg" />
      <AppContainer />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
