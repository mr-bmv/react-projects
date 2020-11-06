import React from 'react';
import withBookstoreService from '../HOC/withBookstoreService';

const App = ({ bookstoreService }) => {
    console.log(bookstoreService.getBooks())
    return (<div>App</div>);
};

export default withBookstoreService()(App);