import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  totalReducer = (subTotal, value) => {
    const fish = this.props.fishes[value];
    const quantity = this.props.order[value];
    const isAvailable = fish.status === "available";

    if (isAvailable) {
      return quantity * fish.price + subTotal;
    } else {
      return subTotal;
    }
  };

  renderOrder = orderKey => {
    const quantity = this.props.order[orderKey];
    const fish = this.props.fishes[orderKey];
    const isAvailable = fish.status === "available";

    if (isAvailable) {
      return (
        <li key={orderKey}>
          {quantity} lbs {fish.name}
          {formatPrice(quantity * fish.price)}
        </li>
      );
    } else {
      return <li key={orderKey}>Sorry {fish.name} is not available! </li>;
    }
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce(this.totalReducer, 0);

    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          Total:<strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
