import React from 'react'
import { useState } from 'react'

export default function TodoInput(props) {
 const {handleAddTodos,todoValue,setTodoValue}=props

  return (
<header>
    <input value={todoValue} onChange={(e)=>{
    setTodoValue(e.target.value)
    }} placeholder='ENTER TODO ...' />

    <button onClick={()=>{
        handleAddTodos(todoValue)
        setTodoValue('')
      }
    }> ADD</button>
</header>
  )
}
