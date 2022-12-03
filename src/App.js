import React, { Component } from 'react';
import './App.css' 
import './background.jpg'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }
  handleIncreaseCount = (e) => {
    e.preventDefault()
    this.setState({count: this.state.count +1})
  }
  handleDecreaseCount = (e) => {
    e.preventDefault()
    this.setState({count: this.state.count -1})
  }
  render() {
    return (
      <div className='main'>
        <p><span>Subway Counting </span><br/>App</p>
        <button className='box'>
          {this.state.count}
        </button>
        <br/>
        <button className='btn' onClick = {this.handleIncreaseCount}>increase</button>
        <button className='btn' onClick = {this.handleDecreaseCount}>decrease</button>
      </div>
    );
  }
}

export default App;
