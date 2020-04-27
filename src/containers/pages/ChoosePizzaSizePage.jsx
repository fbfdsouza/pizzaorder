import React from "react";

class ChoosePizzaSizePage extends React.Component {
  render() {
    return (
      <div className="ui massive horizontal divided list">
        <div className="item">
          <img
            className="image"
            src="https://res.cloudinary.com/fbfdsouza/image/upload/v1588026622/pizzaorder/pizza-svgrepo-com_fzmquy.svg"
          />
          <div className="content">
            <div className="header">
              <div>Small</div>
            </div>
          </div>
        </div>
        <div className="item">
          <img
            className="image"
            src="https://res.cloudinary.com/fbfdsouza/image/upload/v1588026622/pizzaorder/pizza-svgrepo-com_fzmquy.svg"
          />
          <div className="content">
            <div className="header">
              <div>Medium</div>
            </div>
          </div>
        </div>
        <div className="item">
          <img
            className="image"
            src="https://res.cloudinary.com/fbfdsouza/image/upload/v1588026622/pizzaorder/pizza-svgrepo-com_fzmquy.svg"
          />
          <div className="content">
            <div className="header">
              <div>Big</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChoosePizzaSizePage;
