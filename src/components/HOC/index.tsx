import React, { Component, FC } from 'react';
import { withTrackClickProps,withTrackClickState, WrapperComponentProps } from './interface';

export const withtrackClick = (WrapperComponent: FC<WrapperComponentProps>) => {
    return class extends Component<withTrackClickProps,withTrackClickState> {
        constructor(props: withTrackClickProps){
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
              <WrapperComponent click={this.state.click} />
          </div>;
        }
    }
}