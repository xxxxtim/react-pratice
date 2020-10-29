import React, { Component } from 'react'
class TodoItem extends Component {
    render() {
        return (
            // 接收父層傳過來的值
            <div>{this.props.content}</div>
        )
    }
}
export default TodoItem