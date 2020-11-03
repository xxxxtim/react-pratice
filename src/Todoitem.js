import React, { Component } from 'react'
// 引入props型別驗證
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }
    componentWillUmount() {
        console.log('componentWillUmount')
    }
    render() {
        const { content, test } = this.props;
        return (
            // 接收父層傳過來的值
            // <div onClick={this.handleClick.bind(this)}>{this.props.content}</div>
            <div
                onClick={this.handleClick}
            >
                {/* {this.props.content} */}
                {test}-{content}
            </div>
        )
    }
    handleClick() {
        const { deleteItem, index } = this.props
        console.log('component alert');
        console.log(this.props.index)
        // 調用父層的method和參數
        // this.props.deleteItem(this.props.index)
        deleteItem(index)
    }
}
// 進行父層傳值過來的型別驗證
TodoItem.propTypes = {
    // isRequired:表示一定要父層傳遞參數，如果沒有傳遞參數則會報錯
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number,
}
// 如果父層沒有傳遞參數，則會給傳遞參數一個預設值
TodoItem.defaultProps = {
    test: 'hello'
}
export default TodoItem