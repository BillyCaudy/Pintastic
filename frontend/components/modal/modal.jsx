import React from 'react';
import { closeModal, openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
// import { Link } from 'react-router-dom';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.switchModal = this.switchModal.bind(this);
  }
  
  switchModal(type) {
    return (e) => {
      e.stopPropagation();
      this.props.openModal(type);
    }
  }
  
  render() {
    let { modal, closeModal, openModal } = this.props;
    
    if (!modal) {
      return null;
    }
    let component;
    switch (modal) {
      case 'login':
        component = <LoginFormContainer />;
        break;
      case 'signup':
        component = <SignupFormContainer />;
        break;
      default:
        return null;
    }
    
    let type = (modal === 'login' ? 'signup' : 'login');
    let typeString = (type === 'signup' ? 'Sign up' : 'Log in')
    
    return (
      <div className="modal-background" onClick={closeModal}>
        <button className="top-button" onClick={
          this.switchModal(type)
        }>&nbsp;&nbsp;{typeString}&nbsp;&nbsp;</button>
        <div className="auth-form" onClick={e => e.stopPropagation()}>
          {component}
        </div>
        <div className="bottom-links" onClick={e => e.stopPropagation()}>
          Bottom Links&nbsp;&nbsp;&nbsp;&nbsp;
          Don't Click Me Bruh
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: (type) => dispatch(openModal(type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
