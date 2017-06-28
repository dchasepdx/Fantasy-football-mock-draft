import React, { Component } from 'react';
import data from './data.json';

class MyTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }

  render() {
    const data = this.state.data.Players;
    return (
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Team</th>
              <th>Position</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {data.map(player => {
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
                    {player.active}
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
