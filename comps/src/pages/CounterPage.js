// import useCounter from '../hooks/useCounter';
import Panel from '../components/Panel';
import Button from '../components/Button';
import { useReducer } from 'react';

//action types
const INCREMENT_COUNT = 'increment-count';
const SET_VALUE_TO_ADD = 'change-value';
const DECREMENT_COUNT = 'decrement-count';
const ADD_VALUE = 'add-value';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };

    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };

    case ADD_VALUE:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };

    default:
      return state;
  }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const incrementCount = () => {
    // setCount(count + 1);
    dispatch({
      type: 'increment-count',
    });
  };

  const decrementCount = () => {
    // setCount(count - 1);
    dispatch({
      type: 'decrement-count',
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: 'change-value',
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'add-value',
      payload: state.valueToAdd,
    });
  };
  return (
    <Panel className="m-3">
      {' '}
      <h1 className="text-lg">Count is : {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={incrementCount}>Increment </Button>
        <Button onClick={decrementCount}>Decrement </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!!</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-100 border border-gray-300"
          onChange={handleChange}
          value={state.valueToAdd || ''}
        />
        <Button primary type="submit">
          Add it!!
        </Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
