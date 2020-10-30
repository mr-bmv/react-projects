import React from "react";

import "./item-list.css";

// Components
import SwapiService from "../../services/swapi-services";
// HOC
import withData from "../../hoc/with-data";

const ItemList = (props) => {

  const renderItems = (itemList) =>
    itemList.map((item) => {
      const { id } = item;
      const text = props.renderItem(item);
      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => props.onItemSelected(id)}
        >
          {text}
        </li>
      );
    });

  const { data } = props;
  const items = renderItems(data);
  return <ul className="item-list list-group">{items}</ul>;
}

const { getAllPeople } = new SwapiService();

//  use HOC
export default withData(ItemList, getAllPeople);