import { CURRENT_USER, LOGOUT } from '../actions/session_actions'
import merge from 'lodash/merge';

const _nullState = Object.freeze({ 
    id: null 
}) 

const sessionReducer = ( stateIn = _nullState, action ) => {
    Object.freeze(stateIn);
    let stateOut = merge({},stateIn)
    switch(action.type) {
        case CURRENT_USER:
            stateOut = merge(stateOut,{ id: action.currentUser.id })
            break;  
        case LOGOUT:
            stateOut = merge({},_nullState)
            break;
    }
    return stateOut;
};

export default sessionReducer;