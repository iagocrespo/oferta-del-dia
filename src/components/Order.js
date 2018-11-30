import React from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.object.isRequired,
    order: PropTypes.object.isRequired,
    removeFromOrder: PropTypes.func.isRequired
  };
  totalReducer = (subTotal, value) => {
    const fish = this.props.fishes[value];
    const quantity = this.props.order[value];
    const isAvailable = fish && fish.status === "available";

    if (isAvailable) {
      return quantity * fish.price + subTotal;
    } else {
      return subTotal;
    }
  };

  renderOrder = orderKey => {
    const quantity = this.props.order[orderKey];
    const fish = this.props.fishes[orderKey];
    const isAvailable = fish && fish.status === "available";
    const orderTransitionOptions = {
      classNames: "order",
      key: orderKey,
      timeout: { enter: 500, exit: 500 }
    };

    const countTransitionOptions = {
      classNames: "count",
      key: quantity,
      timeout: { enter: 500, exit: 500 }
    };

    if (!fish) {
      return null;
    }

    if (isAvailable) {
      return (
        <CSSTransition {...orderTransitionOptions}>
          <li key={orderKey}>
            <span>
              <TransitionGroup component="span" className="count">
                <CSSTransition {...countTransitionOptions}>
                  <span>{quantity}</span>
                </CSSTransition>
              </TransitionGroup>
              lbs {fish.name}
              {formatPrice(quantity * fish.price)}
              <button onClick={() => this.props.removeFromOrder(orderKey)}>
                &times;
              </button>
            </span>
          </li>
        </CSSTransition>
      );
    } else {
      return (
        <CSSTransition {...orderTransitionOptions}>
          <li key={orderKey}>
            Sorry {fish ? fish.name : "product"} is not available!
          </li>
        </CSSTransition>
      );
    }
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce(this.totalReducer, 0);

    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          Total:<strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
