import { createStore, compose, applyMiddleware } from 'redux';// 引入reducer.js 和redux
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
// 在store下建立一個 sagas.js 並且引入
import TodoSagas from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
);
const store = createStore(reducer, enhancer);
// then run the saga
sagaMiddleware.run(TodoSagas)

export default store;