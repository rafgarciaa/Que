import React from 'react';

export default class LogInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.form;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogIn = this.demoLogIn.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  demoLogIn() {
    this.props.processForm({
      email: 'demo_user@email.com',
      password: 'starwars'
    });
  }

  update(field) {
    return (e) => {
      this.setState ({
        [field]: e.currentTarget.value
      });
    };
  }

  renderErrors() {
    if (this.props.formType === this.props.logInErr.type) {
      return (
        <ul>
          { this.props.logInErr.errors.map( (error, idx) => {
              return <li
                key={`error-${idx}`}>{error}</li>;
            }) }
        </ul>
      );
    }
  }

  render() {
    return (
      <div className='login-form-box'>
        <label className='session-label'>Login</label>
        <form onSubmit={ this.handleSubmit }>
          <input
            type='text'
            placeholder='Email'
            value={this.state.username}
            onChange={this.update('email')}></input><br/><br/>
          <input
            type='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.update('password')}></input><br/>

          <button className='login-button'>Login</button><br/>
        </form>
        <button
          onClick={ () => this.demoLogIn() }
          className='demo-user-button'>
          Demo
        </button>
        <div className='login-errors-list'>
          { this.renderErrors() }
        </div>
      </div>
    );
  }
}
