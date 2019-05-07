import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './actions/session_actions'
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore();
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    }
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});