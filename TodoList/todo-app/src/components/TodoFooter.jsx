import React from 'react';

const TodoFooter = ({ onClearAll, onCompleteAll }) => {
  return (
    <div className='footer'>
      <div className="item">
        <button className="btn-f" onClick={onClearAll}>전체 삭제</button>
      </div>
      <div className="item">
        <button className="btn-f" onClick={onCompleteAll}>전체 완료</button>
      </div>
    </div>
  );
};

export default TodoFooter;
