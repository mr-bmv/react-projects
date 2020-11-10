import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from "../actions/actionTypes";

const initialState = {
  books: [],
  loading: true,
  error: false,
  cartItems: [
    {
      id: 1,
      title: "Book 1",
      total: 25,
      count: 1
    },
    {
      id: 2,
      title: "Other Book 3",
      total: 40,
      count: 1
    }
  ],
  totalPrice: 65
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    // to change loading in true, when we jump from page to page
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        books: [],
        loading: true,
        error: false
      }
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: false
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;