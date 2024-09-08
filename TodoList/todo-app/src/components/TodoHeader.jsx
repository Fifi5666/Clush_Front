import React from 'react';
import { Typography } from 'antd';
import '../App.css';


const { Title } = Typography;

const TodoHeader = () => {
  return (
    <div className="header-background">
      <Title level={1} style={{ color: 'white' }} className='header-title'>To Do List</Title>
    </div>
  );
}

export default TodoHeader;
