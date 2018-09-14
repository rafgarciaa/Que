import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
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
          <header className='header'>
            <nav className='header-nav'>
              <h1 className='header-logo'>
                Que?</h1>

              <ul className='header-list'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Answer</a></li>
              </ul>

              <input type='text' placeholder='Search Que'></input>
              <h3>Welcome, {this.props.currentUser.first_name}</h3>
              <button
                className='header-btn'
                onClick={ this.handleSubmit }>Logout</button>
            </nav>
          </header>
      );
    } else {
      return null;
    }
  }
}
