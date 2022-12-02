import React from 'react'
import Todo from './todo';
import style from "./styles/todos.module.css"

const Todos = (props) => {

    

    return (
        <section className={style.todos}>
            {props.todos.map((todo) => <Todo key={todo.id} todo={todo.todo} id={todo.id} onRemove={ props.onRemove } />)}
        </section>
  )
}

export default Todos