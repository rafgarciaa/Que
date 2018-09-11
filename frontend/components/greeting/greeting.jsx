import React from 'react';
import { Link } from 'react-router-dom';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <h1>Welcome {this.props.currentUser.first_name}</h1>
          <button onClick={this.handleSubmit}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to='/signup'>Sign Up</Link>
          <br/>
          <Link to='/login'>Log In</Link>
        </div>
      );
    }
  }
}
