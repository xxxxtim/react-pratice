import React, { Component } from 'react'
import { Input, Button, List } from 'antd';

// UI component
// class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{ marginTop: '10px', marginLeft: '10px' }}>
//         <Input
//           value={this.props.inputValue}
//           placeholder="請輸入資料"
//           style={{ width: '300px', marginRight: '10px' }}
//           onChange={this.props.handleInputChange}
//         />
//         <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//         <List
//           bordered
//           dataSource={this.props.list}
//           renderItem={
//             (item, index) => (
//               // 寫法1
//               // <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)
//               // 寫法2
//               <List.Item onClick={() => this.props.handleItemDelete(index)}>{item}</List.Item>)

//           }
//           style={{ marginTop: '10px', width: '300px' }}
//         />
//       </div>

//     )
//   }
// }

// change2 no-state component
const TodoListUI = (props) => {
  return (
    <div style={{ marginTop: '10px', marginLeft: '10px' }}>
      <Input
        value={props.inputValue}
        placeholder="請輸入資料"
        style={{ width: '300px', marginRight: '10px' }}
        onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      <List
        bordered
        dataSource={props.list}
        renderItem={
          (item, index) => (
            // 寫法1
            // <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)
            // 寫法2
            <List.Item onClick={() => props.handleItemDelete(index)}>{item}</List.Item>)

        }
        style={{ marginTop: '10px', width: '300px' }}
      />
    </div>

  )
}

export default TodoListUI