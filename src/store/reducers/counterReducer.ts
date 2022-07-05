import { DECREMENT, INCREMENT } from '../actions/counter';

export interface CounterState {
  counter: number;
}

const counter = (state = 1, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
