import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ( {todoList, onDelete, handleCheckboxChange, updateTodo} ) => {
  // const todoList = [
  //   {no : 1, name: '할 일1', status: 0},
  //   {no : 2, name: '할 일2', status: 0},
  //   {no : 3, name: '할 일3', status: 0},
  //   {no : 4, name: '할 일4', status: 0},
  //   {no : 5, name: '할 일5', status: 0},
  //   {no : 6, name: '할 일6', status: 0},
  //   {no : 7, name: '할 일7', status: 0},
  //   {no : 8, name: '할 일8', status: 0},
  //   {no : 9, name: '할 일9', status: 0},
  //   {no : 10, name: '할 일10', status: 0}
  // ]
  return (
    <ul className="todoList">
      {todoList.map( (todo) => {  // 중괄호는 리턴, 소괄호로 쓰면 리턴 생략 가능
        return <TodoItem
          key={todo.no}
          todo={todo}
          onDelete={onDelete}
          handleCheckboxChange={handleCheckboxChange}
          updateTodo={updateTodo}/>
      })}
    </ul>
  )
}

export default TodoList