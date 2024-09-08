import React, { useState } from 'react';
import { Modal, Input } from 'antd';

const TodoInput = ({ newTodo, setNewTodo, addTodo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    addTodo();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='btn-container'>
      <button className='btn' onClick={showModal}>
        +++
      </button>

      <Modal
        title="할 일 추가"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="추가"
        cancelText="취소"
        centered  // 이 옵션으로 모달을 중앙에 배치
        style={{ top: 0 }}  // 화면에 더 정확히 중앙에 오도록 조정 가능
      >
        <Input 
          placeholder="할 일" 
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)} 
        />
      </Modal>
    </div>
  );
}

export default TodoInput;
