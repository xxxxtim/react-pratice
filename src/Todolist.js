import React, { Component } from 'react'
// 引入antDesign 
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
// 引入store
import store from './store'
// 引入actionCreator
import {
    changeDataAction,
    handleBtnClickAction,
    handleItemDeleteAction,
    initListAction,
    getInitList
} from './store/actionCreator'
// 引入UI component 
import TodoListUI from './store/TodoListUI'
// 引入axios
import axios from 'axios'
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
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        // 監聽Store中state的資料，如果發生改變 則觸發handleStoreChange
        store.subscribe(this.handleStoreChange)
        console.log('this.state', this.state)
    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                list={this.state.list}
                handleItemDelete={this.handleItemDelete}
            />

        )
    }
    componentDidMount() {
        // try {
        //     const response = await axios.get('https://my-json-server.typicode.com/varbark/fake_json_api/cities')
        //     // console.log(response.data)
        //     store.dispatch(initListAction(response.data))
        // } catch (error) {
        //     console.log(error)
        // }
        console.log(getInitList())
        store.dispatch(getInitList())

    }
    handleInputChange(e) {
        console.log(e.target.value)
        // store.dispatch(action)
        // store.dispatch({
        //     type: 'changeData',
        //     value: e.target.value
        // })

        //使用actionCreators 
        store.dispatch(changeDataAction(e.target.value))
    }
    handleStoreChange() {
        this.setState(
            store.getState()
        )
    }
    handleBtnClick() {
        // store.dispatch({
        //     type: 'addInputValue',
        // })
        store.dispatch(handleBtnClickAction())
    }
    handleItemDelete(index) {
        // alert(index)
        // store.dispatch({
        //     type: 'deleteItem',
        //     index
        // })
        store.dispatch(handleItemDeleteAction(index))
    }
}
export default TodoList