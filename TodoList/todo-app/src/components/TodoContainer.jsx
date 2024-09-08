import React, { useState } from 'react'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

const TodoContainer = () => {

  // 리스트 상태(state)
  const [todoList, setTodoList] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [allChecked, setAllChecked] = useState(false);

  const addTodo = () => {
    if (newTodo.trim()) {  // newTodo가 비어 있지 않다면
      const nextNo = todoList.length > 0 ? todoList[todoList.length - 1].no + 1 : 1;
      setTodoList([...todoList, { no: nextNo, name: newTodo, status: 0 }]);
      setNewTodo('');  // 입력 필드를 비움
    }
  };

  const deleteTodo = (todoNo) => {
    setTodoList(todoList.filter(todo => todo.no !== todoNo));
  };

  const clearAllTodos = () => {
    setTodoList([]);
  };

  const completeAllTodos = () => {
    setAllChecked(!allChecked);
  };
  

  return (
    <div className="container">
        <TodoHeader/>
        <TodoInput newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo}/>
        <TodoList todoList={todoList} onDelete={deleteTodo} allChecked={allChecked} />
        <TodoFooter onClearAll={clearAllTodos} onCompleteAll={completeAllTodos} />
    </div>
  )
}

export default TodoContainer