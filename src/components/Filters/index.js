import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import {useDispatch} from "react-redux"
import filterSlice from './filterSlice'

const { Search } = Input;



export default function Filters() {
const [search,setSearch] =useState('')
  const [filterStatus, setFilterStatus] = useState('All')
  const [filterPriority, setFilterPriority] = useState([])

  const dispatch = useDispatch()
  const handleSearch = (e) => {
    setSearch(e.target.value)
    dispatch(filterSlice.actions.searchFilter(e.target.value))
}
  const handleStatusChange = (e) => {
    setFilterStatus(e.target.value)
    dispatch(filterSlice.actions.statusFilterChange(e.target.value))
   
}
  const handlePriorityChange = (value) => {
    setFilterPriority(value)
    dispatch(filterSlice.actions.prioritiesFilterChange(value))
    // console.log('first priority>>>>', value)
}

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text'
          value={search}
        onChange={handleSearch}

        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group
          value={filterStatus}
          onChange={(e)=>handleStatusChange(e)}
        >
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={filterPriority}
          onChange={(e)=>handlePriorityChange(e)}
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
      </Col>
    </Row>
  );
}
