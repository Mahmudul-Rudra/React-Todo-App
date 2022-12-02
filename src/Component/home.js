import React, { useState } from 'react'
import NewTodo from './newTodo'
import Todos from './todos'
import {v4 as uuidv4} from "uuid"
import style from './styles/home.module.css'

const Home = () => {
    const [todos, setTodos] = useState([])

    const handleTodo = (todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos, {id:uuidv4(), todo}]
        })
    }



    const handleRemoveTodo = (id) => {
        setTodos((prevTodos) => {
            const filterTodo = prevTodos.filter((todo) => todo.id !== id)
            return filterTodo
        })
    }
    return (
        <div className={style.container}>
            <h1 className={style.title}>Todo App</h1>
            <NewTodo onAddTodo={handleTodo} />
            <Todos todos={todos} onRemove={ handleRemoveTodo } />
        </div>
  )
}

export default Home