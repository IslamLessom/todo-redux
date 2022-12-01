import { TODO_TEXT } from '../types/types'

const initialState = {
    todo: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_TEXT:
            return {
                ...state,
                todo: [...state.todo, action.data]
            }
        default:
            return state
    }
}
