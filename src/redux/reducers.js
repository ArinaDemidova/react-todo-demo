import {ADD_TODO, READ_TODO, UPDATE_TODO, DELETE_TODO} from "./actionTypes.js";

const initialState = {todos : JSON.parse(localStorage.getItem('todos')) || []};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO :
            return {
                todos: [...state.todos, action.payload],
                currentTodo : state.currentTodo
            }

        case DELETE_TODO :
            return {
                todos: state.todos.filter((todo, index) => index !== action.payload.id),
                currentTodo : state.currentTodo
            }

        case UPDATE_TODO :

            return {
                todos: state.todos.map((todo, index) => index === action.payload.id ? {text: action.payload.text} : todo),
                currentTodo : state.currentTodo
            }

        case READ_TODO :

            return {
                todos: state.todos,
                currentTodo : action.payload
            }

        default:
            return state;
    }
}

export default todoReducer;