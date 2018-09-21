import React from 'react';
import SignUpFormContainer from './signup_form_container';
import LogInFormContainer from './login_form_container';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleSignUp = this.toggleSignUp.bind(this);
    this.state = {
      form: this.props.form,
      showSignUp: false,
    };
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

  toggleSignUp() {
    if (this.state.showSignUp === false) {
      $('.signup-form-toggle').addClass('signup-form-toggle-hide');
      $('.signup-form-container').addClass('signup-form-container-show');
    } else {
      $('.signup-form-toggle').removeClass('signup-form-toggle-hide');
      $('.signup-form-container').removeClass('signup-form-container-show');
    }
    this.setState({ showSignUp: !this.state.showSignUp });
  }

  render() {
    return (
      <div className='background-container'>
        <div className='session-form-container'>
          <h1 className='main-logo'>Que?</h1>
          <p className='tag-description'>
            A place to share knowledge and better understand the world</p>

          <div className='form-container'>
            <div className='signup-form-toggle'>
              <a onClick={ this.toggleSignUp }>
                Continue With Email.
              </a> By signing up you indicate that you
              have read and agree to Que's Terms of Service and
              Privacy Policy.
            </div>
            <div className='signup-form-container'>

              <SignUpFormContainer toggleSignUp={ this.toggleSignUp }/>
            </div>
            <div className="login-form-container">

              <LogInFormContainer />
            </div>
          </div>

          <div className='footer-nav'>
            Que? by Rafael Garcia, inspired by Quora.
            Check me out on
          <a className='footer-link' href='https://github.com/rafgarciaa/'>
            <i className="fab fa-github"></i>
            Github
          </a>
           &
          <a className='footer-link' href='https://www.linkedin.com/in/raf-garcia-engr/'>
            <i className="fab fa-linkedin"></i>
            LinkedIn
          </a>

          </div>
        </div>
      </div>
    );
  }
}
