import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Increment, Decrement } from './redux/reducers/counter';

function App() {
  const currentState = useSelector((state) => state.numberState);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>React reducer tutorial</h1>
      <div>
        <h1>{ currentState }</h1>
        <div>
          <button onClick={() => dispatch(Increment())}>Increment</button>
          <button onClick={() => dispatch(Decrement())}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
