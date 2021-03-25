import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    meaningOfLife: 0 + this.props.increment,
  }
  
  PlusIt = async () =>{
    await this.setState((prevState, prevProps) => ({meaningOfLife: prevState.meaningOfLife + prevProps.increment}))
    console.log(this.state.meaningOfLife);
  } 

  MinusIt = async () => {
    await this.setState((prevState, prevProps) => ({ meaningOfLife: prevState.meaningOfLife - prevProps.increment}))
    console.log(this.state.meaningOfLife);
  }

  Reset = async () => {
    await this.setState({ meaningOfLife: 0 })
    console.log(this.state.meaningOfLife)
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


