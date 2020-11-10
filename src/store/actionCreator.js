
import axios from 'axios'

const changeDataAction = (value) => ({
    type: 'changeData',
    value
})

const handleBtnClickAction = (value) => ({
    type: 'addInputValue',
    value
})

const handleItemDeleteAction = (index) => ({
    type: 'deleteItem',
    index
})
// getAPI data and init list
const initListAction = (data) => ({
    type: 'initList',
    data
})

// redux-saga 


export {
    changeDataAction,
    handleBtnClickAction,
    handleItemDeleteAction,
    initListAction,
}