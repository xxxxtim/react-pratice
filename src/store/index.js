import { createStore, compose } from 'redux';// 引入reducer.js 和redux
import reducer from './reducer'
// const store = createStore(
//     reducer,
//     applyMiddleware(thunk),
//     // redux套件要增加下面一行
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );


const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
);
const store = createStore(reducer, enhancer);

export default store;