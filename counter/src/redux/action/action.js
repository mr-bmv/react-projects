import { ADD, SUB, ADD_NUMBER, ADD2 } from "./actionTypes"

//  collection of all action creators which could be used in application
export const add = () => { return { type: ADD } }
export const sub = () => { return { type: SUB } }
export const addNumber = (number) => { return { type: ADD_NUMBER, payload: number } }
export const add2 = (number) => { return { type: ADD2, payload: number } }