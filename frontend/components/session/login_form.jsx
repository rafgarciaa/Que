import React from 'react';

export default class LogInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.form;
    this.handleSubmit = this.handleSubmit.bind(this);
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
    return (
      <div className='login-form-box'>
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
          </label><br/>

          <button>{this.props.formType}</button>
        </form>
      </div>
    );
  }
}
