import React, { PureComponent } from 'react';
import MyReactMemo from '../MyReactMemo';
import { MyPureComponentProps, MyPureComponentState } from './interface';

export default class MyPureComponent extends PureComponent<MyPureComponentProps, MyPureComponentState> {
  constructor(props: MyPureComponentProps){
      super(props);

      this.state = {
          name: 'Brand',
          address: {
              city: 'myCity',
              state: 'MyState'
          }
      }
  }

  handleSetState = () => {
      const newAddress = {
          city: 'newCity',
          state: 'newState'
      }
      this.setState({
          address: newAddress
      })
  }
    render() {
        console.log('My Pure component render')
        const { name, address } = this.state;
    return <div>
            <h1>Pure Component</h1>
            <MyReactMemo name={name} address={address} />
            <button onClick={this.handleSetState}>Set State</button>
    </div>;
  }
}
