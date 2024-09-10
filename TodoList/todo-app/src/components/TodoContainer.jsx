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

  const updateTodo = (todoNo, updatedName) => {
    setTodoList(todoList.map(todo =>
      todo.no === todoNo ? { ...todo, name: updatedName } : todo
    ));
  };

  const deleteTodo = (no) => {
    setTodoList(todoList.filter(todo => todo.no !== no));
  };

  const clearAllTodos = () => {
    setTodoList([]);
  };

  const completeAllTodos = () => {
    const newStatus = !allChecked ? 1 : 0;
    setAllChecked(!allChecked);
    setTodoList(todoList.map(todo => ({
      ...todo,
      status: newStatus
    })));
  };

  const handleCheckboxChange = (todoNo, newStatus) => {
    setTodoList(todoList.map(todo => 
      todo.no === todoNo ? { ...todo, status: newStatus } : todo
    ));
    // 개별 체크박스 상태가 변경되면 전체 체크 상태를 해제
    if (allChecked) setAllChecked(false);
  };
  

  return (
    <div className="container">
        <TodoHeader/>
        <TodoInput newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo}/>
        <TodoList todoList={todoList} onDelete={deleteTodo} handleCheckboxChange={handleCheckboxChange}
        updateTodo={updateTodo}/>
        <TodoFooter onClearAll={clearAllTodos} onCompleteAll={completeAllTodos} />
    </div>
  )
}

export default TodoContainer