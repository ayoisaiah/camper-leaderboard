import React from 'react';

const TableItem = (props) => {

  return (
    <tr className="table-item">

      <td>{props.camper.index}</td>

      <td><img src={props.camper.img} className="dp" alt="" /></td>

      <td>
        {props.camper.username}
      </td>

      <td>{props.camper.recent}</td>

      <td>{props.camper.alltime}</td>

    </tr>
  );

}

TableItem.propTypes = {
  camper: React.PropTypes.object
}

export default TableItem;
