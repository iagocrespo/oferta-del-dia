import React from "react";
import PropTypes from "prop-types";

import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Menu from "./Menu";
import base from "../base";

class App extends React.Component {
  static propTypes = {
    storeId: PropTypes.string
  };

  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    // Read from localStorage
    const localStorageRef = localStorage.getItem(this.props.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    //Sync data from firebase

    const config = {
      context: this,
      state: "fishes"
    };
    this.ref = base.syncState(`${this.props.storeId}/fishes`, config);
  }

  componentDidUpdate() {
    localStorage.setItem(this.props.storeId, JSON.stringify(this.state.order));
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = newFish => {
    //1. Take a copy of the existing state
    const newFishes = { ...this.state.fishes };
    //2. Add our newFish to newFishes
    newFishes[`fish${Date.now()}`] = newFish;
    // 3. Set newFishes as the new state
    this.setState({ fishes: newFishes });
  };

  updateFish = (fishKey, updatedFish) => {
    //1. Take a copy of the existing state
    const updatedFishes = { ...this.state.fishes };
    //2. Add our updatedFish to updatedFishes
    updatedFishes[fishKey] = updatedFish;
    // 3. Set updatedFishes as the new state
    this.setState({ fishes: updatedFishes });
  };

  deleteFish = fishKey => {
    //1. Take a copy of the existing state
    const deletedFishes = { ...this.state.fishes };
    //2. Add our deletedFish to deletedFishes
    deletedFishes[fishKey] = null;
    // 3. Set updatedFishes as the new state
    this.setState({ fishes: deletedFishes });
  };

  removeFromOrder = orderKey => {
    //1. Take a copy of the existing state
    const order = { ...this.state.order };
    //2. Add our deletedFish to deletedFishes
    delete order[orderKey];
    // 3. Set updatedFishes as the new state
    this.setState({ order: order });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = orderKey => {
    //1. Take a copy of the existing state
    const newOrder = { ...this.state.order };
    //2. Either add our order iten to newOrder or update the quantity
    if (newOrder[orderKey]) {
      newOrder[orderKey] = newOrder[orderKey] + 1;
    } else {
      newOrder[orderKey] = 1;
    }
    // 3. Set nweOrder as the new `state`
    this.setState({ order: newOrder });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <Menu fishes={this.state.fishes} addToOrder={this.addToOrder} />
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;
