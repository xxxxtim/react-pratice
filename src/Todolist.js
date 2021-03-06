import React, { Component, Fragment } from 'react';
// import css
import './todolist.css';
// import component 
import Todoitem from './Todoitem'
// import Test from './Test'

// import axios from 'axios';

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['學習英文', '學習中文'],
    }
  }
  async componentDidMount() {
    // try {
    //   const response = await axios.get('https://opendata.epa.gov.tw/ws/Data/AQI/?$format=json')
    //   alert(response.data)
    // } catch (err) {
    //   alert(err)
    // }
  }
  render() {
    return (
      <Fragment>
        <label htmlFor="insertArea">請輸入內容</label>
        <div>
          <input
            id='insertArea'
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          {/* <button onClick={this.handleInputClick.bind(this)}>提交</button> */}
          {/* 使用arrow function 會自動綁定this */}
          <button onClick={() => this.handleInputClick()}>提交</button>

        </div>
        <ul>
          {/* <li>learning english</li> */}
          {/* <li>learning chinese</li> */}
          {this.state.list.map((item, index) =>
            // <div className='container' key={index}>
            //     <li
            //         onClick={this.handleItemDelete.bind(this, index)}
            //         dangerouslySetInnerHTML={{ __html: item }}>
            //         {/* {item} */}

            //     </li>
            //     {/* <button onClick={this.handleItemDelete.bind(this, index)}>X</button> */}
            // </div>

            // 使用其他component
            // 父層component 傳值給子層
            <Todoitem
              content={item}
              index={index}
              key={index}
              deleteItem={this.handleItemDelete.bind(this)}
            />
          )}
          {/* <Test
                        content2Test={this.state.inputValue}
                    /> */}
        </ul>
      </Fragment>
    )
  }
  handleInputChange(e) {
    console.log(e.target.value);
    console.log(this)
    // this.state.inputValue = e.target.value
    // 如果要更改state的值，必須要用 this.setState
    this.setState({
      inputValue: e.target.value
    })
    console.log(this.state.inputValue)
  }
  async handleInputClick(e) {
    console.log('click');
    await this.setState({
      // list: list.push(e.target.value)
      // 這種方式會造成整個陣列覆寫
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    });
    console.log('this apple')
  }
  handleItemDelete(index) {
    console.log('this is handleItemDelete')
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }
}

export default Todolist;