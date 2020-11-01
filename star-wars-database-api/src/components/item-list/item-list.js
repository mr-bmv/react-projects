import React from "react";

import "./item-list.css";

// Components
import SwapiService from "../../services/swapi-services";
// HOC
import withData from "../../hoc/with-data";

const ItemList = (props) => {

  const { data, onItemSelected, children: renderLabels } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabels(item);

    return (
      <li className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}>
        {label}
      </li>
    );
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
};

export default ItemList;