import React, { Component } from 'react'
import firebase from "firebase";
import AddFishForm from './AddFishForm'
import EditForm from './EditForm'
import PropTypes from 'prop-types'
import Login from './Login'
import base, { firebaseApp } from '../base/base'

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
    state = {
        uid: null,
        owner: null
    };

    // If we reload page we will check was user to login
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.authHandler({ user });
            }
        });
    }

    // 4. Logic for authentication
    authHandler = async authData => {
        // 5 .Look up the current store in the firebase database
        const store = await base.fetch(this.props.storeId, { context: this });
        console.log(store);
        // 6. Claim it if there is no owner
        if (!store.owner) {
            // 7. save it as our own
            await base.post(`${this.props.storeId}/owner`, {
                data: authData.user.uid
            });
        }
        // 8. Set the state of the inventory component to reflect the current user
        this.setState({
            uid: authData.user.uid,
            owner: store.owner || authData.user.uid
        });
    };

    // 3. Will connect to our base with @provider
    // @provider - could be different application ( Github, Facebook, Twitter)
    authenticate = provider => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.authHandler);
    };

    logout = async () => {
        console.log("Logging out!");
        await firebase.auth().signOut();
        this.setState({ uid: null });
    };

    render() {
        const logout = <button onClick={this.logout}>Log Out!</button>;
        // I. Check if they are logged in
        if (!this.state.uid) {
            // 2. Provide possibility to login for users
            return <Login authenticate={this.authenticate} />;
        }

        // II. check if they are not the owner of the store
        if (this.state.uid !== this.state.owner) {
            return (
                <div>
                    <p>Sorry you are not the owner!</p>
                    {logout}
                </div>
            );
        }

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
        // III. They must be the owner, just render the inventory
        return (
            <div className="Inventory">
                <h2>Inventory</h2>
                {logout}
                <ul>
                    {cards}
                </ul>
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes}>
                    Load Sample Fishes
                </button>

            </div>
        )
    }
}
