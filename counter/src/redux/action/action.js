import { ADD, SUB, ADD_NUMBER, ADD2 } from "./actionTypes"

//  collection of all action creators which could be used in application
export const add = () => { return { type: ADD } }
export const sub = () => { return { type: SUB } }
export const addNumber = (number) => { return { type: ADD_NUMBER, payload: number } }
export const add2 = (number) => { return { type: ADD2, payload: number } }

//  because we have redux thunk lib we can do async function by this way
export const asyncAdd = (number) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(addNumber(number))
        }, 3000)
    }
}