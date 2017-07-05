import React, { Component } from 'react';
import MyTable from './MyTable';
import Watchlist from './Watchlist';

import data from './data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watchlist: [],
      byes: {
        ARI: 8, ATL: 5, BAL: 10,
        BUF: 6, CAR: 11, CHI: 9,
        CIN: 6, CLE: 9, DAL: 6,
        DEN: 5, DET: 6, GB: 8,
        HOU: 6, IND: 11, JAC: 8,
        KC: 10, LAC: 9, LAR: 8,
        MIA: 11, MIN: 9, NYG: 8,
        NYJ: 11, NE: 9, NO: 5,
        OAK: 10, PHI: 10, PIT: 9,
        SF: 11, SEA: 6, TB: 11, 
        TEN: 8, WAS: 5,
      },
    };
    this.addToWatchlist = this.addToWatchlist.bind(this);
    this.removeFromWatchlist = this.removeFromWatchlist.bind(this);
  }

  addToWatchlist(player) {
    this.setState({
      watchlist: [...this.state.watchlist, player]
    });
  }

  removeFromWatchlist(removePlayer) {
    const index = this.state.watchlist.findIndex(player => player.playerId === removePlayer.playerId);
    this.setState({
      watchlist: this.state.watchlist.filter((_, i) => i !== index)
    });

  }

  render() {
    return (
      <div className='App'>
        <MyTable
          data={data}
          addToWatchlist={this.addToWatchlist}  
          byes={this.state.byes}
        />
        <div className='grid'>
          <div className='col-1-2'>
            <Watchlist 
              watchlist={this.state.watchlist} 
              byes={this.state.byes}
              removeFromWatchlist={this.removeFromWatchlist}  
            />
          </div>
          <div className='col-1-2 header'>
            Drafted
          </div>
        </div>
      </div>
    );
  }
}

export default App;
