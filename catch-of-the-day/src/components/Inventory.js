import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    // Get a copy of one fish
    const fish = this.props.fishes[key];
    // console.log(fish)
    // console.log(e.target.name, e.target.value)

    // Update it with the new data
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value // Overwrite the changes
    }
    // console.log(updatedFish);
    this.props.updateFish(key, updatedFish)
  }

  renderInventory(key) {
    const fish = this.props.fishes[key];

    return (
      <div className="fish-edit" key={key}>
        <input type="text" name="name" value={fish.name} placeholder="Fish Name"
          onChange={(e) => this.handleChange(e, key)} />
        <input type="text" name="price" value={fish.price} placeholder="Fish Price"
          onChange={(e) => this.handleChange(e, key)} />
        <select name="status" value={fish.status}
          onChange={(e) => this.handleChange(e, key)} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" value={fish.desc} placeholder="Fish Desc"
          onChange={(e) => this.handleChange(e, key)} ></textarea>
        <input name="image" value={fish.image} type="text" placeholder="Fish Image"
          onChange={(e) => this.handleChange(e, key)} />
      </div>
    )
  }

  render() {
    return(
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(
          this.renderInventory
        )}
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
