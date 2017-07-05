import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PlayerRow from './PlayerRow';
import ColumnHeaders from './ColumnHeaders';

class Watchlist extends Component {

  scrollToBottom() {
    const node = ReactDOM.findDOMNode(this.watchlistEnd);
    node.scrollIntoView({behavior: 'smooth'});
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }
  
  render() {
    return (
      <div className='watchlist'>
        <div className='header'>Watchlist</div>
        <table>
          <ColumnHeaders />
          {this.props.watchlist.map(player => (
            <PlayerRow 
              key={player.playerId}
              player={player}
              byes={this.props.byes}
              action={this.props.removeFromWatchlist}
            />
          ))}
          <tbody ref={(el) => {this.watchlistEnd = el;}} />
        </table>
      </div>
    );
  }
}

export default Watchlist;
