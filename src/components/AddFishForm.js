import React from "react";
import { create } from "domain";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    //1. Stop the <form> from submitting
    event.preventDefault();

    console.log(this.nameRef.current);
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" ref={this.nameRef} name="name" placeholder="Name" />
        <input
          type="text"
          ref={this.priceRef}
          name="price"
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input
          type="text"
          ref={this.imageRef}
          name="image"
          placeholder="Image"
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
