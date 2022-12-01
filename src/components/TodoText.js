import React, { useEffect, useState } from 'react'
import { Conclusion, TextContentSmall } from './Todo.element'


function TodoText({data}) {
    const [ texts, setTexts] = useState('')
    const {text} = data

    useEffect(() => {
        if(text) {
            setTexts(text)
        }
    }, [text])
    
    return (
        <Conclusion>
            <TextContentSmall>{texts}</TextContentSmall>
        </Conclusion>
    )
}

export default TodoText