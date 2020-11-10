const initialState = {
  books: [],
  loading: true,
  error: false
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    // to change loading in true, when we jump from page to page
    case 'BOOKS_REQUESTED':
      return {
        books: [],
        loading: true,
        error: false
      }
    case 'BOOKS_LOADED':
      return {
        books: action.payload,
        loading: false,
        error: false
      };
    case 'BOOKS_ERROR':
      return {
        books: [],
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;