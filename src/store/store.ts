import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { Product } from './actions/shopping';
import rootReducer from './reducers/rootReducer';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface InitialState {
  basket: {
    [key: string]: Product;
  };
  totalPrice: number;
}

const configureStore = (
  initialState = {
    products: {
      basket: {},
      totalPrice: 0,
    },
  }
) => {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
};

export default configureStore;
