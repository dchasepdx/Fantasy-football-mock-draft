import React from 'react';

export default function PlayerRow(props) {
  return (
  <tbody>
    <tr
      onClick={() => {
        props.action(props.player);
      }}
    >
      <td>
        {props.player.displayName}
      </td>
      <td>
        {props.player.team}
      </td>
      <td>
        {props.player.position}
      </td>
      <td>
        {props.byes[props.player.team]}
      </td>
    </tr>
  </tbody>
  );

}
