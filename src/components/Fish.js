import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  handleClick = () => this.props.addToOrder(this.props.index);
  render() {
    const { name, image, price, desc, status } = this.props.fishDetails;
    const isNotAvailable = status === "unavailable";

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3>
          {name} <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={isNotAvailable} onClick={this.handleClick}>
          {isNotAvailable ? "Sold Out!" : "Add To Cart"}
        </button>
      </li>
    );
  }
}

export default Fish;
