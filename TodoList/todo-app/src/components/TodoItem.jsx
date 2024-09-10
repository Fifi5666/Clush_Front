import React, { useState } from 'react';
import { Modal, Input } from 'antd';

const TodoItem = ({ todo, onDelete, handleCheckboxChange, updateTodo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedName, setUpdatedName] = useState(todo.name);

  const updateModal = () => {
    setIsModalOpen(true);
  };

  const handleUpdateOk = () => {
    if (updatedName.trim()) {
      updateModal(todo.no, updatedName);
      updateTodo(todo.no, updatedName);
      setIsModalOpen(false);
    }
  };

  const handleUpdateCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li className='todoItem'>
        <div className="item">
          <input type="checkbox" id={todo.no} checked={todo.status === 1}
          onChange={() => handleCheckboxChange(todo.no, todo.status === 0 ? 1 : 0)} />
          <label htmlFor={todo.no}></label>
          <span onClick={updateModal} className='todoName'>{todo.name}</span>
        </div>
        <div className="item">
          <button className="btn" onClick={() => onDelete(todo.no)}>- - -</button>
        </div>
      </li>
      <Modal
        title="할 일 수정"
        open={isModalOpen}
        onOk={handleUpdateOk}
        onCancel={handleUpdateCancel}
        okText="수정"
        cancelText="취소"
        centered
      >
        <Input
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
        />
      </Modal>
    </>
  );
};

export default TodoItem;
