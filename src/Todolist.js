import React, { Fragment } from 'react';
function Todolist() {
    return (
        <Fragment>
            <div>
                <input />
                <button>提交</button>
            </div>
            <ul>
                <li>learning english</li>
                <li>learning chinese</li>
            </ul>
        </Fragment>
    )
}

export default Todolist;