import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

 

  render() {
    return (
      <div style={styles.container}>
        <h1>Counter</h1>
        <h2 style={styles.count}>{this.state.count}</h2>
        <button style={styles.button} onClick={this.increment}>Increment</button>
        <button style={styles.button} onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px'
  },
  count: {
    fontSize: '48px',
    margin: '20px 0'
  },
  button: {
    fontSize: '20px',
    margin: '10px',
    padding: '10px 20px',
    cursor: 'pointer'
  }
};

export default Counter;
