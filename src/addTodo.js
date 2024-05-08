import React from 'react';
import { FaPlus } from 'react-icons/fa'


function addTodo({ newTitle, newSubTitle, setTitle, setSubTitle, handelSubmit }) {
    return (
        <form className='form' onSubmit={handelSubmit}>
            <lable htmlFor="addTodoTitle" className="addTodo-lable"    >Title :</lable>

            <input autoFocus id='addTodoTitle' placeholder='Enter Title' value={newTitle} onChange={(e) => { setTitle(e.target.value) }} type="text" />

            <lable htmlFor="addTodoSubTitle" className="addTodo-lable"  >Sub-title: </lable>

            <input autoFocus id='addTodoSubTitle' placeholder='Enter subtitle' value={newSubTitle} onChange={(e) => { setSubTitle(e.target.value) }}  type="text" />

            <button type='submit'><FaPlus size={22} /> Add To List </button>
        </form>
    )
}

export default addTodo;