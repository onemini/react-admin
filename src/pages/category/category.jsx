import React, {Component} from 'react'
import { Select } from 'antd';

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}
export default class Category extends Component {
  render() {
    return (
      <Select
    showSearch
    style={{ width: 400 }}
    placeholder="Select a IP"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">192.168.0.10</Option>
    <Option value="lucy">192.168.0.10</Option>
    <Option value="tom">192.168.0.10</Option>
  </Select>
    )
  }
}