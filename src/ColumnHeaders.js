import React from 'react';

export default function ColumnHeaders({filters = false, filterFields}) {
  
  return (
    <thead>
      <tr>
        <th>
          <label htmlFor='name'>Name</label><br/>
          {!filters ? null : 
          <input 
            id='name'
            onChange={(e) => filterFields(e, 'displayName')}
          />}

        </th>
        <th>
          <label htmlFor='Team'>Team</label><br/>
          {!filters ? null :
          <input 
            id='Team'
            onChange={(e) => filterFields(e, 'team')}
          />}
        </th>
        <th>
          <label htmlFor='Position'>Position</label><br/>
          {!filters ? null :
          <input 
            id='Position'
            onChange={(e) => filterFields(e, 'position')}
          />}
        </th>
        <th>Bye</th>
      </tr>
    </thead>
  );
}
