import React, { Component } from 'react'
// 引入props型別驗證
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        const { content } = this.props;
        return (
            // 接收父層傳過來的值
            // <div onClick={this.handleClick.bind(this)}>{this.props.content}</div>
            <div
                onClick={this.handleClick}
            >
                {/* {this.props.content} */}
                {content}
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
// 進行型別驗證
TodoItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number,

}
export default TodoItem