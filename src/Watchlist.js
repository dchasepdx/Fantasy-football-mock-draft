import React, { Component } from 'react';

class Watchlist extends Component {
  render() {
    if  (!this.props.watchlist.length) return null;
    return (
      <div>
        {this.props.watchlist.map(player => (
          <p key={player.playerId}>
            {player.displayName}
          </p>
        ))}
      </div>
    );
  }
}

export default Watchlist;
