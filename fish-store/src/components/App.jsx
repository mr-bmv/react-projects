import React, { Component } from 'react'
import PropTypes from 'prop-types'

// components
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'

import base from '../base/base'


export default class App extends Component {

    static propTypes = {
        match: PropTypes.object
    }

    state = {
        fishes: {},
        order: {}
    }

    componentDidMount() {
        // first reinstate our localStorage
        const localStorageRef = localStorage.getItem(this.props.match.params.id);
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }
        this.ref = base.syncState(`${this.props.match.params.id}/fishes`,
            {
                context: this,
                state: 'fishes'
            });
    }

    componentDidUpdate() {
        localStorage.setItem(
            this.props.match.params.id,
            JSON.stringify(this.state.order)
        );
    }

    componentWillUnmount() {
        base.removeBinding(this.ref)
    }

    addFish = (fish) => {
        //  1.Take a copy of the existing state
        const fishes = { ...this.state.fishes }

        // 2. Add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;

        // 3. Set the new fishes object to state
        this.setState({
            fishes: fishes
        })
    }

    deleteFish = (key) => {
        const fishes = { ...this.state.fishes }
        fishes[key] = null;
        this.setState({ fishes })
    }

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        })
    }

    addToOrder = (fish) => {
        const order = { ...this.state.order }
        order[fish] = order[fish] + 1 || 1
        this.setState({ order: order })
    }

    removeFromOrder = (fish) => {
        const order = { ...this.state.order }
        delete order[fish]
        this.setState({ order: order })
    }

    getFishInfo = (fishId) => {
        if (this.state.fishes[fishId]) {
            return {
                name: this.state.fishes[fishId].name,
                price: this.state.fishes[fishId].price,
                status: this.state.fishes[fishId].status
            }
        }
        return null;
    }

    getFullPrice = () => {
        return Object.keys(this.state.order)
            .reduce((prevTotal, key) => {
                // in case when we load data from local storage before response from
                // firebase came
                const fish = this.state.fishes[key]
                const count = this.state.order[key]
                const isAvailable = fish && fish.status === "available";
                if (isAvailable) {
                    return prevTotal + fish.price * count
                }
                return prevTotal
            }, 0)
    }

    updateFish = (key, newFish) => {
        const fishes = { ...this.state.fishes }
        fishes[key] = newFish;
        this.setState({ fishes })
    }

    render() {
        const elements = Object.keys(this.state.fishes)
            .map((fish) =>
                <Fish
                    key={fish}
                    item={fish}
                    details={this.state.fishes[fish]}
                    // addToCard={() => this.addToOrder(fish)}
                    addToCard={this.addToOrder}
                />);

        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="just props" />
                    <ul className='fishes'>
                        {elements}
                    </ul>
                </div>
                <Order details={this.state.order}
                    getFishInfo={this.getFishInfo}
                    getFullPrice={this.getFullPrice}
                    removeFromOrder={this.removeFromOrder}
                />
                <Inventory
                    addFish={this.addFish}
                    deleteFish={this.deleteFish}
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes}
                    updateFish={this.updateFish}
                    storeId={this.props.match.params.id}
                />
            </div>
        )
    }
}