import React from 'react';
import TableItem from './TableItem';

const Table = (props) => {

  let campers;
  let counter = 0;
  campers = props.campers.map(camper => {
    camper.index = ++counter;

    return (
      <TableItem key={camper.username} camper={camper}/>
    );

  });

  return (
    <table className="table">

      <thead>

        <tr>
          <th>#</th>
          <th>Avatar</th>
          <th>Camper</th>
          <th onClick={() => props.getCampers("recent")} className={"clickable " + (props.current === "recent" ? "current" : "")}>Last 30 days</th>
          <th onClick={() => props.getCampers("alltime")} className={"clickable " + (props.current === "alltime" ? "current" : "")}>Alltime</th>
        </tr>

      </thead>

      <tbody>
        {campers}
      </tbody>

    </table>
  );

}

Table.propTypes = {
  campers: React.PropTypes.array,
  getCampers: React.PropTypes.func,
  current: React.PropTypes.string
}

export default Table;
