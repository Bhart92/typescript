<<<<<<< HEAD
import React, { Component } from 'react';
import { CounterManagementProps, CounterManagementState } from './interface';
import axios from 'axios';

export default class CounterManagement extends Component<CounterManagementProps, CounterManagementState> {
  constructor(props: CounterManagementProps){
    super(props);

    this.state = {
        counter: 0,
        users: []
    };
    console.log('constructor');
  }

  handleAddClick = () => {
    //   this.setState({ counter: this.state.counter + 1 });
    this.setState(function(prevState){
        return {
            counter: prevState.counter + 1
        }
    }, function(){
        alert('finished')
    });
    }

  handleRemoveClick = () => {
    this.setState({ counter: this.state.counter - 1 });
    }

    static getDerivedStateFromProps(props: CounterManagementProps, state: CounterManagementState) {
        console.log('getDerivedStateFromProps');
        
        return null;
    }
    clickWindow =() => {
        this.setState({ counter: this.state.counter + 1 });
    }

    componentDidMount(){ 
        axios.get('https://reqres.in/api/users?page=2')
            .then(response => {
                const data = response.data;

                const users = data.data.map((userData: any) => userData.first_name);
                this.setState({ users });
            })
            window.addEventListener('click', this.clickWindow);
    }

    render() {
        console.log('render');
      const { ownerName } = this.props;
      const { counter } = this.state;
      const { users } = this.state;
    return <div>
        <h1>Counter management</h1>
        <h2>Owner Name: { ownerName }</h2>
        <h3>counter: { counter }</h3>
        <button onClick={this.handleAddClick}>Increment</button>
        <button onClick={this.handleRemoveClick}>Decrement</button>
        <ul>
            {users.map((user: any) => <li>{user}</li>)}
        </ul>
    </div>;
  }
}
=======
import React, { Component } from 'react';
import { CounterManagementProps, CounterManagementState } from './interface';
import axios from 'axios';

export default class CounterManagement extends Component<CounterManagementProps, CounterManagementState> {
  constructor(props: CounterManagementProps){
    super(props);

    this.state = {
        counter: 0,
        users: []
    };
    console.log('constructor');
  }

  handleAddClick = () => {
    //   this.setState({ counter: this.state.counter + 1 });
    this.setState(function(prevState){
        return {
            counter: prevState.counter + 1
        }
    }, function(){
        alert('finished')
    });
    }

  handleRemoveClick = () => {
    this.setState({ counter: this.state.counter - 1 });
    }

    static getDerivedStateFromProps(props: CounterManagementProps, state: CounterManagementState) {
        console.log('getDerivedStateFromProps');
        
        return null;
    }
    clickWindow =() => {
        this.setState({ counter: this.state.counter + 1 });
    }

    componentDidMount(){
        axios.get('https://reqres.in/api/users?page=2')
            .then(response => {
                const data = response.data;

                const users = data.data.map((userData: any) => userData.first_name);
                this.setState({ users });
            })
            window.addEventListener('click', this.clickWindow);
    }

    render() {
        console.log('render');
      const { ownerName } = this.props;
      const { counter } = this.state;
      const { users } = this.state;
    return <div>
        <h1>Counter management</h1>
        <h2>Owner Name: { ownerName }</h2>
        <h3>counter: { counter }</h3>
        <button onClick={this.handleAddClick}>Increment</button>
        <button onClick={this.handleRemoveClick}>Decrement</button>
        <ul>
            {users.map((user: any) => <li>{user}</li>)}
        </ul>
    </div>;
  }
}
>>>>>>> 4493adf1f03b2270a6ba6f23bdc6885a7ffb6e14
