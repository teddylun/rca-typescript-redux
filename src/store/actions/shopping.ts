import { Dispatch } from 'redux';

export interface Product {
  sku: number;
  name: string;
  description: string;
  price: number;
  basketLimit: number;
}

export interface ProuductDispatch {
  type: string;
  payload: Product;
}

export const addToBasket =
  (payload: Product) => (dispatch: Dispatch<ProuductDispatch>) => {
    dispatch({
      type: 'ADD_TO_BASKET',
      payload,
    });
  };

export const removeFromBasket =
  (payload: Product) => (dispatch: Dispatch<ProuductDispatch>) => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      payload,
    });
  };
