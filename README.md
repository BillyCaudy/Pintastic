# Pintastic

<img src="https://github.com/BillyCaudy/Pintastic/blob/master/Pintastic_screenshot_signup.png" />

Pintastic, a Pinterest clone, is a social media application where users share pictures (pins) and groups of pics (boards). Users can add pins to their boards by uploading photos, linking to image urls, or selecting pins from other boards. Users can follow/unfollow other users' boards.

## [Live site](https://pintasty.herokuapp.com/#/)

Pintastic is hosted on Heroku [here](https://pintasty.herokuapp.com/#/)

## Technologies

- Rails
- React/Redux
- Postgres
- Ajax
- jBuilder
- npm
- Amazon Web Services

## Languages

- Ruby version 5.2
- JavaScript

## Challenges

One challenge was making the button in the upper left display the desired text ("Sign up" if viewing "Log in" page and vice versa).
```js
// in modal.jsx
class Modal extends React.Component {
  //...
  switchModal(type) {
    return (e) => {
      e.stopPropagation();
      this.props.openModal(type);
    }
  }
  
  render() {
    let { modal, closeModal, openModal } = this.props;
    
    //...
    
    let type = (modal === 'login' ? 'signup' : 'login');
    let typeString = (type === 'signup' ? 'Sign up' : 'Log in')
    
    return (
      <div className="modal-background" onClick={closeModal}>
        <button className="top-button" onClick={
          this.switchModal(type)
        }>&nbsp;&nbsp;{typeString}&nbsp;&nbsp;</button>
        ...
      </div>
    );
  }
  //...
}
```
Another challenge was getting the Guest Log in to work from the Sign up page (Guest User must Login).
```js
// in session_form.jsx
  loginGuest(e) {
    e.preventDefault();
    const guest = { username: "guest", password: "password" };
    this.props.processGuest(guest).then(this.props.closeModal);
  }
// in signup_form_container.jsx
const mapDispatchToProps = dispatch => {
  return {
    //...
    processGuest: (user) => dispatch(login(user)),
    //...
  };
};
```