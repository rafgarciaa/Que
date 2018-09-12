import React from 'react';

export default class SignUpForm extends React.Component {
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
      <div className='background-container'>
        <div className='session-form-container'>

          <form onSubmit={ this.handleSubmit }>
            <label>First Name:<br/>
              <input
                type='text'
                value={this.state.first_name}
                onChange={this.update('first_name')}/>
            </label><br/>
            <label>Last Name:<br/>
              <input
                type='text'
                value={this.state.last_name}
                onChange={this.update('last_name')}/>
            </label><br/>
            <label>Email:<br/>
              <input
                type='text'
                value={this.state.username}
                onChange={this.update('email')}/>
            </label><br/>
            <label>Password:<br/>
              <input
                type='password'
                value={this.state.password}
                onChange={this.update('password')}/>
            </label>

            <button>{this.props.formType}</button>
          </form>
        </div>
      </div>
    );
  }
}