import React, { Component } from 'react'
import { formatPrice } from '../helpers'
import PropTypes from 'prop-types'

export default class Fish extends Component {

    static propTypes = {
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        addToCard: PropTypes.func
    }

    render() {
        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === 'available'
        return (
            <li className="menu-fish">
                <img src={image} alt={image} />
                <h3 className="fish-name">
                    {name}
                    <span className="price">
                        {formatPrice(price)}
                    </span>
                </h3>
                <p>{desc}</p>
                <button
                    onClick={this.props.addToCard}
                    disabled={!isAvailable}>
                    {isAvailable ? "Add to Card" : "Sold Out"}
                </button>
            </li>
        )
    }
}