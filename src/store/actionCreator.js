
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

// redux-thunk 
const getTodoList = () => {
    // 這邊可以接收一個dispatch ，而不用調用store.dispatch
    return async (dispatch) => {
        try {
            const response = await axios.get('https://my-json-server.typicode.com/varbark/fake_json_api/cities')
            console.log(response.data)
            dispatch(initListAction(response.data))
        } catch (err) {
            console.log(err)
        }
    }
}

export {
    changeDataAction,
    handleBtnClickAction,
    handleItemDeleteAction,
    initListAction,
    getTodoList
}