import { createStore } from 'redux';
// 引入reducer.js
import reducer from './reducer'
const store = createStore(reducer);

export default store;