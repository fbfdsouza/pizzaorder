import React from "react";

class ChoosePizzaCrustPage extends React.Component {
  render() {
    return (
      <div className="ui massive horizontal divided list">
        <div className="item">
          <img
            style={{ fontSize: "100%" }}
            className="image"
            src="https://res.cloudinary.com/fbfdsouza/image/upload/v1588028093/pizzaorder/a912519339f9c022cc5ba8e6d383921d_sxwryt.svg"
          />
          <div className="content">
            <div className="header">Thin</div>
          </div>
        </div>
        <div className="item">
          <img
            style={{ fontSize: "100%" }}
            className="image"
            src="https://res.cloudinary.com/fbfdsouza/image/upload/v1588028093/pizzaorder/bd9180dc164d6192cb6ab9b206fc8f6f_p2jh9g.svg"
          />
          <div className="content">
            <div className="header">Thick</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChoosePizzaCrustPage;
