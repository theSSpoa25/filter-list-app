import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Filter extends Component {
  render() {
    return(
      <div className="search-filter">
        <label>Search</label>
        <input type="text" className="search-input" onKeyUp={e =>
          this.props.onTextChange(e.target.value)
        } />
      </div>
    )
  }
}

class Playlist extends Component {
  render() {
    return(
      <div>
        <ul>
          {this.props.songs.map(song => 
            <li className="song">{song.name} - {song.artist}</li>
          )}
        </ul>
      </div>
    )
  }
}


class App extends Component {
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
      ],
      filterString: ''
    }
  }
  render() {
    let songsToRender = this.state.songs
      ? this.state.songs.filter(song => {
        let matchesSong = song.name.toLowerCase()
        .includes(this.state.filterString.toLowerCase())

        let matchesArtist = song.artist.toLowerCase().includes(
          this.state.filterString.toLowerCase()
        )
        return matchesSong || matchesArtist
      }) : []
    return (
      <div className="App">
        <Filter onTextChange ={text => {
          this.setState({filterString: text})
        }}/>
        <Playlist songs={songsToRender} />
      </div>
    );
  }
}

export default App;
