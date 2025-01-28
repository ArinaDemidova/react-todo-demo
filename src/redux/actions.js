import {ADD_TODO, DELETE_TODO, READ_TODO, UPDATE_TODO} from "./actionTypes.js";

export const addTodo = (text) => ({
    type : ADD_TODO,
    payload : {text}
})

export const deleteTodo = (id) => ({
    type : DELETE_TODO,
    payload : {id}
})

export const updateTodo = (id, text) => ({
    type : UPDATE_TODO,
    payload : {id,text}
})

export const readTodo = (id) => ({
    type : READ_TODO,
    payload : {id}
})