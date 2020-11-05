import React, { Component } from 'react'
// 引入antDesign 
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Input, Button, List } from 'antd';
// 引入store
import store from './store'

// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
// ];

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this);
        console.log(this.state)
    }
    render() {
        return (
            <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                <Input
                    value={this.state.inputValue}
                    placeholder="請輸入資料"
                    style={{ width: '300px', marginRight: '10px' }}
                    onChange={this.handleInputChange}
                />
                <Button type="primary">提交</Button>
                <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => <List.Item>{item}</List.Item>}
                    style={{ marginTop: '10px', width: '300px' }}
                />
            </div>

        )
    }
    handleInputChange(e) {
        console.log(e.target.value)
        const action = {
            type: 'changeData',
            value: e.target.value,
        }
        // store.dispatch(action)
        store.dispatch({
            type: 'changeData',
            value: e.target.value
        })
    }
}
export default TodoList