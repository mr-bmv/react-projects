import React, { Component } from 'react'
import { connect } from 'react-redux';
import BookListItem from '../BookListItem/BookListItem';
import withBookstoreService from '../HOC/withBookstoreService'
import { booksLoaded } from '../../actions'
import { compose } from 'redux';


class BookList extends Component {

  componentDidMount() {
    // receive data using withBookstoreService
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    // dispatch action to store
    this.props.booksLoaded(data)
  }

  render() {
    const { books } = this.props;
    return (
      <ul>
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
    books: state.books
  }
};

const mapDispatchToProps = {
  booksLoaded
};

export default compose(
  // get data from service
  withBookstoreService(),
  // need to  get/set data/actions/ to redux store
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);