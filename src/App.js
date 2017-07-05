import React, { Component } from 'react';
import MyTable from './MyTable';
import Watchlist from './Watchlist';

import data from './data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watchlist: [],
    };
    this.addToWatchlist = this.addToWatchlist.bind(this);
  }

  addToWatchlist(player) {
    this.setState({
      watchlist: [...this.state.watchlist, player]
    });
  }

  render() {
    return (
      <div className='App'>
        <MyTable 
          data={data}
          addToWatchlist={this.addToWatchlist}  
        />
        <Watchlist watchlist={this.state.watchlist} />
      </div>
    );
  }
}

export default App;
