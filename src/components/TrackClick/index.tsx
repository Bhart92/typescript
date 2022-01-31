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
        const { renderProps } = this.props;
    return <div onClick={this.handleClick}>
            {renderProps(this.state.click)}
    </div>;
  }
}
