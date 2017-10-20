import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  goToStore(event) {
    // Stop the form from submiting/ reloading the page
    event.preventDefault();
    // Grab the text from the box
    console.log(this.storeInput.value);
    // Transition from / to /store/:storeId
  }

  render() {
    return (                           /* onSubmit = {this.goToStore.bind(this)} */
      <form className="store-selector" onSubmit={ e => this.goToStore(e)} >
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name"
        defaultValue={getFunName()} ref={(input) => {this.storeInput = input} } />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
