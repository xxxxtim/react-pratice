import React, { Component } from 'react'
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return (
            // 接收父層傳過來的值
            // <div onClick={this.handleClick.bind(this)}>{this.props.content}</div>
            <div
                onClick={this.handleClick}
            >
                {this.props.content}
            </div>
        )
    }
    handleClick() {
        console.log('component alert');
        console.log(this.props.index)
        // 調用父層的method和參數
        this.props.deleteItem(this.props.index)
    }
}
export default TodoItem