import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  totalReducer = (subTotal, value) => {
    const unitPrice = this.props.pescados[value].price;
    const quantity = this.props.pedido[value];
    return quantity * unitPrice + subTotal;
  };
  render() {
    const pedidoIds = Object.keys(this.props.pedido);
    const total = pedidoIds.reduce(this.suma, 0);

    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <div className="total">
          Total:<strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
