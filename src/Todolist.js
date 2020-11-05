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
        // 獲取state的資料
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this)
        // 監聽state的資料，如果發生改變 則觸發handleStoreChange
        store.subscribe(this.handleStoreChange)
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
                <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
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
    handleStoreChange() {
        this.setState(
            store.getState()
        )
    }
    handleBtnClick() {
        store.dispatch({
            type: 'addInputValue',
        })
    }
}
export default TodoList