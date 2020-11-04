import React, { Component } from 'react'
// 引入antDesign 
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Input, Button, List } from 'antd';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class TodoList extends Component {
    render() {
        return (
            <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                <Input placeholder="請輸入資料" style={{ width: '300px', marginRight: '10px' }} />
                <Button type="primary">提交</Button>
                <List
                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
                    style={{ marginTop: '10px', width: '300px' }}
                />
            </div>

        )
    }
}
export default TodoList