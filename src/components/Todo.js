import React from 'react'
//COMPONENTS
import TodoText from './TodoText'

//REACT HOOKS
import { useState } from 'react'

//REDUX HOOKS
import { useDispatch, useSelector } from 'react-redux'

//REDUX ACTON
import { todoText } from '../redux/action/actionTodo'

//styled-components
import { ContainerDiv, TextContentBig, InputContent } from './Todo.element'



function Todo() {
    const [textTodo, setTextTodo] = useState('')

    const dispatch = useDispatch()
    const todoTexts = useSelector(state => {
        const { todoReducer } = state
        return todoReducer.todo
    })

    const handleInput = (e) => {
        setTextTodo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(todoText(textTodo))
    }

    return (
        <ContainerDiv>
            <TextContentBig>Write down your tasks</TextContentBig>
            <form onSubmit={handleSubmit}>
                <InputContent type='text' value={textTodo} onChange={handleInput} placeholder='write a task' />
            </form>
            {!!todoTexts.length && todoTexts.map((res, index) => {
                return <TodoText key={index} data={res} />
            })}
        </ContainerDiv>
    )
}

export default Todo