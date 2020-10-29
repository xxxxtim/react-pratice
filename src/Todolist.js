import React, { Component, Fragment } from 'react';
// function Todolist() {
//     return (
//         <Fragment>
//             <div>
//                 <input />
//                 <button>提交</button>
//             </div>
//             <ul>
//                 <li>learning english</li>
//                 <li>learning chinese</li>
//             </ul>
//         </Fragment>
//     )
// }

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['學習英文', '學習中文'],
        }
    }
    render() {

        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleInputClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {/* <li>learning english</li> */}
                    {/* <li>learning chinese</li> */}
                    {this.state.list.map((item, index) =>
                        <li key={index} onClick={this.handleItemDelete.bind(this, index)}>{item}</li>)}
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
    handleInputClick(e) {
        console.log('click');
        this.setState({
            // list: list.push(e.target.value)
            // 這種方式會造成整個陣列覆寫
            list: [...this.state.list, this.state.inputValue],
            inputValue: '',

        })
    }
    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
}

export default Todolist;