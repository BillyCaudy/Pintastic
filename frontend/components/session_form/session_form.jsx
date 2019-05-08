import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
  }

  componentDidMount() {
    return this.props.clearErrors();
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  loginGuest(e) {
    e.preventDefault();
    const guest = { username: "guest", password: "password" };
    this.props.processGuest(guest).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <div>
        {this.props.errors.length > 0 ? <br /> : <div>&nbsp;</div>}
        {this.props.errors.map((error, i) => (
          <div className="print-errors">
            {error}
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h1>  📌 <br/>
              Welcome to Pintastic
            </h1>
            Find new ideas to try
            <div onClick={this.props.closeModal} className="close-x">✖️</div>
            {this.renderErrors()}
            <br />
            <div className="login-form">
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username or email"
              />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
              <input className="session-submit" type="submit" 
                value={this.props.formType === 'login' ? "Log in" : "Sign up"} 
              />
              <div className="or">OR</div>
              <button className="guest-submit" onClick={this.loginGuest}>Continue as Guest</button>
            </div>
            <br />
            {this.props.otherForm}
            <br />
          </form>
        </div>
    );
  }
}

export default withRouter(SessionForm);
