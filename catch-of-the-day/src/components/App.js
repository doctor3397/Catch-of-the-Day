import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component{
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    // Initial state
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish) {
    // update the state
    // Take a copy of the existing state ...spread
    const fishes = {...this.state.fishes};
    // Add in the new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // this.state.fishes.fish1 = fishe1;
    // set the state
    this.setState({fishes: fishes});
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;
