import React, { Component } from 'react';
import data from './data.json';

class MyTable extends Component {
  constructor(props) {
    super(props);
    this.data = data.Players;
    this.state = {
      players: this.data,
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
    this.filterFields = this.filterFields.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
  }

  resetFilters() {
    this.setState({players: this.data});
  }

  filterFields(e, field) {
    const {displayName, position, team, players} = this.state;
    const filterData = e.target.value.toString().toLowerCase();
    const list = (displayName || position || team) ? players : this.data;


    const filteredList = list.filter(player => {
      return player[field].toString().toLowerCase().indexOf(filterData) > -1;
    });
    this.setState({
      players: filteredList,
      [field]: filterData
    });
  }

  render() {
    const players = this.state.players;
    const byes = this.state.byes;
    return (
      <div className='table'>
        <table>      
          <thead>
            <tr>
              <th>
                <label htmlFor='name'>Name</label><br/>
                <input 
                  id='name'
                  onChange={(e) => this.filterFields(e, 'displayName')}
                />

              </th>
              <th>
                <label htmlFor='Team'>Team</label><br/>
                <input 
                  id='Team'
                  onChange={(e) => this.filterFields(e, 'team')}
                />
              </th>
              <th>
                <label htmlFor='Position'>Position</label><br/>
                <input 
                  id='Position'
                  onChange={(e) => this.filterFields(e, 'position')}
                />
              </th>
              <th>Bye</th>
            </tr>
          </thead>
          <tbody>
            {players.map(player => {
              if (parseInt(player.active, 10)) {
                return (
                <tr key={player.playerId}>
                  <td>
                    {player.displayName}
                  </td>
                  <td>
                    {player.team}
                  </td>
                  <td>
                    {player.position}
                  </td>
                  <td>
                    {byes[player.team]}
                  </td>
                </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyTable;
