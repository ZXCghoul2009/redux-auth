import classes from './Counter.module.css';
import { couneterActions } from '../store/index';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(couneterActions.increment())
  }

  const increaseHandler = () => {
    dispatch( couneterActions.increase(5))
  }
 
  const decrementHandler = () => {
    dispatch( couneterActions.decrement() )
  }

  const resetHandler = () => {
    dispatch(couneterActions.resetCounter())
  }

  const toggleCounterHandler = () => {
    dispatch(couneterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={increaseHandler}>+5</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={resetHandler}>reset counter</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
