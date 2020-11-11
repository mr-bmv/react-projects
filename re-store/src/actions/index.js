const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST',
    }
};

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
};

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
};

const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

const fetchBooks = (dispatch, ownProps) => () => {
    dispatch(booksRequested())

    //  for promise
    ownProps.bookstoreService.getBooks()
        .then((data) => {
            // dispatch action to store
            dispatch(booksLoaded(data))
        })
        .catch((error) => {
            dispatch(booksError(error))
        })

}

export { booksLoaded, booksRequested, booksError, fetchBooks, bookAddedToCart };