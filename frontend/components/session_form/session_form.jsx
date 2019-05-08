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
    const guest = { username: "guest", password: "passwrod" };
    this.props.processForm(guest).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h1>  📌 <br/>
              Welcome to Pintastic
            </h1>
            <br/>
            Find new ideas to try
            <br />
            <div onClick={this.props.closeModal} className="close-x">✖️</div>
            {this.renderErrors()}
            <div className="login-form">
              <br/>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  placeholder="Email"
                />
              <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="Password"
                />
              <br/>
              <input className="session-submit" type="submit" value={this.props.formType} />
              
              
            </div>
            <br />
            OR
            <br />
            <button className="guest-submit" onClick={this.loginGuest}>Continue as Guest</button>
            <br />

            {this.props.otherForm}
            <br />
          </form>
        </div>
    );
  }
}

export default withRouter(SessionForm);
