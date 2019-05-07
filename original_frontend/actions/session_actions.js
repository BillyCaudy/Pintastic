import * as APIUtil from '../util/session_api_util';

export const CURRENT_USER = 'CURRENT_USER';
export const LOGOUT = 'LOGOUT';
export const SESSION_ERRORS = 'SESSION_ERRORS';

const getUser = currentUser => ({
    type: CURRENT_USER,
    currentUser
});

const endSession = () => ({
    type: LOGOUT
})

const getErrors = errors => ({
    type: SESSION_ERRORS,
    errors
});

export const signup = user => dispatch => (
    APIUtil.signup(user).then( 
        user => dispatch(getUser(user)),
        errorPromise => dispatch(getErrors(errorPromise.resJSON)) 
    )
);

export const login = user => dispatch => (
    APIUtil.login(user).then( user => dispatch(getUser(user)) )  
);

export const logout = () => dispatch => (
    APIUtil.logout().then( () => dispatch(endSession()) )
);