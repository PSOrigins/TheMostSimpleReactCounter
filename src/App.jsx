import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      meaningOfLife: 47,
    }
  }

  PlusIt = async () =>{
    await this.setState({ meaningOfLife: this.state.meaningOfLife + 1})
    console.log(this.state.meaningOfLife);
  } 

  MinusIt = async () => {
    await this.setState({ meaningOfLife: this.state.meaningOfLife -1})
    console.log(this.state.meaningOfLife);
  }

  Reset = async () => {
    await this.setState({ meaningOfLife: 0 })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {this.state.meaningOfLife}
          </p>
          <button style={{display: 'inline-block'}} onClick={this.PlusIt}>+</button>
          <button style={{display: 'inline-block'}} onClick={this.MinusIt}>-</button>
          <button onClick={this.Reset}>Reset</button>
        </header>
      </div>
    );
  }
}

export default App;


