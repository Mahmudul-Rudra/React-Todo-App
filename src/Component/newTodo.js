import React,{ useState } from 'react'
import style from "./styles/newTodo.module.css"


const NewTodo = (props) => {
    const [todo, setTodo] = useState({
        title: "",
        desc: ""
    })

    const { title, desc } = todo
    


    const handleChange = (e) => {
        const name = e.target.name
        setTodo((oldTodo) => {
            return {...oldTodo, [name]:e.target.value}
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        props.onAddTodo(todo)
        setTodo({title:"", desc:""})
    }
    return (
        
        <form onSubmit={handleSubmit} className={style.form}>
            <div className={style['form-field']}>
                <label htmlFor='title'>Activity:</label>
                <input type="text" name="title" id="title" onChange={handleChange} value={title} />
            </div>

            <div className={style['form-field']}>
                <label>Activity Details:</label>
                <textarea type="text" name="desc" id="desc" onChange={handleChange} value={desc} />
            </div>

            <button>Add Activity</button>
        </form>
        
  )
}

export default NewTodo