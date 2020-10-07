import React, { Component } from 'react'
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'

export default class Order extends Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    getFishInfo: PropTypes.func,
    removeFromOrder: PropTypes.func
  }

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
          <CSSTransition
            key={fishId}
            classNames='order'
            timeout={{ enter: 250, exit: 250 }}
          >
            <li key={fishId}>
              {qty} lbs {fish.name}
              <div>{formatPrice(fish.price)}</div>
              <button onClick={() => this.props.removeFromOrder(fishId)}>&times;</button>
            </li>
          </CSSTransition>
        )

      })

    return (

      <div className="order-wrap">
        <h2>Order</h2>
        <TransitionGroup component='ul' className="order">
          {elements}
        </TransitionGroup>
        <div className="total">
          Total:<strong>{formatPrice(this.props.getFullPrice())}</strong>
        </div>
      </div>
    )
  }
}
