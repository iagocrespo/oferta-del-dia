import React from "react";

class StorePicker extends React.Component {
  myInput = React.createRef;

  goToStore(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input type="text" />
        <button type="submit">
          Visit Store{" "}
          <span role="img" aria-labelledby="sushi-box">
            🍱
          </span>
        </button>
      </form>
    );
  }
}

export default StorePicker;
