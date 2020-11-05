const defaultState = {
    inputValue: 'this is reducer',
    list: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ]
};
// 重要 reducer 可以接收state 但是不能直接改變state的值
export default (state = defaultState, action) => {
    console.log(state, action);
    if (action.type === 'changeData') {
        // 舊有資料進行拷貝
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        console.log('newState', newState);
        return newState

    }
    return state

}