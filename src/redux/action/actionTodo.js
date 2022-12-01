import { TODO_TEXT } from "../types/types"

export function todoText(text, id) {
    return {
        type: TODO_TEXT,
        data: {text}
    }
}