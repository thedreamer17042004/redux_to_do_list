import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchFilterChange, statusFilterChange, priorityFilterChange } from '../../redux/action';

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();
  const [searchText, setsearchText] = useState('');
  const [filtersStatus, setfiltersStatus] = useState('All');
  const [filterPriorities, setFilterPriorities] = useState([])


  const handlerSearchTextChange = (e) => {
    setsearchText(e.target.value);
    dispatch(searchFilterChange(e.target.value));
  }
  const handleStatusChange = (e) => {
    setfiltersStatus(e.target.value);
    dispatch(statusFilterChange(e.target.value));
  }
  const handlePriorityChange = (value) => {
    setFilterPriorities(value);
    //prop là value vì nó chả về một mảng nhiều items
    dispatch(priorityFilterChange(value))
    //priorityFilterChange là một action creator nên ta phải thực thi đẻ nó trả về cho ta một action object
  }
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchText} onChange={handlerSearchTextChange} />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filtersStatus} onChange={handleStatusChange}>
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
          value={filterPriorities}
          onChange={handlePriorityChange}
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
