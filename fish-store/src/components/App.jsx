import React, { Component } from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'
import base from '../base/base'


export default class App extends Component {

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

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        })
    }

    addToCard = (fish) => {
        const order = { ...this.state.order }
        order[fish] = order[fish] + 1 || 1
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
                let sum = 0
                // in case when we load data from local  storage before response from
                // firebase came
                if (!this.state.fishes[key]) return null;
                if (this.state.fishes[key].status === "available") {
                    sum = this.state.fishes[key].price * this.state.order[key]
                }
                return prevTotal + sum
            }, 0)
    }

    render() {
        const elements = Object.keys(this.state.fishes)
            .map((fish) =>
                <Fish
                    key={fish}
                    details={this.state.fishes[fish]}
                    addToCard={() => this.addToCard(fish)}
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
                />
                <Inventory
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                />
            </div>
        )
    }
}