// để lấy dữ liệu trong kho chung ta dùng userSelector
import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/action';
// để tạo ra cái id duy nhất ta phải download a library uuid
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react';
import { todoListSelector, searchTextSelector, todoRemainingSelector } from '../../redux/selector';

export default function TodoList() {
  // để lưu chữ được dữ liệu thông tin người  dùng nhập từ input thì ta phải lưu chữ chúng trong một state
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('Medium');

  const dispatch = useDispatch();
  // dispatch to bắn đi một function
  const todoList = useSelector(todoRemainingSelector);
  // useselector sẽ nhận vào một cái selector(như là một cái function thôi nhaa)

  //lay du lieu cua kho ra ben ngoai
  // const seachText = useSelector(searchTextSelector)


  // console.log({todoList, seachText});

  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false
      })
    );
    setTodoName('')
    setPriority('Medium')
  }

  const handleInputChange = (e) => {
    console.log('handleInputChange', e.target.value)
    setTodoName(e.target.value)
  }
  const handlerPriorityChange = (value) => {
    setPriority(value)
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {todoList.map(todo =>  <Todo key={todo.id} id={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed} />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange}/>
          <Select defaultValue="Medium" value={priority} onChange={handlerPriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
