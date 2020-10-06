import React, { Component } from 'react'
import AddFishForm from './AddFishForm'
import EditForm from './EditForm'

export default class Inventory extends Component {
    render() {
        const cards = Object.keys(this.props.fishes)
            .map((fish) =>
                <EditForm
                    key={fish}
                    index={fish}
                    details={this.props.fishes[fish]}
                    updateFish={this.props.updateFish}
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
