import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component{
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
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

  loadSamples(){
    this.setState({
      fishes: sampleFishes
    });
  }

  addToOrder(key) {
    // Take a copy of the current Order state
    const order = {...this.state.order};
    // Update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1;
    this.setState({order: order});
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {/* Return a array of keys of the fishes */}
            {
              Object
              .keys(this.state.fishes)
              .map( fish => <Fish key={fish}
                                  index={fish}
                                  details={this.state.fishes[fish]}
                                  addToOrder={this.addToOrder} /> )
            }
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;
