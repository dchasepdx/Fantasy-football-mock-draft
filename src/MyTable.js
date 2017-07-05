import React, { Component } from 'react';

import PlayerRow from './PlayerRow';
import ColumnHeaders from './ColumnHeaders';

class MyTable extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data.Players;
    this.state = {
      players: this.data,
    };
    this.filterFields = this.filterFields.bind(this);
  }

  filterFields(e, field) {
    const filterData = e.target.value.toString().toLowerCase();

    const filteredList = this.data.filter(player => {
      return player[field].toString().toLowerCase().indexOf(filterData) > -1;
    });
    this.setState({
      players: filteredList
    });
  }

  render() {
    const players = this.state.players;
    return (
      <div className='table'>
        <table>      
          <ColumnHeaders 
            filters={true}
            filterFields={this.filterFields}  
          />
          {players.map(player => {
            if (!parseInt(player.active, 10)) {
              return null;
            }
            return (
              <PlayerRow
                key={player.playerId} 
                player={player}
                byes={this.props.byes}
                action={this.props.addToWatchlist}
              />
            );
          }
          )}
        </table>
      </div>
    );
  }
}

export default MyTable;
