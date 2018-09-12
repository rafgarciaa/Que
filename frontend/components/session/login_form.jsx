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
        <div className='login-title'>Login</div><br/>
        <form onSubmit={ this.handleSubmit }>
          <input
            className='login-email-text-box'
            type='text'
            placeholder='Email'
            value={this.state.username}
            onChange={this.update('email')}></input><br/>
          <input
            className='login-password-text-box'
            type='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.update('password')}></input><br/>

          <button>{this.props.formType}</button>
        </form>
      </div>
    );
  }
}
