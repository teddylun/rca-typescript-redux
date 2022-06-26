import products from '../../sample_json/products_sample.json';
import { ProuductDispatch } from '../actions/shopping';

export interface ProductReducer {
  products: any;
}

const productReducer = (
  state: ProductReducer['products'] = { products },
  action: ProuductDispatch
) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: {
          ...state.basket,
          [`${action.payload.name}`]: {
            sku:
              state.basket[`${action.payload.name}`] !== undefined
                ? state.basket[`${action.payload.name}`].sku + 1
                : 1,
          },
        },
      };
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        basket: {
          ...state.basket,
          [`${action.payload.name}`]: {
            sku:
              state.basket[`${action.payload.name}`] !== undefined &&
              state.basket[`${action.payload.name}`].sku > 0
                ? --state.basket[`${action.payload.name}`].sku
                : 0,
          },
        },
      };
    default:
      return state;
  }
};

export default productReducer;
