// Have initial state for when state is not ready to be passed
const initState = {
    authError: null,
    authErrorDetails: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('Error');
            return {
                ...state,
                authError: "Oh no... We can't find your credentials anywhere.",
                authErrorDetails: action.err
            }
        case 'LOGIN_SUCCESS':
            console.log('Login success');
            return {
                ...state,
                authError: null,
                authErrorDetails: null
            };
        case 'SIGNOUT_SUCCESS':
            console.log('Signout success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log("Signup success");
            return {
                ...state,
                authError: null,
                authErrorDetails: null
            };
        case 'SIGNUP_ERROR':
            console.log("Signup error", action.err);
            return {
                ...state,
                authError: action.err.message,
                authErrorDetails: action.err
            }
        default:
            return state;
    }
}

export default authReducer;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
