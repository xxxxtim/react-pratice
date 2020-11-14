import React, { Component } from 'react'
// 引入antDesign 
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Input, Button, List } from 'antd';
// 引入actionCreator
import { changeDataAction, handleBtnClickAction, handleItemDeleteAction } from './store/actionCreator'
//  使用redux connect
import { connect } from 'react-redux'

class TodoList extends Component {

  render() {
    return (
      <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <Input
          // use react-redux
          value={this.props.inputValue}
          placeholder="請輸入資料"
          style={{ width: '300px', marginRight: '10px' }}
          onChange={this.props.changeInputValue}

        />
        <Button type="primary"
          onClick={this.props.changeBtnClick}
        >提交</Button>
        <List
          bordered
          dataSource={this.props.list}
          renderItem={
            (item, index) => (
              <List.Item onClick={() => this.props.changeItemDelete(index)}>{item}</List.Item>)

          }
          style={{ marginTop: '10px', width: '300px' }}
        />
      </div>

    )
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

// redux 
// connect(1,2)(component name)
// 1,mapState2Props: component 可以取得state
// 2,mapDispatch2Props : component 可以 dispatch(action)
export default connect(mapState2Props, mapDispatch2Props)(TodoList)