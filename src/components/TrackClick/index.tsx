import React, { Component, PureComponent } from 'react';
import { TrackClickProps, TrackClickState } from './interface';

export default class TrackClick extends PureComponent<TrackClickProps, TrackClickState> {
  constructor(props: TrackClickProps){
      super(props);

      this.state = {
          click: 0
      }
  }

  handleClick = () => {
      this.setState({
          click: this.state.click + 1
      });
  }
    render() {
    return <div onClick={this.handleClick}>
        <h1>Track Click</h1>
        <h3>Clicks: {this.state.click}</h3>
    </div>;
  }
}
