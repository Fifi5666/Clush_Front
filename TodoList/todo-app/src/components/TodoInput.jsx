import React from 'react'

const TodoInput = ( {newTodo, setNewTodo, addTodo} ) => {
  const onSubmit = (e) => {
    e.preventDefault();  // 기본 폼 제출 동작을 막음
    addTodo();  // 할 일을 추가하는 함수 호출
  }
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input placeholder='할 일' className="input" 
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}/>
        <button type='submit' className="btn" onClick={addTodo}>+</button>
      </form>
    </div>
  )
}

export default TodoInput