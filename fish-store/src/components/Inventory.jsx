import React, { Component } from 'react'
import AddFishForm from './AddFishForm'
import EditForm from './EditForm'
import PropTypes from 'prop-types'

export default class Inventory extends Component {
    static propTypes = {
        fishes: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        addFish: PropTypes.func,
        loadSampleFishes: PropTypes.func
    }

    render() {
        const cards = Object.keys(this.props.fishes)
            .map((fish) =>
                <EditForm
                    key={fish}
                    index={fish}
                    details={this.props.fishes[fish]}
                    updateFish={this.props.updateFish}
                    deleteFish={this.props.deleteFish}
                />
            )
        return (
            <div className="Inventory">
                <h2>Inventory</h2>
                <ul>
                    {cards}
                </ul>
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>

            </div>
        )
    }
}
