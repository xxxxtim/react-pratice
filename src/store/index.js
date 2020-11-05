import { createStore } from 'redux';
// 引入reducer.js
import reducer from './reducer'
const store = createStore(
    reducer,
    // redux套件要增加下面一行
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;