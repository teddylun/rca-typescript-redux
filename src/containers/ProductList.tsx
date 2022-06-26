import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  addToBasket,
  Product,
  removeFromBasket,
} from '../store/actions/shopping';
import products from '../sample_json/products_sample.json';
import { Action, Dispatch } from 'redux';
import { ProductReducer } from '../store/reducers/productReducer';

interface DispatchProps {
  addToBasket: Function;
  removeFromBasket: Function;
}

type ProductListProps = DispatchProps & ProductReducer;
const mapDispatchToProps = (dispatch: Dispatch<Action<unknown>>) => {
  return {
    addToBasket: (item: Product) =>
      dispatch(addToBasket(item) as unknown as Action<unknown>),
    removeFromBasket: (item: Product) =>
      dispatch(removeFromBasket(item) as unknown as Action<unknown>),
  };
};

const mapStateToProps = (state: unknown) => ({
  ...(state as unknown as ProductReducer),
});

function ProductList(props: ProductListProps) {
  useEffect(() => {
    console.log(props);
  }, [props]);
  const { addToBasket, removeFromBasket } = props;
  return (
    <>
      <header>Basket item: Total Price: £</header>
      <div>
        <ul>
          {products.length > 0 &&
            products.map((product: Product) => (
              <li key={product.name}>
                {product.name} {product.description} £{product.price}{' '}
                <button onClick={() => addToBasket(product)}>
                  Add to Basket
                </button>{' '}
                <button onClick={() => removeFromBasket(product)}>
                  Remove from basket
                </button>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <button onClick={() => addToBasket()}>Proceed to checkout</button>
      </div>
    </>
  );
}

export default connect<ProductReducer, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
