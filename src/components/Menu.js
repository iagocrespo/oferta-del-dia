import React from "react";
import Header from "./Header";
import Fish from "./Fish";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <Header tagline="Fresh Seafood Market" />
        <ul className="fishes">
          {Object.keys(this.props.pescados).map(pescado => (
            <Fish key={pescado} fishDetails={this.props.pescados[pescado]} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Menu;
