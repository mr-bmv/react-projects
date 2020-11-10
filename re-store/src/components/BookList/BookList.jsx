import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';

// components
import BookListItem from '../BookListItem/BookListItem';
import withBookstoreService from '../HOC/withBookstoreService'
import { fetchBooks } from '../../actions'
import Spinner from '../Spinner/Spinner'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'

//  styles
import './BookList.css'

class BookList extends Component {

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

    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book} /></li>
            )
          })
        }
      </ul>
    )
  }
}

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
)(BookList);