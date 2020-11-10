import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchBooks } from '../actions';
import BookList from '../components/BookList/BookList';
import ErrorIndicator from '../components/ErrorIndicator/ErrorIndicator';
import withBookstoreService from '../components/HOC/withBookstoreService';
import Spinner from '../components/Spinner/Spinner';

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />
    }

    return <BookList books={books} />
  }
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
    loading: state.loading,
    error: state.error
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBooks: fetchBooks(dispatch, ownProps)
  }
};

export default compose(
  // get data from service
  withBookstoreService(),
  // need to  get/set data/actions/ to redux store
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);