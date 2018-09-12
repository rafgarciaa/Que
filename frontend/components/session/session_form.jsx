import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.form;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return (e) => {
      this.setState ({
        [field]: e.currentTarget.value
      });
    };
  }

  render() {
    if (this.props.formType === 'Sign Up') {
      return (
        <form onSubmit={ this.handleSubmit }>
          <label>First Name:
            <br/>
            <input
              type='text'
              value={this.state.first_name}
              onChange={this.update('first_name')}/>
          </label><br/>
          <label>Last Name:
            <br/>
            <input
              type='text'
              value={this.state.last_name}
              onChange={this.update('last_name')}/>
          </label><br/>
          <label>Email:
            <br/>
            <input
              type='text'
              value={this.state.username}
              onChange={this.update('email')}/>
          </label>
          <br/>
          <label>Password:
            <br/>
            <input
              type='password'
              value={this.state.password}
              onChange={this.update('password')}/>
          </label>

          <button>{this.props.formType}</button>
        </form>
      );
    } else {
      return (
        <form onSubmit={ this.handleSubmit }>
          <label>Email:
            <br/>
            <input
              type='text'
              value={this.state.username}
              onChange={this.update('email')}></input>
          </label>
          <br/>
          <label>Password:
            <br/>
            <input
              type='password'
              value={this.state.password}
              onChange={this.update('password')}></input>
          </label>

          <button>{this.props.formType}</button>
        </form>
      );
    }
  }
}