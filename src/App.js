import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';
import './App.css';

function App({ count, increment, decrement }) {
  return (
    <div className="App">
      <h1>Redux Counter App</h1>
      <p>Count : {count}</p>

      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.counter
})

const mapDispatchToProps = {
  increment,
  decrement
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
