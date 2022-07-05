export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

const increment = () => ({
  type: 'INCREMENT',
});

const decrement = () => ({
  type: 'DECREMENT',
});

export default {
  increment,
  decrement,
};
