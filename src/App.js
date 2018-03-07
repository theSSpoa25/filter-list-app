import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      songs: [
        {name: 'The End', artist: 'The Doors'},
        {name: 'National Anthem', artist: 'Radiohead'},
        {name: 'Blowin\' in the wind', artist: 'Bob Dylan'},
        {name: 'Time', artist: 'Pink Floyd'},
        {name: 'Money', artist: 'Pink Floyd'},
        {name: 'Into You', artist: 'Chat Faker'},
        {name: 'You Don\'t Know Me', artist: 'Son Lux'}        
      ]
    }
  }
    render() {
      return (
        <div>
          <ul>
            {this.state.songs.map(song => 
              <li>{song.name} by {song.artist}</li>
            )}
          </ul>
        </div>
      )
    }
  }

class App extends Component {
  render() {
    return (
      <div className="App">
        <List />
      </div>
    );
  }
}

export default App;
