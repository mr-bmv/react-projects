import React, { Component } from 'react'
import { formatPrice } from "../helpers";

export default class Order extends Component {
  render() {
    const elements = Object.keys(this.props.details)
      .map(fishId => {
        const qty = this.props.details[fishId]
        const fish = this.props.getFishInfo(fishId)
        // in case when we load data from local  storage before response from
        // firebase came
        const isAvailable = fish && fish.status === "available";
        if (!fish) return null;
        if (!isAvailable) {
          return (
            <li key={fishId}>
              Sorry {fish.name} is no longer available
            </li>
          )
        }
        return (
          <li key={fishId}>
            {qty} lbs {fish.name}
            <div>{formatPrice(fish.price)}</div>
            <button onClick={() => this.props.removeFromOrder(fishId)}>&times;</button>
          </li>
        )
      })

    return (
      
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">
          {elements}
        </ul>
        <div className="total">
          Total:<strong>{formatPrice(this.props.getFullPrice())}</strong>
        </div>
      </div>
    )
  }
}
