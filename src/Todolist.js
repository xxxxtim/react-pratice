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
            list: [],
        }
    }
    render() {

        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button>提交</button>
                </div>
                <ul>
                    <li>learning english</li>
                    <li>learning chinese</li>
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
}

export default Todolist;