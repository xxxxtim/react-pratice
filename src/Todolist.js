import React, { Component } from 'react'
// 引入antDesign 
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Input, Button, List } from 'antd';
// 引入store
import store from './store'
// 引入actionCreator
import { changeDataAction, handleBtnClickAction, handleItemDeleteAction } from './store/actionCreator'

//  使用redux connect
import { connect } from 'react-redux'

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
        // 監聽Store中state的資料，如果發生改變 則觸發handleStoreChange
        store.subscribe(this.handleStoreChange)
        console.log('this.state', this.state)
    }
    render() {
        return (
            <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                <Input
                    // value={this.state.inputValue}
                    // use react-redux
                    value={this.props.inputValue}
                    placeholder="請輸入資料"
                    style={{ width: '300px', marginRight: '10px' }}
                    // onChange={this.handleInputChange}
                    onChange={this.props.changeInputValue}

                />
                <Button type="primary"
                    // onClick={this.handleBtnClick}
                    onClick={this.props.changeBtnClick}
                >提交</Button>
                <List
                    bordered
                    // dataSource={this.state.list}
                    // use react-redux
                    dataSource={this.props.list}
                    renderItem={
                        (item, index) => (
                            // 寫法1
                            // <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)
                            // 寫法2
                            // <List.Item onClick={() => this.handleItemDelete(index)}>{item}</List.Item>)
                            <List.Item onClick={() => this.props.changeItemDelete(index)}>{item}</List.Item>)

                    }
                    style={{ marginTop: '10px', width: '300px' }}
                />
            </div>

        )
    }
    handleInputChange(e) {
        console.log(e.target.value)
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

const mapState2Props = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
// store.props.dispatch
const mapDispatch2Props = (dispatch) => {
    return {
        changeInputValue(e) {
            dispatch(changeDataAction(e.target.value))

        },
        changeBtnClick() {
            dispatch(handleBtnClickAction())
        },
        changeItemDelete(index) {
            dispatch(handleItemDeleteAction(index))
        }
    }
}
// export default TodoList

// redux 
export default connect(mapState2Props, mapDispatch2Props)(TodoList)