import { ADD_NUMBER, DECREMENT_NUMBER, SQUARE_NUMBER } from './constants';

const initialState = {
  number: 0,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER: {
      return {
        ...state,
        number: state.number + 1
      }
    }

    case DECREMENT_NUMBER: {
      return {
        ...state,
        number: state.number - 1
      }
    }

    case SQUARE_NUMBER: {
      return {
        ...state,
        number: state.number * state.number
      }
    }

    default: {
      return state;
    }
  }
}

export default appReducer;
