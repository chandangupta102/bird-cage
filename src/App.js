import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {inject, observer} from 'mobx-react';
@inject('BirdStore')
@observer

class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const bird = this.bird.value;
    this.props.BirdStore.addBird(bird);
    this.bird.value = '';
  }

  render() {
    const {BirdStore} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      <h2> You have {BirdStore.birdCount} birds.</h2>

      <form onSubmit={e => this.handleSubmit(e)}>
      <input type="text" placeholder="Enter Bird" ref={input => this.bird = input}/>
      <button>ADD BIRD</button>
      </form>
      <ul>
    {BirdStore.birds.map(bird => (
      <li key={bird}>
      {bird}
      </li>
    ))}
     </ul>
      </div>


    );
  }
}

export default App;
