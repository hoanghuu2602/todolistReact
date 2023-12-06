import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useDispatch,useSelector } from 'react-redux';
import {v4 as uuidv4} from 'uuid'
import Todo from '../Todo';
import { addTodo } from '../../redux/actions';
import { useState } from 'react';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import {todosRemainingSelector } from "../../redux/selectors"


export default function TodoList() {
const [todoName,setTodoName] =useState('')
const [priority,setPriority] =useState('Medium')
 

  const dispatch = useDispatch();

  const handelAddButoon = (e) => {
    
    dispatch(addTodo({
      id:uuidv4(),
      name: todoName,
      priority: priority,
      completed: false
    }))

    setPriority('Medium');
    setTodoName('')

  }

  const todolist = useSelector(todosRemainingSelector)
  console.log('first todolist>>>', todolist)
  // const searchText = useSelector(searchSelector)
  // console.log('searchText >>>:', searchText)
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todolist.map((item,index) => (
          <Todo
            key={`row-${index}`}
            id = {item.id}
            name={item.name}
            completed={item.completed}
            prioriry={item.priority} 
            
            />
        ))}
       
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input 
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
          <Select defaultValue={priority}
            value={priority}
          onChange={(value)=>setPriority(value)}
          >
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

          <Button type='primary'
          onClick={handelAddButoon}
          >
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
