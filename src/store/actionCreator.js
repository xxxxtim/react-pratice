
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

export {
    changeDataAction,
    handleBtnClickAction,
    handleItemDeleteAction
}