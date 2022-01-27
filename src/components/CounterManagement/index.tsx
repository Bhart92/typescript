import React, { Component } from 'react';
import { CounterManagementProps, CounterManagementState } from './interface';

export default class CounterManagement extends Component<CounterManagementProps, CounterManagementState> {
  constructor(props: CounterManagementProps){
    super(props);

    this.state = {
        counter: 0
    };
  }

  handleAddClick = () => {
      this.setState({ counter: this.state.counter + 1 });
    }

  handleRemoveClick = () => {
    this.setState({ counter: this.state.counter - 1 });
    }

    render() {
      const { ownerName } = this.props;
      const { counter } = this.state;
    return <div>
        <h1>Counter management</h1>
        <h2>Owner Name: { ownerName }</h2>
        <h3>counter: { counter }</h3>
        <button onClick={this.handleAddClick}>Increment</button>
        <button onClick={this.handleRemoveClick}>Decrement</button>
    </div>;
  }
}
