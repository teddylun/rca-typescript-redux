import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../store/actions';
import { AppState } from '../../store/store';

export default function Counter() {
  const counter = useSelector((state: AppState) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(allActions.counterActions.increment())}>
        Increase counter
      </button>
      <button onClick={() => dispatch(allActions.counterActions.decrement())}>
        Decrease counter
      </button>
    </>
  );
}
