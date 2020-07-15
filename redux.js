// This is `redux` base template
const redux = require("redux");

const initialState = {
  counter: 0,
};

// Reducer works with state and changes it based on actions
// All logic for actions could be describes here
const reducer = (state = initialState, action) => {
  if ((action = "ADD")) {
    return {
      counter: state.counter + 1,
    };
  }
  return state;
};

// Store is common place to contain all states
const store = redux.createStore(reducer);
store.subscribe(() => {
  console.log("Subscribe", store.getState());
});

// Actions describes type of action and additional parameter like `payload`
const addCounter = {
  type: "ADD",
};

// dispatch needed action from actions creator to store
store.dispatch(addCounter);
