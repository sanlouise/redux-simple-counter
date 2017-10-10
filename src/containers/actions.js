import { ADD_NUMBER, DECREMENT_NUMBER, SQUARE_NUMBER } from './constants';

export const addNumberAction = (number) => {
  return {
    type: ADD_NUMBER,
    number
  }
}

export const decrementNumberAction = (number) => {
  return {
    type: DECREMENT_NUMBER,
    number
  }
}

export const squareNumberAction = (number) => {
  return {
    type: SQUARE_NUMBER,
    number
  }
}
