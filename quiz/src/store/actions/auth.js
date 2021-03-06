import axios from 'axios';
import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionTypes';

export function auth(email, password, isLogin) {
    return async dispatch => {
        const authData = {
            email,
            password,
            returnSecureToken: true,
        };

        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAP1VZN1fKWhEh-eeWISrOeBpK7oaOVKCs"

        if (isLogin) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAP1VZN1fKWhEh-eeWISrOeBpK7oaOVKCs"
        }

        const response = await axios.post(url, authData);

        const data = response.data
        // define how many seconds we will have our token open
        const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)

        // define GLOBAL variable to save all necessary data
        localStorage.setItem('token', data.idToken)
        localStorage.setItem('userId', data.localId)
        localStorage.setItem('expirationDate', expirationDate)

        dispatch(authSuccess(data.idToken))
        dispatch(autoLogout(data.expiresIn))
    }
}

export function autoLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)

    }
}

export function logout() {
    // clean up all local storage
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')
    return {
        type: AUTH_LOGOUT
    }
}

// this function will support our session if with have valid data in localStorage
//  it means that if we login in system and closed app, after opening
// we should still be login
export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))

            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                dispatch(authSuccess(token))
                dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }

}

export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}